# ESP32 Servo Motion Kit 仕様書

## 目的とスコープ

* ESP32 向け Arduino（v3.0+）ライブラリで、ホビー用 PWM サーボと TTL/バスサーボを同期制御できるチェーン可能な API を提供する。
* ブラウザ UI で設定を作成し、ESP32 スケッチで利用できるヘッダ（単一 .h）を出力することをゴールとする。必要に応じて WebSerial で設定/動作を送信し、即座に試せる体験を提供する。
* WebSerial プロトコルで受信した設定を適用し、ライブラリ経由でサーボを駆動する ESP32 ファームウェアを提供する。
* 範囲外: 電気設計/PCB/BOM、サーボ本体のファーム改変、クラウド連携。

## 利用方針

* 内部構造ではなく「ユーザーがどう動かすか」から設計を積み上げる。
* Arduino API は流れるように書けるチェーンスタイルで、ジョイント/ポーズ/モーション定義を簡潔に。
* デフォルトは高レベルで安全; 詳細調整は必要なときにだけ開く。
* UI 主導で設定 → WebSerial 送信 → 即試行までを一貫させ、設定変更に再フラッシュを要求しない。

## 想定ユーザーとゴール

* マイコン/ロボットを素早く動かしたいメイカー・ホビイスト。
* 授業やデモで再現性のあるポーズ/モーションを作りたい教育者・展示担当。
* ゴール: 迅速なセットアップ、最小限の手順での操作、ブラウザからの即時試行、複数軸の同期動作。

## UX とフロー（ユースケース別）

* **ライブラリ単体利用（コード中心）**

  * Arduino スケッチ内でジョイント/ポーズ/モーション/シーケンスを定義し、`setup()` で初期化、`loop()` で play/stop/query を呼ぶ。
  * PC/スマホ UI は使わず、シリアルモニタ等でログ確認や微調整。設定変更はスケッチ再ビルドで適用。
* **UI でモーション作成 → 専用ファームで検証 → ライブラリ用ヘッダ出力**

  * ブラウザ UI でジョイント → ポーズ → モーション/シーケンスを編集・プレビュー。ジョイントグループは送信前に展開し、無効軸は除外。
  * ブラウザ UI からプレビュー用ファームウェア（UI 連携用）を WebSerial で転送する。
  * 転送したファームウェアに WebSerial で接続し、デバイス JSON を送信して動作プレビュー・保存。再生中の状態/ログ取得、緊急停止が可能。
  * 確認後、UI からライブラリ向けヘッダ（単一 .h）を出力。初期化コードとモーション/ポーズ定義を含み、ユーザーはスケッチ側で取り込み、`play` などの API を呼べば再生できる。

## コア概念

* **サーボ（Servo）**: 物理出力チャネル（PWM）や TTL/バス（マルチドロップ等）に紐づく最小単位。GPIO/バス割り当て、ニュートラルやリミットなどの設定を持ち、プロトコル差分はライブラリで吸収する。
* **ジョイント（Joint）**: 論理軸。1 つ以上のサーボにマッピングでき、ゲイン/オフセットでミラー動作や負荷分担（同一軸に複数サーボ）を表現できる。
* **ジョイントグループ（Joint Group / UI専用）**: UI で複数ジョイントをまとめて選択・操作するための論理集合。**デバイス側には実体を持たない**。
* **ポーズ（Pose）**: ジョイント目標をまとめた名前付きセット（角度/位置など）。UI 上ではキーフレーム（瞬間状態）としてタイムライン上に配置できる。
* **シーケンス（Sequence）**: ポーズの順序リスト。ループやトリガーを持つ再生単位。
* **イージング（Easing）**: 時間に対する補間カーブの定義。リニア、イージイン/アウト、独自カーブなどをシーケンスのステップに適用する。
* **移動時間（Move Duration）**: シーケンス等の遷移で指定する目標の移動時間。指定時間での到達を目指すが、各サーボの速度リミットにより必要な速度が上限を超える場合は **時間が自動的に延長**されるため、指定時間で必ず達成できるわけではない。特にイージングで加速が大きい区間でリミットに達すると、全体として遅くなる可能性がある。
* **イベント（Event）**: 外部デバイス連携や音など、サーボ以外の処理を同期させるための通知。ライブラリはイベントを **キューに追加**し、ユーザーは受信して任意の処理を行う。イベントは「発生箇所（どこで）」と「イベント番号」を主に通知し、処理内容はユーザーに委ねる。
* **トリガー（Trigger）**: 実行中の節目でイベントを発行するための条件設定。例: ポーズ開始、移動完了、ホールド完了など。**ポーズおよびシーケンスに設定できる。** トリガーは上限を設けて登録できる。

## コンポーネントと役割

* **Arduino ライブラリ (ESP32, v3.0+)**

  * PWM ピンと TTL バスラインの設定/接続をサポートし、混在利用を可能にする。
  * ジョイントビルダー: 軸定義、サーボ割り当て、リミット、ニュートラル/オフセット、キャリブレーション。
  * ポーズ/モーションビルダー: ポーズ作成、遷移・シーケンス定義、同期再生。
  * ランタイム: 同期更新スケジューラ、安全リミット、ソフトスタート/ストップ。
  * API はスケッチ的な流れで書けることを最優先する。
* **ESP32 ファームウェア (WebSerial ブリッジ)**

  * ブラウザ UI から転送されるプレビュー用ファームウェアとして動作する。
  * WebSerial セッション管理、JSON コマンド/設定の受信、ログ/状態の返却。
  * デバイス向け軽量 JSON をフラッシュ/FS に保存し、起動時にデフォルトをロード可能。
  * 再生/停止コマンドを実行し、進行状況やエラーを報告。
* **ブラウザ UI**

  * ジョイント/ポーズ/モーションをタイムラインで編集できるリッチエディタ。
  * WebSerial で接続/切断、ポート一覧、前回デバイスの再接続。
  * プレビュー用ファームウェアの転送（WebSerial）と、転送済みファームウェアでのプレビュー再生/停止。
  * 設定検証、モーションカーブのプレビュー、送信前のタイミング確認。
  * 設定送信と実行トリガー、ログ/テレメトリの取得表示。
  * ライブラリ向けヘッダ（単一 .h）の出力。

## Web UI 基本ルール

* 目的: 画面上で設定を作成し、ESP32 スケッチで利用できるヘッダ（単一 .h）を出力する。
* プレビュー: WebSerial を利用してプレビュー用ファームウェアを転送し、転送済みファームウェアで動作プレビューを行う。
* オフライン: デバイス未接続でも編集可能で、接続はプレビューや同期時にのみ要求する。
* 多言語: 既定で英語/日本語に対応し、ブラウザ言語が一致すれば自動選択、未一致時は英語を表示する。手動切替も可能。
* ワークスペース構成: 3 ペイン構成を基本とし、左ペインはリスト、中央は編集、右はプレビュー/補助操作を配置する。
* リスト共通操作: 追加、選択中の削除、ID 文字列の絞り込み入力を備える。可能な範囲で全ワークスペースに共通化する。
* UI専用の共通項目: すべての設定に **表示順（displayOrder）** と **説明（description）** を持たせる。表示順は数値が小さいほど上位で、同値の場合は ID 昇順で並べる。

## 用語の整理

### ライブラリ名

* **ESP32ServoMotionKit**

### リポジトリ

* `https://github.com/tanakamasayuki/ESP32ServoMotionKit`

### C++ 命名（方針）

* **namespace**: `motionkit`
* **メインクラス**: `motionkit::MotionKit`
* **サーボハンドル**: `motionkit::ServoHandle`

#### ログ TAG

* `"MotionKit"`

#### サンプルコードのルール

* サンプルでは `using namespace ...` / `using ...` を使わず、**常にネームスペースを明示**して記述する。

**例（最小）**

```cpp
motionkit::MotionKit kit;

auto s1 = kit.servo("s1")
              .pwm(18)
              .position();

if (!s1.ok()) {
  ESP_LOGE("MotionKit", "%s", s1.lastErrorStr());
}
```

## データモデルと設定

### メタ

UI/デバイス共通のスキーマ識別子とバージョン管理に使う。

> 任意項目（例: `description`）は **未設定の場合 JSON に出力しない**（空文字 `""` でも出力しない）。

#### リッチUI JSON

```json
{
  "meta": {
    "schema": "motionkit",
    "version": "0.1.0"
  }
}
```

#### シンプルJSON（デバイス向け）

```json
{
  "meta": {
    "schema": "motionkit",
    "version": "0.1.0"
  }
}
```

**生成ルール**

* シンプルJSONはリッチUI JSONをベースに生成する。
* 全ての項目から `displayOrder` と `description` を削除する。
* Servoでは `previewOffset` と `previewDirection` を削除する。
* Jointでは `previewOffset` と `previewDirection` を削除する。
* Jointの `servoRefs` に含まれる `min` / `max` を削除する。
* `jointGroups` はシンプルJSONに含めない。
* Poseでは `groupId` を削除する。
* Sequenceの `steps` に `sequenceId` が含まれる場合、そのシーケンスの `steps` を `sequenceId` を除外して展開する（1段のみ）。

#### C++ API（生成ヘッダ＆実行）

```cpp
#define MOTIONKIT_SCHEMA "motionkit"
#define MOTIONKIT_VERSION "0.1.0"
```

---

### Servo（共通）

サーボは物理チャネル（PWM 出力、TTL/バスなど）に紐づく最小単位。UI/ライブラリともに **角度（deg）を基本単位**として扱い、プロトコル差分（PWM/TTL）はライブラリで吸収する。

* **180°（位置制御）**を基本として扱う。
* **360°（連続回転）**も同一スキーマで表現できるようにし、`mode` により挙動を切り替える。

  * `mode: "position"` … 角度（deg）を目標として位置制御（180°サーボ向け）。
  * `mode: "wheel"` … 角度ではなく回転速度（deg/s 相当の正負値）を目標として連続回転（360°サーボ向け）。

> 注: 詳細フィールド定義（direction/neutral/limit/speed/offset 等）は後続で追加する。

---

### Servo（PWM）

PWM サーボは GPIO ピンに直接接続され、PWM パルス幅で制御される。
UI/設定は角度（deg）を基本単位として扱い、PWM 出力（µs）へのマッピングはライブラリで吸収する。

> 注: PWM 固有フィールド（pin / pwm パラメータ等）の詳細は後続で追加する。

---

### Servo（TTL / バス）

TTL/バスサーボは UART 等のバスライン上でアドレス指定して制御する。複数台を同一配線で扱える。

> 注: 本ドラフトではまず PWM を実装対象とし、TTL/バスの詳細項目は順次追加する。

---

#### リッチUI JSON（例：PWM）

```json
{
  "servos": [
    {
      "id": "s1",
      "name": "shoulder_left",
      "type": "pwm",
      "mode": "position",
      "pin": 18,
      "description": "Left shoulder servo for v1 prototype"
    }
  ]
}
```

#### リッチUI JSON（例：360°連続回転を同一スキーマで表現）

```json
{
  "servos": [
    {
      "id": "s2",
      "name": "wheel_servo",
      "type": "pwm",
      "mode": "wheel",
      "pin": 19
    }
  ]
}
```

#### シンプルJSON（デバイス向け、例）

```json
{
  "servos": [
    {
      "id": "s1",
      "type": "pwm",
      "mode": "position",
      "pin": 18
    }
  ]
}
```

#### C++ API（最小）

```cpp
auto s1 = kit.servo("s1")
              .pwm(18)
              .position();
```

> 注: 詳細項目は後続で拡張する。

---

### Joint（論理軸）

ジョイントはロボットの論理軸を表す。1つ以上のサーボを束ね、UI/シーケンス/ポーズで扱う基本単位となる。

* **目的**: 物理サーボ（Servo）と、ユーザーが意識する関節（Joint）を分離し、左右ミラーや複数サーボ同軸などの表現を可能にする。
* **マッピング**: 1つのJointに対して1つ以上のServoを割り当てられる。
* **補正**: ゲイン/オフセット等で、サーボ方向や機体差を吸収できる（詳細は後続で定義）。
* **UI専用情報**: リッチUI JSONでは `name` / `description` などを保持できる。

#### リッチUI JSON（例）

```json
{
  "joints": [
    {
      "id": "j1",
      "name": "shoulder_left",
      "description": "Left shoulder joint",
      "servoRefs": [
        {
          "servoId": "s1"
        }
      ]
    }
  ]
}
```

#### シンプルJSON（デバイス向け、例）

```json
{
  "joints": [
    {
      "id": "j1",
      "servoIds": ["s1"]
    }
  ]
}
```

#### C++ API（最小）

```cpp
auto j1 = kit.joint("j1").servo("s1");
```

#### 変換と解釈のルール

* `joints[*].servoRefs`（リッチUI）→ `servoIds`（デバイス向け）へ変換して送る。

### Joint Group（UI専用）

ジョイントグループは UI で複数ジョイントをまとめて選択・操作するための論理集合。
**デバイス側には実体を持たない**（送信時には展開され、グループ情報はシンプルJSONには含めない）。

- **用途**: UI 上の選択・編集効率（腕/脚などのまとめ操作）
- **送信**: デバイス向け設定には含めず、必要なら UI 側でジョイントID列へ展開する
- **互換**: ライブラリはジョイントグループを解釈しない（受信しても無視してよい）

#### リッチUI JSON（例）

```json
{
  "jointGroups": [
    {
      "id": "g_arm_left",
      "name": "left_arm",
      "description": "Left arm joints",
      "jointIds": ["j1", "j2", "j3"]
    }
  ]
}
```

#### シンプルJSON（デバイス向け）
- **出力しない**（デバイスには送らない）

#### C++ API（最小）
- **提供しない**（UI専用概念のため）

#### 変換と解釈のルール
- UI では `jointGroups[*].jointIds` を展開して編集対象ジョイントの集合を作る。
- デバイス向け JSON 生成時は `jointGroups` を含めない。

### Pose（ポーズ）

ポーズはジョイント目標をまとめた名前付きセット。UI 上ではキーフレーム（瞬間状態）としてタイムライン上に配置できる。
ポーズ自体は「状態」を表し、時間情報（移動時間 / イージング等）はシーケンス側で扱う。

- **内容**: `jointTargets` にジョイントIDと目標値（deg）を保持
- **用途**: 事前定義プリセット、シーケンスステップの参照先
- **トリガー**: ポーズ開始 / 到達 / ホールド完了などを設定できる（イベント発行用）

#### リッチUI JSON（例）

```json
{
  "poses": [
    {
      "id": "p_home",
      "name": "home",
      "description": "Neutral pose for setup",
      "jointTargets": [
        { "jointId": "j1", "deg": 90 },
        { "jointId": "j2", "deg": 45 }
      ],
      "triggers": [
        { "at": "start", "eventId": 1 },
        { "at": "hold_end", "eventId": 2 }
      ]
    }
  ]
}
```

#### シンプルJSON（デバイス向け、例）

```json
{
  "poses": [
    {
      "id": "p_home",
      "jointTargets": [
        { "jointId": "j1", "deg": 90 },
        { "jointId": "j2", "deg": 45 }
      ]
    }
  ]
}
```

#### C++ API（最小）

```cpp
auto p_home = kit.pose("p_home")
                .target("j1", 90)
                .target("j2", 45);
```

#### 変換と解釈のルール
- リッチUIの `name` / `description` / UI用メタ情報はデバイス向けJSONでは省略する。
- `triggers` はデバイスで解釈する（実装時に上限・対象イベント範囲を確定）。

### Easing（イージング）

イージングは時間に対する補間カーブの定義。シーケンスのステップに適用して移動の加減速を決める。

- **プリセット**: `linear` / `easeInOut` / `sCurve` など、代表的なカーブをIDで参照して利用できる。
- **ユーザー定義**: プリセット（例: `sCurve`）にパラメータを追加した **パラメトリックなカーブ**を定義できる想定とする（例: 効果の強さ、加速/減速の配分など）。
- **注意**: 速度リミットにより指定した移動時間が延長される場合、イージング形状が実質変化する可能性がある（特に加速区間でリミットに達すると全体が遅くなる）。

#### リッチUI JSON（例）

```json
{
  "easings": [
    {
      "id": "e_linear",
      "name": "linear",
      "type": "preset",
      "preset": "linear"
    },
    {
      "id": "e_smooth",
      "name": "smooth",
      "type": "preset",
      "preset": "easeInOut"
    },
    {
      "id": "e_scurve_strong",
      "name": "scurve_strong",
      "type": "custom",
      "preset": "sCurve",
      "params": {
        "strength": 0.8
      },
      "description": "Parametric S-curve easing (strong effect)"
    }
  ]
}
```

#### シンプルJSON（デバイス向け、例）

```json
{
  "easings": [
    { "id": "e_linear", "preset": "linear" },
    { "id": "e_smooth", "preset": "easeInOut" },
    {
      "id": "e_scurve_strong",
      "preset": "sCurve",
      "params": { "strength": 0.8 }
    }
  ]
}
```

#### 対応する C++ API（最小）

```cpp
auto e_smooth = kit.easing("e_smooth")
                  .preset("easeInOut");

auto e_scurve_strong = kit.easing("e_scurve_strong")
                        .preset("sCurve")
                        .param("strength", 0.8f);
```

#### 変換と解釈のルール
- リッチUIの `name` / `description` はデバイス向けJSONでは省略できる。
- `type: "custom"` はプリセット + パラメータによるパラメトリック定義を想定する。
- `preset` 以外（完全な任意カーブなど）は後続で追加する。

### Sequence（シーケンス）

シーケンスはポーズを時間軸に並べた再生単位。各ステップで移動時間とイージングを指定できる。
指定した移動時間での到達を目指すが、各サーボの速度リミットにより必要な速度が上限を超える場合は **時間が自動的に延長**される。
特にイージングで加速が大きい区間でリミットに達すると、全体として遅くなる可能性がある。

- **内容**: `steps` に pose参照、移動時間、イージング（全軸共通/軸別）、ホールド時間を保持
- **用途**: ループ再生、トリガーによるイベント発行、外部デバイスとの同期
- **トリガー**: シーケンス開始/終了、ステップ開始/完了、ホールド完了などを設定できる

#### 軸別イージング

通常は `steps[*].easingId` が全軸に適用される。`axisEasing` を追加すると、軸名（jointId）ごとにイージングを上書きできる。
`axisEasing` に含まれない軸は `easingId` を使用する。

#### シーケンス呼び出し（UI）

UIでは他のシーケンスを部品として呼び出せる。多重呼び出しは禁止で、1段のみを許可する。
デバイス向けに出力する際は呼び出し先のシーケンスを展開し、`steps` をフラット化する。
そのため、シンプルJSONやC++ APIでは通常のシーケンスとして出力される。

#### リッチUI JSON（例）

```json
{
  "sequences": [
    {
      "id": "seq_demo",
      "name": "demo",
      "description": "Demo motion sequence",
      "loop": false,
      "steps": [
        {
          "poseId": "p_home",
          "moveMs": 500,
          "easingId": "e_smooth",
          "holdMs": 200,
          "triggers": [
            { "at": "pose_start", "eventId": 10 },
            { "at": "move_end", "eventId": 11 }
          ]
        },
        {
          "poseId": "p_wave",
          "moveMs": 800,
          "easingId": "e_linear"
        }
      ],
      "triggers": [
        { "at": "sequence_start", "eventId": 100 },
        { "at": "sequence_end", "eventId": 101 }
      ]
    }
  ]
}
```

#### リッチUI JSON（軸別イージングの例）

```json
{
  "sequences": [
    {
      "id": "seq_demo_axis",
      "name": "demo_axis",
      "steps": [
        {
          "poseId": "p_home",
          "moveMs": 500,
          "easingId": "e_smooth",
          "axisEasing": {
            "yaw": "e_linear",
            "pitch": "e_smooth"
          }
        }
      ]
    }
  ]
}
```

#### シンプルJSON（デバイス向け、例）

```json
{
  "sequences": [
    {
      "id": "seq_demo",
      "steps": [
        { "poseId": "p_home", "moveMs": 500, "easingId": "e_smooth", "holdMs": 200 },
        { "poseId": "p_wave", "moveMs": 800, "easingId": "e_linear" }
      ]
    }
  ]
}
```

#### シンプルJSON（デバイス向け、軸別イージングの例）

```json
{
  "sequences": [
    {
      "id": "seq_demo_axis",
      "steps": [
        {
          "poseId": "p_home",
          "moveMs": 500,
          "easingId": "e_smooth",
          "axisEasing": {
            "yaw": "e_linear",
            "pitch": "e_smooth"
          }
        }
      ]
    }
  ]
}
```

#### C++ API（最小）

```cpp
auto seq_demo = kit.sequence("seq_demo")
                 .step("p_home", 500, "e_smooth")
                 .hold(200)
                 .step("p_wave", 800, "e_linear");
```

#### C++ API（軸別イージング）

```cpp
auto seq_demo = kit.sequence("seq_demo")
                 .step("p_home", 500, "e_smooth",
                       kit.easingOverride()
                         .set("yaw", "e_linear")
                         .set("pitch", "e_smooth"))
                 .hold(200)
                 .step("p_wave", 800, "e_linear");
```

#### 変換と解釈のルール
- リッチUIの `name` / `description` はデバイス向けJSONでは省略できる。
- `steps[*].moveMs` は目標であり、速度リミットにより実際の完了時間が延長される場合がある。
- `axisEasing` は軸別の上書き用マップで、未指定の軸は `easingId` を使用する。
- `triggers` はデバイス側でイベントキューへ投入され、ユーザーが受信して処理する。

### API 命名（実行系・統一案）

本ライブラリでは「定義（設定）」と「実行（再生/移動）」を分け、実行系 API 名は以下の3系統で統一する。

- **set...** : 状態（ターゲット値）を設定する。時間を伴わない。
- **moveTo... / moveToDeg** : 指定時間で到達を目指して移動する（速度リミット等により延長される場合がある）。
- **play...** : シーケンスを再生する。

> 注: `durationMs` は目標であり、速度リミットにより実際の完了時間が延長される場合がある。

#### シーケンス再生（Sequence）

##### 再生
- `playSequence(sequenceId)`

```cpp
kit.playSequence("seq_demo");
```

##### 停止 / 一時停止 / 再開
- `stop()`
- `pause()`
- `resume()`

```cpp
kit.pause();
kit.resume();
kit.stop();
```

#### ポーズへの移動（Pose）

##### 即適用（ターゲット設定のみ）
- `setPose(poseId)`

```cpp
kit.setPose("p_home");
```

##### 指定して移動（時間のみ）
- `moveToPose(poseId, durationMs)`

```cpp
kit.moveToPose("p_home", 500);
```

##### 指定して移動（時間 + easing）
- `moveToPose(poseId, durationMs, easingId)`

```cpp
kit.moveToPose("p_home", 500, "e_smooth");
```

#### 角度指定（Servo / Joint）

サーボ・ジョイントの単体操作でも、ポーズ移動と同じ語彙で統一する。

##### ServoHandle
- `setDeg(deg)`
- `moveToDeg(deg, durationMs)`
- `moveToDeg(deg, durationMs, easingId)`

```cpp
auto s1 = kit.servo("s1");

s1.setDeg(90);
s1.moveToDeg(90, 500);
s1.moveToDeg(90, 500, "e_smooth");
```

##### JointHandle
- `setDeg(deg)`
- `moveToDeg(deg, durationMs)`
- `moveToDeg(deg, durationMs, easingId)`

```cpp
auto j1 = kit.joint("j1");

j1.setDeg(45);
j1.moveToDeg(45, 500);
j1.moveToDeg(45, 500, "e_smooth");
```

#### まとめ（命名の統一表）

| 対象 | 即適用（set） | 時間付き移動（moveTo） | 再生（play） |
|---|---|---|---|
| Servo | `setDeg(deg)` | `moveToDeg(deg, durationMs, easingId?)` | — |
| Joint | `setDeg(deg)` | `moveToDeg(deg, durationMs, easingId?)` | — |
| Pose | `setPose(id)` | `moveToPose(id, durationMs, easingId?)` | — |
| Sequence | — | — | `playSequence(id)` |
