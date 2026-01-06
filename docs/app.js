document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      'app.meta.title': 'ESP32 Servo Motion Studio',
      'app.eyebrow': 'ESP32 Servo Motion Kit',
      'app.title': 'Motion Studio',
      'app.subtitle': 'Configure motion data and export a header for your ESP32 sketch. WebSerial preview is optional.',
      'app.tag.offline': 'Offline ready',
      'app.tag.webserial': 'WebSerial preview',
      'app.tag.layout': 'Header export',
      'device.title': 'Device Link',
      'device.status.disconnected': 'Disconnected',
      'device.status.connected': 'Connected',
      'device.status.connecting': 'Connecting...',
      'device.status.unsupported': 'WebSerial unsupported',
      'device.note': 'Edit offline, then flash preview firmware and connect when you want to preview before exporting the header.',
      'device.actions.connect': 'Connect',
      'device.actions.disconnect': 'Disconnect',
      'device.actions.flash': 'Flash preview firmware',
      'device.demo.label': 'Demo mode (no device needed)',
      'device.meta.port': 'Port',
      'device.meta.firmware': 'Firmware',
      'device.meta.sync': 'Last sync',
      'device.meta.mode': 'Mode',
      'device.mode.demo': 'Demo',
      'device.mode.live': 'Live',
      'preview.title': 'Preview',
      'preview.desc': 'Quickly send angles to all registered servos.',
      'preview.list.title': 'Registered servos',
      'preview.list.refresh': 'Refresh',
      'preview.bulk.title': 'Bulk angle control',
      'preview.bulk.angle': 'Target angle (deg)',
      'preview.bulk.duration': 'Move duration (ms)',
      'preview.bulk.easing': 'Easing',
      'preview.bulk.easing.linear': 'Linear',
      'preview.bulk.easing.smooth': 'Smooth',
      'preview.bulk.easing.strong': 'Strong S-curve',
      'preview.bulk.apply': 'Apply to all servos',
      'preview.bulk.neutral': 'Send neutral pose',
      'preview.status.title': 'Servo status',
      'preview.status.ready': 'Ready',
      'preview.status.moving': 'Moving',
      'preview.status.hold': 'Holding',
      'preview.status.stop': 'Stop all',
      'preview.status.sync': 'Sync state',
      'firmware.modal.title': 'Flash Preview Firmware',
      'firmware.modal.description': 'Select a preview firmware package and transfer it over WebSerial.',
      'firmware.modal.firmwareLabel': 'Firmware package',
      'firmware.modal.firmwareAria': 'Select firmware package',
      'firmware.modal.summary.title': 'Summary',
      'firmware.modal.summary.empty': 'Select a firmware package to see details.',
      'firmware.modal.baudrateLabel': 'Transfer speed',
      'firmware.modal.baudrateAria': 'Select transfer speed',
      'firmware.modal.baudrateHint': 'Choose a speed supported by your board.',
      'firmware.modal.eraseBefore': 'Erase flash before transfer',
      'firmware.modal.eraseBeforeHint': 'Runs erase_flash before writing.',
      'firmware.modal.details.title': 'Flash options',
      'firmware.modal.details.chip': 'Target',
      'firmware.modal.details.flashMode': 'Flash mode',
      'firmware.modal.details.flashFreq': 'Flash frequency',
      'firmware.modal.details.flashSize': 'Flash size',
      'firmware.modal.details.unknown': 'Unknown',
      'firmware.modal.details.keep': 'Keep',
      'firmware.modal.segments.title': 'Write segments',
      'firmware.modal.cancel': 'Close',
      'firmware.modal.erase': 'Erase',
      'firmware.modal.start': 'Start transfer',
      'firmware.modal.log.placeholder': 'Transfer log will appear here.',
      'firmware.modal.log.simulated': 'This is a simulated flow (layout preview).',
      'firmware.modal.log.select': 'Select a firmware package to continue.',
      'firmware.modal.log.unsupported': 'WebSerial is not supported in this browser.',
      'firmware.modal.log.eraseStart': 'Erasing flash...',
      'firmware.modal.log.eraseDone': 'Erase completed.',
      'firmware.modal.log.transferStart': 'Starting transfer...',
      'firmware.modal.log.transferDone': 'Transfer complete.',
      'firmware.modal.optionPlaceholder': 'Select a firmware',
      'firmware.modal.baudrateOption': '{baud} bps',
      'firmware.option.standard': 'Preview firmware (standard)',
      'firmware.option.fast': 'Preview firmware (fast updates)',
      'firmware.summary.standard': 'Standard preview firmware with WebSerial control and logging.',
      'firmware.summary.fast': 'Faster refresh for tuning servo motion and timing.',
      'insight.title': 'Workspace Snapshot',
      'insight.servos': 'Servos',
      'insight.joints': 'Joints',
      'insight.poses': 'Poses',
      'insight.sequences': 'Sequences',
      'language.label': 'Language',
      'language.hint': 'Auto-detected from the browser.',
      'language.aria': 'Select language',
      'language.option.en': 'English',
      'language.option.ja': 'Japanese',
      'tabs.heading': 'Workspace',
      'tabs.subheading': 'Core editors',
      'tabs.servo': 'Servo',
      'tabs.servo.note': 'PWM, limits, preview',
      'tabs.joint': 'Joint',
      'tabs.joint.note': 'Axis mapping & offsets',
      'tabs.jointGroup': 'Joint Group',
      'tabs.jointGroup.note': 'Grouped editing',
      'tabs.pose': 'Pose',
      'tabs.pose.note': 'Pose library',
      'tabs.sequence': 'Sequence',
      'tabs.sequence.note': 'Steps & triggers',
      'tabs.easing': 'Easing',
      'tabs.easing.note': 'Curves & presets',
      'tabs.event': 'Event',
      'tabs.event.note': 'Triggers & cues',
      'common.import': 'Import',
      'common.save': 'Save',
      'common.add': 'Add',
      'common.deleteSelected': 'Delete selected',
      'common.filter.label': 'Filter by ID',
      'common.filter.placeholder': 'Filter by ID',
      'servo.title': 'Servo Tuning',
      'servo.desc': 'Define PWM range, neutral, and safety limits per servo.',
      'servo.card.list': 'Servo List',
      'servo.card.profile': 'Servo Profile',
      'servo.form.id': 'Servo ID',
      'servo.form.id.placeholder': 'servo_front_left',
      'servo.form.channel': 'Channel',
      'servo.form.neutral': 'Neutral (deg)',
      'servo.form.pwmMin': 'PWM min (us)',
      'servo.form.pwmMax': 'PWM max (us)',
      'servo.form.speed': 'Speed limit (deg/s)',
      'servo.form.invert': 'Invert direction',
      'servo.form.torque': 'Torque guard',
      'servo.form.torque.soft': 'Soft',
      'servo.form.torque.balance': 'Balanced',
      'servo.form.torque.firm': 'Firm',
      'servo.card.preview': 'Live Preview',
      'servo.preview.angle': 'Preview angle',
      'servo.preview.sweep': 'Run sweep',
      'servo.preview.pulse': 'Send pulse',
      'servo.card.calibration': 'Calibration Notes',
      'servo.calibration.note': 'Keep the horn centered before saving. Use a neutral pose to align all axes.',
      'servo.calibration.item1': 'Neutral pose saved',
      'servo.calibration.item2': 'Limits verified',
      'servo.calibration.item3': 'Direction checked',
      'joint.title': 'Joint Mapping',
      'joint.desc': 'Bind logical axes to one or more servos.',
      'joint.card.list': 'Joint List',
      'joint.card.definition': 'Joint Definition',
      'joint.form.id': 'Joint ID',
      'joint.form.id.placeholder': 'yaw',
      'joint.form.type': 'Joint type',
      'joint.form.type.rotational': 'Rotational',
      'joint.form.type.linear': 'Linear',
      'joint.form.servos': 'Mapped servos',
      'joint.form.servos.placeholder': 'servo_front_left, servo_front_right',
      'joint.form.mirror': 'Mirror pair',
      'joint.form.offset': 'Neutral offset (deg)',
      'joint.card.limits': 'Limits & Gain',
      'joint.form.min': 'Min (deg)',
      'joint.form.max': 'Max (deg)',
      'joint.form.gain': 'Gain',
      'joint.form.soft': 'Soft limit',
      'joint.card.group': 'Group Tools',
      'joint.group.note': 'Coordinate limits and offsets across grouped joints.',
      'joint.group.sync': 'Sync offsets',
      'joint.group.balance': 'Balance load',
      'joint.group.test': 'Test range',
      'jointGroup.title': 'Joint Groups',
      'jointGroup.desc': 'Bundle joints for quick selection and batch edits.',
      'jointGroup.card.list': 'Group List',
      'jointGroup.list.arms': 'Arms',
      'jointGroup.list.head': 'Head',
      'jointGroup.list.add': 'Add group',
      'jointGroup.card.editor': 'Group Editor',
      'jointGroup.form.id': 'Group ID',
      'jointGroup.form.id.placeholder': 'jg_upper',
      'jointGroup.form.joints': 'Joint IDs',
      'jointGroup.form.joints.placeholder': 'yaw, pitch, roll',
      'jointGroup.card.actions': 'Quick Actions',
      'jointGroup.actions.note': 'Groups are UI-only and expanded before export.',
      'jointGroup.actions.select': 'Select group',
      'jointGroup.actions.expand': 'Expand joints',
      'pose.title': 'Pose Library',
      'pose.desc': 'Capture and edit joint angles as reusable poses.',
      'pose.card.list': 'Pose List',
      'pose.list.home': 'Home',
      'pose.list.wave': 'Wave',
      'pose.list.ready': 'Ready',
      'pose.list.add': 'Add pose',
      'pose.card.editor': 'Pose Editor',
      'pose.editor.name': 'Pose name',
      'pose.editor.name.placeholder': 'pose_wave',
      'pose.editor.hold': 'Hold (ms)',
      'pose.editor.axis': 'Axis',
      'pose.editor.value': 'Target (deg)',
      'pose.card.capture': 'Capture & Preview',
      'pose.capture.note': 'Works offline; device sync is optional.',
      'pose.capture.snapshot': 'Snapshot from device',
      'pose.capture.preview': 'Preview pose',
      'sequence.title': 'Sequence Orchestration',
      'sequence.desc': 'Compose steps, triggers, and reusable sequences for header export.',
      'sequence.card.list': 'Sequence List',
      'sequence.card.steps': 'Sequence Steps',
      'sequence.steps.step1': 'Step 1: p_home',
      'sequence.steps.step2': 'Step 2: p_wave',
      'sequence.steps.step3': 'Step 3: call seq_intro',
      'sequence.steps.inline': 'Inline on header export',
      'sequence.steps.add': 'Add step',
      'sequence.card.rules': 'Loop & Trigger',
      'sequence.form.loop': 'Loop playback',
      'sequence.form.trigger': 'Trigger',
      'sequence.form.trigger.option.start': 'On sequence start',
      'sequence.form.trigger.option.end': 'On sequence end',
      'sequence.form.eventId': 'Event ID',
      'sequence.card.axis': 'Axis Easing',
      'sequence.axis.note': 'Override per axis when needed.',
      'sequence.axis.edit': 'Edit overrides',
      'easing.title': 'Easing Library',
      'easing.desc': 'Manage easing presets and custom curves.',
      'easing.card.list': 'Easing List',
      'easing.list.preset': 'Preset',
      'easing.list.custom': 'Custom',
      'easing.list.add': 'Add easing',
      'easing.card.editor': 'Curve Editor',
      'easing.form.id': 'Easing ID',
      'easing.form.preset': 'Preset',
      'easing.form.preset.linear': 'Linear',
      'easing.form.preset.smooth': 'Smooth',
      'easing.form.preset.curve': 'S-curve',
      'easing.form.param': 'Strength',
      'easing.card.preview': 'Preview',
      'easing.preview.note': 'Use to compare timing curves.',
      'easing.preview.apply': 'Apply to selection',
      'easing.preview.reset': 'Reset',
      'event.title': 'Event Setup',
      'event.desc': 'Define event IDs and map triggers to cues.',
      'event.card.list': 'Event List',
      'event.list.start': 'Sequence start',
      'event.list.pose': 'Pose complete',
      'event.list.add': 'Add event',
      'event.card.mapping': 'Trigger Mapping',
      'event.form.trigger': 'Trigger',
      'event.form.trigger.start': 'Sequence start',
      'event.form.trigger.end': 'Sequence end',
      'event.form.trigger.poseStart': 'Pose start',
      'event.form.trigger.poseEnd': 'Pose end',
      'event.form.eventId': 'Event ID',
      'event.card.preview': 'Event Queue',
      'event.preview.note': 'Events are queued and handled in the sketch.',
      'event.preview.simulate': 'Simulate',
      'event.preview.clear': 'Clear'
    },
    ja: {
      'app.meta.title': 'ESP32 サーボモーションスタジオ',
      'app.eyebrow': 'ESP32 サーボモーションキット',
      'app.title': 'モーションスタジオ',
      'app.subtitle': 'サーボ/ジョイント/ポーズ/シーケンス/イージングを設定し、ESP32 スケッチ向けヘッダを出力します。WebSerial プレビューは任意です。',
      'app.tag.offline': 'オフライン編集',
      'app.tag.webserial': 'WebSerialプレビュー',
      'app.tag.layout': 'ヘッダ出力',
      'device.title': 'デバイス接続',
      'device.status.disconnected': '未接続',
      'device.status.connected': '接続済み',
      'device.status.connecting': '接続中…',
      'device.status.unsupported': 'WebSerial 非対応',
      'device.note': 'オフラインで編集し、プレビュー時はプレビュー用ファームウェアを転送して接続します。ヘッダ出力前の確認に利用できます。',
      'device.actions.connect': '接続',
      'device.actions.disconnect': '切断',
      'device.actions.flash': 'プレビュー用ファームウェア転送',
      'device.demo.label': 'デモモード（接続不要）',
      'device.meta.port': 'ポート',
      'device.meta.firmware': 'ファームウェア',
      'device.meta.sync': '最終同期',
      'device.meta.mode': 'モード',
      'device.mode.demo': 'デモ',
      'device.mode.live': 'ライブ',
      'preview.title': 'プレビュー',
      'preview.desc': '登録済みサーボ全体に角度指定をまとめて送れます。',
      'preview.list.title': '登録済みサーボ',
      'preview.list.refresh': '更新',
      'preview.bulk.title': '一括角度指定',
      'preview.bulk.angle': '目標角度 (deg)',
      'preview.bulk.duration': '移動時間 (ms)',
      'preview.bulk.easing': 'イージング',
      'preview.bulk.easing.linear': 'リニア',
      'preview.bulk.easing.smooth': 'スムーズ',
      'preview.bulk.easing.strong': '強め S カーブ',
      'preview.bulk.apply': '全サーボに適用',
      'preview.bulk.neutral': 'ニュートラルを送信',
      'preview.status.title': 'サーボ状態',
      'preview.status.ready': '待機',
      'preview.status.moving': '移動中',
      'preview.status.hold': '保持中',
      'preview.status.stop': '全停止',
      'preview.status.sync': '状態同期',
      'firmware.modal.title': 'プレビュー用ファームウェアを転送',
      'firmware.modal.description': 'プレビュー用ファームウェアを選択し、WebSerial で転送します。',
      'firmware.modal.firmwareLabel': 'ファームウェア選択',
      'firmware.modal.firmwareAria': '転送するファームウェアを選択',
      'firmware.modal.summary.title': '説明',
      'firmware.modal.summary.empty': 'ファームウェアを選択すると詳細が表示されます。',
      'firmware.modal.baudrateLabel': '転送速度',
      'firmware.modal.baudrateAria': '転送速度を選択',
      'firmware.modal.baudrateHint': 'ボードが対応する速度を選択してください。',
      'firmware.modal.eraseBefore': '転送前にフラッシュを消去する',
      'firmware.modal.eraseBeforeHint': '書き込み前に erase_flash を実行します。',
      'firmware.modal.details.title': '書き込みオプション',
      'firmware.modal.details.chip': 'ターゲット',
      'firmware.modal.details.flashMode': 'Flash モード',
      'firmware.modal.details.flashFreq': 'Flash 周波数',
      'firmware.modal.details.flashSize': 'Flash サイズ',
      'firmware.modal.details.unknown': '不明',
      'firmware.modal.details.keep': '保持',
      'firmware.modal.segments.title': '書き込みセグメント',
      'firmware.modal.cancel': '閉じる',
      'firmware.modal.erase': '消去',
      'firmware.modal.start': '転送を開始',
      'firmware.modal.log.placeholder': '転送ログがここに表示されます。',
      'firmware.modal.log.simulated': 'レイアウト確認用のシミュレーションです。',
      'firmware.modal.log.select': 'ファームウェアを選択してください。',
      'firmware.modal.log.unsupported': 'このブラウザでは WebSerial を利用できません。',
      'firmware.modal.log.eraseStart': 'フラッシュを消去しています...',
      'firmware.modal.log.eraseDone': '消去が完了しました。',
      'firmware.modal.log.transferStart': '転送を開始します...',
      'firmware.modal.log.transferDone': '転送が完了しました。',
      'firmware.modal.optionPlaceholder': 'ファームウェアを選択',
      'firmware.modal.baudrateOption': '{baud} bps',
      'firmware.option.standard': 'プレビュー用ファーム（標準）',
      'firmware.option.fast': 'プレビュー用ファーム（高速更新）',
      'firmware.summary.standard': 'WebSerial 操作とログ機能を備えた標準ファームです。',
      'firmware.summary.fast': 'サーボ調整向けに更新頻度を高めたファームです。',
      'insight.title': 'ワークスペース概要',
      'insight.servos': 'サーボ',
      'insight.joints': 'ジョイント',
      'insight.poses': 'ポーズ',
      'insight.sequences': 'シーケンス',
      'language.label': '表示言語',
      'language.hint': 'ブラウザの言語から自動判定します。',
      'language.aria': '言語を選択',
      'language.option.en': 'English',
      'language.option.ja': '日本語',
      'tabs.heading': 'ワークスペース',
      'tabs.subheading': '主要エディタ',
      'tabs.servo': 'サーボ',
      'tabs.servo.note': 'PWM/リミット/プレビュー',
      'tabs.joint': 'ジョイント',
      'tabs.joint.note': '軸マッピング/オフセット',
      'tabs.jointGroup': 'ジョイントグループ',
      'tabs.jointGroup.note': 'まとめ編集',
      'tabs.pose': 'ポーズ',
      'tabs.pose.note': 'ポーズ一覧',
      'tabs.sequence': 'シーケンス',
      'tabs.sequence.note': 'ステップ/トリガー',
      'tabs.easing': 'イージング',
      'tabs.easing.note': 'カーブ/プリセット',
      'tabs.event': 'イベント',
      'tabs.event.note': 'トリガー/通知',
      'common.import': 'インポート',
      'common.save': '保存',
      'common.add': '追加',
      'common.deleteSelected': '選択を削除',
      'common.filter.label': 'IDで絞り込み',
      'common.filter.placeholder': 'IDで絞り込み',
      'servo.title': 'サーボ調整',
      'servo.desc': 'サーボごとの PWM 範囲、ニュートラル、安全リミットを設定します。',
      'servo.card.list': 'サーボ一覧',
      'servo.card.profile': 'サーボプロファイル',
      'servo.form.id': 'サーボ ID',
      'servo.form.id.placeholder': 'servo_front_left',
      'servo.form.channel': 'チャンネル',
      'servo.form.neutral': 'ニュートラル (deg)',
      'servo.form.pwmMin': 'PWM 最小 (us)',
      'servo.form.pwmMax': 'PWM 最大 (us)',
      'servo.form.speed': '速度リミット (deg/s)',
      'servo.form.invert': '回転方向を反転',
      'servo.form.torque': 'トルク保護',
      'servo.form.torque.soft': 'ソフト',
      'servo.form.torque.balance': 'バランス',
      'servo.form.torque.firm': '強め',
      'servo.card.preview': 'ライブプレビュー',
      'servo.preview.angle': 'プレビュー角度',
      'servo.preview.sweep': 'スイープ実行',
      'servo.preview.pulse': 'パルス送信',
      'servo.card.calibration': 'キャリブレーション',
      'servo.calibration.note': '保存前にホーンを中央に合わせ、ニュートラルポーズで全軸を整列します。',
      'servo.calibration.item1': 'ニュートラル保存済み',
      'servo.calibration.item2': 'リミット確認済み',
      'servo.calibration.item3': '方向確認済み',
      'joint.title': 'ジョイント設定',
      'joint.desc': '論理軸を 1 つ以上のサーボに割り当てます。',
      'joint.card.list': 'ジョイント一覧',
      'joint.card.definition': 'ジョイント定義',
      'joint.form.id': 'ジョイント ID',
      'joint.form.id.placeholder': 'yaw',
      'joint.form.type': 'ジョイント種別',
      'joint.form.type.rotational': '回転',
      'joint.form.type.linear': '直動',
      'joint.form.servos': '割り当てサーボ',
      'joint.form.servos.placeholder': 'servo_front_left, servo_front_right',
      'joint.form.mirror': 'ミラーペア',
      'joint.form.offset': 'ニュートラルオフセット (deg)',
      'joint.card.limits': 'リミットとゲイン',
      'joint.form.min': '最小 (deg)',
      'joint.form.max': '最大 (deg)',
      'joint.form.gain': 'ゲイン',
      'joint.form.soft': 'ソフトリミット',
      'joint.card.group': 'グループツール',
      'joint.group.note': 'グループ化されたジョイントのリミットやオフセットを調整します。',
      'joint.group.sync': 'オフセット同期',
      'joint.group.balance': '負荷分散',
      'joint.group.test': 'レンジテスト',
      'jointGroup.title': 'ジョイントグループ',
      'jointGroup.desc': 'ジョイントをまとめて選択し、一括編集できます。',
      'jointGroup.card.list': 'グループ一覧',
      'jointGroup.list.arms': '腕',
      'jointGroup.list.head': '頭',
      'jointGroup.list.add': 'グループ追加',
      'jointGroup.card.editor': 'グループ編集',
      'jointGroup.form.id': 'グループ ID',
      'jointGroup.form.id.placeholder': 'jg_upper',
      'jointGroup.form.joints': 'ジョイント ID',
      'jointGroup.form.joints.placeholder': 'yaw, pitch, roll',
      'jointGroup.card.actions': 'クイック操作',
      'jointGroup.actions.note': 'グループは UI 専用で、出力前に展開されます。',
      'jointGroup.actions.select': 'グループ選択',
      'jointGroup.actions.expand': 'ジョイント展開',
      'pose.title': 'ポーズライブラリ',
      'pose.desc': 'ジョイント角度をキャプチャし、再利用できるポーズとして編集します。',
      'pose.card.list': 'ポーズ一覧',
      'pose.list.home': 'ホーム',
      'pose.list.wave': 'ウェーブ',
      'pose.list.ready': '準備',
      'pose.list.add': 'ポーズ追加',
      'pose.card.editor': 'ポーズ編集',
      'pose.editor.name': 'ポーズ名',
      'pose.editor.name.placeholder': 'pose_wave',
      'pose.editor.hold': 'ホールド (ms)',
      'pose.editor.axis': '軸',
      'pose.editor.value': '目標 (deg)',
      'pose.card.capture': 'キャプチャとプレビュー',
      'pose.capture.note': 'オフラインでも利用可能で、デバイス同期は任意です。',
      'pose.capture.snapshot': 'デバイスから取得',
      'pose.capture.preview': 'ポーズを再生',
      'sequence.title': 'シーケンス構成',
      'sequence.desc': 'ステップ/トリガー/再利用シーケンスを構成し、ヘッダ出力に反映します。',
      'sequence.card.list': 'シーケンス一覧',
      'sequence.card.steps': 'シーケンスステップ',
      'sequence.steps.step1': 'ステップ 1: p_home',
      'sequence.steps.step2': 'ステップ 2: p_wave',
      'sequence.steps.step3': 'ステップ 3: seq_intro を呼び出し',
      'sequence.steps.inline': 'ヘッダ出力時に展開',
      'sequence.steps.add': 'ステップ追加',
      'sequence.card.rules': 'ループとトリガー',
      'sequence.form.loop': 'ループ再生',
      'sequence.form.trigger': 'トリガー',
      'sequence.form.trigger.option.start': 'シーケンス開始時',
      'sequence.form.trigger.option.end': 'シーケンス終了時',
      'sequence.form.eventId': 'イベント ID',
      'sequence.card.axis': '軸別イージング',
      'sequence.axis.note': '必要に応じて軸ごとに上書きします。',
      'sequence.axis.edit': '上書きを編集',
      'easing.title': 'イージング管理',
      'easing.desc': 'イージングのプリセットやカスタムカーブを管理します。',
      'easing.card.list': 'イージング一覧',
      'easing.list.preset': 'プリセット',
      'easing.list.custom': 'カスタム',
      'easing.list.add': 'イージング追加',
      'easing.card.editor': 'カーブ編集',
      'easing.form.id': 'イージング ID',
      'easing.form.preset': 'プリセット',
      'easing.form.preset.linear': 'リニア',
      'easing.form.preset.smooth': 'スムーズ',
      'easing.form.preset.curve': 'S カーブ',
      'easing.form.param': '強さ',
      'easing.card.preview': 'プレビュー',
      'easing.preview.note': 'タイミングカーブを比較します。',
      'easing.preview.apply': '選択に適用',
      'easing.preview.reset': 'リセット',
      'event.title': 'イベント設定',
      'event.desc': 'イベント ID とトリガーの対応を定義します。',
      'event.card.list': 'イベント一覧',
      'event.list.start': 'シーケンス開始',
      'event.list.pose': 'ポーズ完了',
      'event.list.add': 'イベント追加',
      'event.card.mapping': 'トリガー設定',
      'event.form.trigger': 'トリガー',
      'event.form.trigger.start': 'シーケンス開始',
      'event.form.trigger.end': 'シーケンス終了',
      'event.form.trigger.poseStart': 'ポーズ開始',
      'event.form.trigger.poseEnd': 'ポーズ完了',
      'event.form.eventId': 'イベント ID',
      'event.card.preview': 'イベントキュー',
      'event.preview.note': 'イベントはキューに追加され、スケッチ側で処理します。',
      'event.preview.simulate': 'シミュレーション',
      'event.preview.clear': 'クリア'
    }
  };

  const supportedLanguages = ['en', 'ja'];
  const storageKey = 'esp32ServoMotion.language';
  let currentLanguage = 'en';

  const elements = document.querySelectorAll('[data-i18n]');
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  const ariaLabels = document.querySelectorAll('[data-i18n-aria]');

  const statusLabel = document.getElementById('status-label');
  const statusPill = document.getElementById('status-pill');
  const connectButton = document.getElementById('connect-button');
  const disconnectButton = document.getElementById('disconnect-button');
  const flashButton = document.getElementById('flash-button');
  const demoToggle = document.getElementById('demo-toggle');
  const modeLabel = document.getElementById('mode-label');
  const portLabel = document.getElementById('port-label');
  const syncLabel = document.getElementById('sync-label');
  const languageSelect = document.getElementById('language-select');
  const firmwareModal = document.querySelector('[data-modal="firmware-flash"]');
  const firmwareSelect = document.getElementById('firmware-select');
  const firmwareBaudrate = document.getElementById('firmware-baudrate');
  const firmwareEraseBefore = document.getElementById('firmware-erase-before');
  const firmwareSummaryText = document.querySelector('[data-firmware-summary-text]');
  const firmwareSegments = document.querySelector('[data-firmware-segments]');
  const firmwareProgress = document.querySelector('[data-flash-progress] progress');
  const firmwareProgressLabel = document.querySelector('[data-flash-progress-label]');
  const firmwareLog = document.querySelector('[data-flash-log]');
  const firmwareEraseButton = document.getElementById('firmware-erase-button');
  const firmwareStartButton = document.getElementById('firmware-start-button');

  let updateFirmwareLocale = () => {};
  let updateHeroPanels = () => {};

  const state = {
    status: 'disconnected',
    demoMode: true,
    supported: 'serial' in navigator,
    port: null
  };

  const getTranslation = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || '';
  };

  const applyTranslations = (lang) => {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.title = getTranslation('app.meta.title');

    elements.forEach((element) => {
      const key = element.dataset.i18n;
      const value = getTranslation(key);
      if (value) {
        element.textContent = value;
      }
    });

    placeholders.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const value = getTranslation(key);
      if (value) {
        element.setAttribute('placeholder', value);
      }
    });

    ariaLabels.forEach((element) => {
      const key = element.dataset.i18nAria;
      const value = getTranslation(key);
      if (value) {
        element.setAttribute('aria-label', value);
      }
    });

    updateConnectionUI();
    updateFirmwareLocale();
    updateHeroPanels();
  };

  const detectLanguage = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved && supportedLanguages.includes(saved)) {
      return saved;
    }

    const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
    for (const candidate of candidates) {
      const normalized = candidate.toLowerCase();
      const base = normalized.split('-')[0];
      if (supportedLanguages.includes(base)) {
        return base;
      }
    }
    return 'en';
  };

  const interpolate = (template, params) => {
    return template.replace(/\{(\w+)\}/g, (_, key) => {
      return params[key] ?? '';
    });
  };

  const firmwareCatalog = [
    {
      id: 'preview_standard',
      optionKey: 'firmware.option.standard',
      summaryKey: 'firmware.summary.standard',
      details: {
        chip: 'ESP32',
        flashMode: 'dio',
        flashFreq: '40MHz',
        flashSize: '4MB'
      },
      segments: ['0x1000 bootloader.bin', '0x8000 partitions.bin', '0x10000 motionkit_preview.bin'],
      baudrates: [115200, 460800, 921600]
    },
    {
      id: 'preview_fast',
      optionKey: 'firmware.option.fast',
      summaryKey: 'firmware.summary.fast',
      details: {
        chip: 'ESP32',
        flashMode: 'qio',
        flashFreq: '80MHz',
        flashSize: '4MB'
      },
      segments: ['0x1000 bootloader.bin', '0x8000 partitions.bin', '0x10000 motionkit_preview_fast.bin'],
      baudrates: [460800, 921600, 1500000]
    }
  ];

  const firmwareState = {
    selectedId: '',
    busy: false,
    timer: null,
    progress: 0,
    logIsPlaceholder: true
  };

  const openModal = (modal) => {
    if (!modal) {
      return;
    }
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeModal = (modal) => {
    if (!modal) {
      return;
    }
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const setFirmwareProgress = (value) => {
    const clamped = Math.max(0, Math.min(100, value));
    firmwareState.progress = clamped;
    if (firmwareProgress) {
      firmwareProgress.value = clamped;
    }
    if (firmwareProgressLabel) {
      firmwareProgressLabel.textContent = `${clamped}%`;
    }
  };

  const setFirmwareLog = (message) => {
    if (!firmwareLog) {
      return;
    }
    firmwareLog.textContent = message;
    firmwareLog.scrollTop = firmwareLog.scrollHeight;
    firmwareState.logIsPlaceholder = message === getTranslation('firmware.modal.log.placeholder');
  };

  const appendFirmwareLog = (message) => {
    if (!firmwareLog) {
      return;
    }
    const placeholder = getTranslation('firmware.modal.log.placeholder');
    const base = firmwareLog.textContent.trim();
    const content = base && base !== placeholder ? `${base}\n${message}` : message;
    firmwareLog.textContent = content;
    firmwareLog.scrollTop = firmwareLog.scrollHeight;
    firmwareState.logIsPlaceholder = false;
  };

  const setFirmwareBusy = (busy) => {
    firmwareState.busy = busy;
    const hasSelection = Boolean(firmwareState.selectedId);
    if (firmwareSelect) {
      firmwareSelect.disabled = busy;
    }
    if (firmwareBaudrate) {
      firmwareBaudrate.disabled = busy || !hasSelection;
    }
    if (firmwareEraseBefore) {
      firmwareEraseBefore.disabled = busy || !hasSelection;
    }
    if (firmwareEraseButton) {
      firmwareEraseButton.disabled = busy || !hasSelection;
    }
    if (firmwareStartButton) {
      firmwareStartButton.disabled = busy || !hasSelection;
    }
  };

  const resetFirmwareModal = () => {
    if (firmwareState.timer) {
      clearInterval(firmwareState.timer);
      firmwareState.timer = null;
    }
    setFirmwareProgress(0);
    setFirmwareBusy(false);
    if (firmwareEraseBefore) {
      firmwareEraseBefore.checked = true;
    }
    setFirmwareLog(getTranslation('firmware.modal.log.placeholder'));
  };

  const renderFirmwareOptions = () => {
    if (!firmwareSelect) {
      return;
    }
    firmwareSelect.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = getTranslation('firmware.modal.optionPlaceholder');
    firmwareSelect.appendChild(placeholder);

    firmwareCatalog.forEach((firmware) => {
      const option = document.createElement('option');
      option.value = firmware.id;
      option.textContent = getTranslation(firmware.optionKey);
      firmwareSelect.appendChild(option);
    });
  };

  const updateFirmwareDetails = () => {
    const selected = firmwareCatalog.find((item) => item.id === firmwareState.selectedId);
    if (!selected) {
      if (firmwareSummaryText) {
        firmwareSummaryText.textContent = getTranslation('firmware.modal.summary.empty');
      }
      if (firmwareSegments) {
        firmwareSegments.innerHTML = '';
      }
      document.querySelectorAll('[data-firmware-detail]').forEach((node) => {
        node.textContent = '--';
      });
      if (firmwareBaudrate) {
        firmwareBaudrate.innerHTML = '';
      }
      setFirmwareBusy(firmwareState.busy);
      return;
    }

    if (firmwareSummaryText) {
      firmwareSummaryText.textContent = getTranslation(selected.summaryKey);
    }

    const detailMap = {
      chip: selected.details.chip || getTranslation('firmware.modal.details.unknown'),
      'flash-mode': selected.details.flashMode || getTranslation('firmware.modal.details.keep'),
      'flash-freq': selected.details.flashFreq || getTranslation('firmware.modal.details.keep'),
      'flash-size': selected.details.flashSize || getTranslation('firmware.modal.details.keep')
    };

    document.querySelectorAll('[data-firmware-detail]').forEach((node) => {
      const key = node.dataset.firmwareDetail;
      node.textContent = detailMap[key] || '--';
    });

    if (firmwareSegments) {
      firmwareSegments.innerHTML = '';
      selected.segments.forEach((segment) => {
        const item = document.createElement('li');
        item.textContent = segment;
        firmwareSegments.appendChild(item);
      });
    }

    if (firmwareBaudrate) {
      firmwareBaudrate.innerHTML = '';
      selected.baudrates.forEach((baud) => {
        const option = document.createElement('option');
        option.value = String(baud);
        option.textContent = interpolate(getTranslation('firmware.modal.baudrateOption'), { baud });
        firmwareBaudrate.appendChild(option);
      });
      firmwareBaudrate.value = String(selected.baudrates[0]);
    }

    setFirmwareBusy(firmwareState.busy);
  };

  const selectFirmware = (id) => {
    firmwareState.selectedId = id;
    if (firmwareSelect) {
      firmwareSelect.value = id;
    }
    updateFirmwareDetails();
  };

  updateFirmwareLocale = () => {
    renderFirmwareOptions();
    if (firmwareState.selectedId) {
      const exists = firmwareCatalog.some((item) => item.id === firmwareState.selectedId);
      if (!exists) {
        firmwareState.selectedId = '';
      }
    }
    if (firmwareSelect) {
      firmwareSelect.value = firmwareState.selectedId;
    }
    updateFirmwareDetails();
    if (firmwareState.logIsPlaceholder) {
      setFirmwareLog(getTranslation('firmware.modal.log.placeholder'));
    }
  };

  const simulateProgress = () => {
    setFirmwareProgress(0);
    firmwareState.timer = setInterval(() => {
      const next = firmwareState.progress + 12;
      setFirmwareProgress(next);
      if (next >= 100) {
        clearInterval(firmwareState.timer);
        firmwareState.timer = null;
        appendFirmwareLog(getTranslation('firmware.modal.log.transferDone'));
        setFirmwareBusy(false);
      }
    }, 260);
  };

  const startEraseOnly = () => {
    if (!firmwareState.selectedId) {
      appendFirmwareLog(getTranslation('firmware.modal.log.select'));
      return;
    }
    setFirmwareBusy(true);
    appendFirmwareLog(getTranslation('firmware.modal.log.simulated'));
    appendFirmwareLog(getTranslation('firmware.modal.log.eraseStart'));
    setTimeout(() => {
      appendFirmwareLog(getTranslation('firmware.modal.log.eraseDone'));
      setFirmwareBusy(false);
    }, 700);
  };

  const startTransfer = () => {
    if (!state.supported) {
      appendFirmwareLog(getTranslation('firmware.modal.log.unsupported'));
      return;
    }
    if (!firmwareState.selectedId) {
      appendFirmwareLog(getTranslation('firmware.modal.log.select'));
      return;
    }
    setFirmwareBusy(true);
    appendFirmwareLog(getTranslation('firmware.modal.log.simulated'));
    const runTransfer = () => {
      appendFirmwareLog(getTranslation('firmware.modal.log.transferStart'));
      simulateProgress();
    };
    if (firmwareEraseBefore && firmwareEraseBefore.checked) {
      appendFirmwareLog(getTranslation('firmware.modal.log.eraseStart'));
      setTimeout(() => {
        appendFirmwareLog(getTranslation('firmware.modal.log.eraseDone'));
        runTransfer();
      }, 700);
    } else {
      runTransfer();
    }
  };

  const updateConnectionUI = () => {
    const statusKey = `device.status.${state.status}`;
    statusLabel.textContent = getTranslation(statusKey);

    statusPill.classList.remove('is-connected', 'is-unsupported', 'is-connecting');
    if (state.status === 'connected') {
      statusPill.classList.add('is-connected');
    }
    if (state.status === 'unsupported') {
      statusPill.classList.add('is-unsupported');
    }
    if (state.status === 'connecting') {
      statusPill.classList.add('is-connecting');
    }

    connectButton.disabled = !state.supported || state.status === 'connected' || state.status === 'connecting';
    disconnectButton.disabled = state.status !== 'connected';
    flashButton.disabled = !state.supported || state.status === 'connecting';

    modeLabel.textContent = getTranslation(state.demoMode ? 'device.mode.demo' : 'device.mode.live');
  };

  const setStatus = (status) => {
    state.status = status;
    updateConnectionUI();
  };

  const setSyncTime = () => {
    const locale = currentLanguage === 'ja' ? 'ja-JP' : 'en-US';
    syncLabel.textContent = new Date().toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const connectDevice = async () => {
    if (!state.supported) {
      setStatus('unsupported');
      return;
    }

    try {
      setStatus('connecting');
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 115200 });
      state.port = port;

      const info = port.getInfo ? port.getInfo() : {};
      if (info.usbVendorId || info.usbProductId) {
        portLabel.textContent = `${info.usbVendorId || '??'}:${info.usbProductId || '??'}`;
      } else {
        portLabel.textContent = 'USB';
      }

      setSyncTime();
      setStatus('connected');
    } catch (error) {
      state.port = null;
      setStatus('disconnected');
    }
  };

  const disconnectDevice = async () => {
    if (state.port) {
      try {
        await state.port.close();
      } catch (error) {
        // No-op for layout preview.
      }
      state.port = null;
    }
    portLabel.textContent = '—';
    syncLabel.textContent = '—';
    setStatus('disconnected');
  };

  const initTabs = () => {
    const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
    const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

    const setActiveTab = (tab) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === tab;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
        button.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      tabPanels.forEach((panel) => {
        const isActive = panel.dataset.panel === tab;
        panel.classList.toggle('is-active', isActive);
        panel.setAttribute('aria-hidden', String(!isActive));
      });
    };

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => setActiveTab(button.dataset.tab));
    });

    const initial = tabButtons.find((button) => button.classList.contains('is-active')) || tabButtons[0];
    if (initial) {
      setActiveTab(initial.dataset.tab);
    }
  };

  const initHeroTabs = () => {
    const heroTabs = Array.from(document.querySelectorAll('.hero-tab'));
    const heroPanels = Array.from(document.querySelectorAll('.hero-tab-panel'));
    const heroPanelsContainer = document.querySelector('.hero-tab-panels');
    if (heroTabs.length === 0 || heroPanels.length === 0) {
      return;
    }

    const setActiveHero = (tab) => {
      heroTabs.forEach((button) => {
        const isActive = button.dataset.heroTab === tab;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
        button.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      heroPanels.forEach((panel) => {
        const isActive = panel.dataset.heroPanel === tab;
        panel.classList.toggle('is-active', isActive);
        panel.setAttribute('aria-hidden', String(!isActive));
        panel.hidden = !isActive;
      });
    };

    const setHeroPanelsHeight = () => {
      if (!heroPanelsContainer) {
        return;
      }
      let maxHeight = 0;
      heroPanels.forEach((panel) => {
        const wasHidden = panel.hidden;
        const prevDisplay = panel.style.display;
        const prevVisibility = panel.style.visibility;
        panel.hidden = false;
        panel.style.display = 'block';
        panel.style.visibility = 'hidden';
        maxHeight = Math.max(maxHeight, panel.scrollHeight);
        panel.style.display = prevDisplay;
        panel.style.visibility = prevVisibility;
        panel.hidden = wasHidden;
      });
      heroPanelsContainer.style.minHeight = maxHeight ? `${maxHeight}px` : '';
    };

    heroTabs.forEach((button) => {
      button.addEventListener('click', () => setActiveHero(button.dataset.heroTab));
    });

    const initial = heroTabs.find((button) => button.classList.contains('is-active')) || heroTabs[0];
    if (initial) {
      setActiveHero(initial.dataset.heroTab);
    }

    updateHeroPanels = setHeroPanelsHeight;
    setHeroPanelsHeight();
    window.addEventListener('resize', setHeroPanelsHeight);
  };

  languageSelect.addEventListener('change', () => {
    const next = languageSelect.value;
    localStorage.setItem(storageKey, next);
    applyTranslations(next);
  });

  demoToggle.addEventListener('change', () => {
    state.demoMode = demoToggle.checked;
    updateConnectionUI();
  });

  connectButton.addEventListener('click', () => {
    connectDevice();
  });

  disconnectButton.addEventListener('click', () => {
    disconnectDevice();
  });

  if (flashButton && firmwareModal) {
    flashButton.addEventListener('click', () => {
      resetFirmwareModal();
      updateFirmwareLocale();
      openModal(firmwareModal);
    });
  }

  if (firmwareSelect) {
    firmwareSelect.addEventListener('change', (event) => {
      selectFirmware(event.target.value);
    });
  }

  if (firmwareEraseButton) {
    firmwareEraseButton.addEventListener('click', () => {
      startEraseOnly();
    });
  }

  if (firmwareStartButton) {
    firmwareStartButton.addEventListener('click', () => {
      startTransfer();
    });
  }

  if (firmwareModal) {
    firmwareModal.querySelectorAll('[data-modal-close]').forEach((button) => {
      button.addEventListener('click', () => {
        resetFirmwareModal();
        closeModal(firmwareModal);
      });
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && firmwareModal && firmwareModal.classList.contains('is-visible')) {
      resetFirmwareModal();
      closeModal(firmwareModal);
    }
  });

  if (!state.supported) {
    state.status = 'unsupported';
  }

  initTabs();
  initHeroTabs();
  const initialLanguage = detectLanguage();
  languageSelect.value = initialLanguage;
  applyTranslations(initialLanguage);
});
