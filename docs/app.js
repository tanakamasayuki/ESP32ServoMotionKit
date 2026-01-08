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
      'device.actions.connect': 'Connect',
      'device.actions.disconnect': 'Disconnect',
      'device.actions.flash': 'Flash preview firmware',
      'device.meta.port': 'Port',
      'device.meta.firmware': 'Firmware',
      'device.meta.sync': 'Last sync',
      'device.meta.mode': 'Mode',
      'device.mode.live': 'Live',
      'preview.title': 'Preview',
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
      'tabs.servo': 'Servo Settings',
      'tabs.servo.note': 'Range, limits, preview',
      'tabs.joint': 'Joint Settings',
      'tabs.joint.note': 'Axis mapping & offsets',
      'tabs.jointGroup': 'Joint Group Settings',
      'tabs.jointGroup.note': 'Grouped editing',
      'tabs.pose': 'Pose Settings',
      'tabs.pose.note': 'Pose library',
      'tabs.sequence': 'Sequence Settings',
      'tabs.sequence.note': 'Steps & triggers',
      'tabs.easing': 'Easing Settings',
      'tabs.easing.note': 'Curves & presets',
      'tabs.event': 'Event Settings',
      'tabs.event.note': 'Triggers & cues',
      'tabs.data': 'Data',
      'tabs.data.note': 'JSON & API export',
      'common.import': 'Import',
      'common.save': 'Save',
      'common.duplicate': 'Duplicate',
      'common.add': 'Add',
      'common.deleteSelected': 'Delete',
      'common.filter.label': 'Filter by ID',
      'common.filter.placeholder': 'Filter by ID',
      'common.form.displayOrder': 'Display order',
      'common.form.displayOrder.placeholder': '10',
      'common.form.description': 'Description',
      'common.form.description.placeholder': 'Notes for this item',
      'servo.title': 'Servo Settings',
      'servo.desc': 'Define range, neutral, and safety limits per servo.',
      'servo.card.list': 'Servo List',
      'servo.card.profile': 'Servo Profile',
      'servo.form.id': 'Servo ID',
      'servo.form.id.placeholder': 'servo_front_left',
      'servo.form.type': 'Type',
      'servo.form.type.pwm': 'PWM',
      'servo.form.type.ttl': 'TTL/Bus',
      'servo.form.mode': 'Mode',
      'servo.form.mode.position': 'Position (180°)',
      'servo.form.mode.wheel': 'Wheel (360°)',
      'servo.form.previewOffset': 'Preview offset (deg)',
      'servo.form.previewDirection': 'Preview direction',
      'servo.form.previewDirection.cw': 'Clockwise',
      'servo.form.previewDirection.ccw': 'Counterclockwise',
      'servo.form.displayOrder': 'Display order',
      'servo.form.displayOrder.placeholder': '10',
      'servo.form.description': 'Description',
      'servo.form.description.placeholder': 'Left shoulder servo for v1 prototype',
      'servo.form.pin': 'PWM Pin',
      'servo.form.pwm.freq': 'PWM Frequency (Hz)',
      'servo.form.pwm.pulseMin': 'Pulse min (us)',
      'servo.form.pwm.pulseMax': 'Pulse max (us)',
      'servo.form.pwm.center': 'Pulse center (us)',
      'servo.form.pwm.deadband': 'Deadband (us)',
      'servo.form.pwm.speed': 'Speed limit (deg/s)',
      'servo.form.pwm.angleMin': 'Angle min (deg)',
      'servo.form.pwm.angleMax': 'Angle max (deg)',
      'servo.form.pwm.offset': 'Offset (deg)',
      'servo.form.ttl.note': 'TTL/Bus fields are defined later. Preview UI shows placeholders.',
      'servo.form.ttl.address': 'Bus address',
      'servo.form.ttl.bus': 'UART bus',
      'servo.card.preview': 'Live Preview',
      'servo.preview.angle': 'Preview angle',
      'servo.preview.offset.note': 'Example: Set preview offset to 270° (or -90°) to start from the left. Use clockwise or counterclockwise to flip the rotation direction.',
      'servo.preview.card.angle': 'Angle',
      'servo.card.calibration': 'Calibration Notes',
      'servo.calibration.note': 'Keep the horn centered before saving. Use a neutral pose to align all axes.',
      'servo.calibration.item1': 'Neutral pose saved',
      'servo.calibration.item2': 'Limits verified',
      'servo.calibration.item3': 'Direction checked',
      'joint.title': 'Joint Settings',
      'joint.desc': 'Bind logical axes to one or more servos.',
      'joint.card.list': 'Joint List',
      'joint.card.settings': 'Joint Settings',
      'joint.form.id': 'Joint ID',
      'joint.form.id.placeholder': 'yaw',
      'joint.targets.note': 'Select target servos.',
      'joint.servo.title': 'Servo Settings',
      'joint.servo.id': 'Target servo',
      'joint.servo.direction': 'Reverse direction',
      'joint.servo.offset': 'Servo offset (deg)',
      'joint.servo.min': 'Servo min (deg)',
      'joint.servo.max': 'Servo max (deg)',
      'jointGroup.title': 'Joint Group Settings',
      'jointGroup.desc': 'Bundle joints for quick selection and batch edits.',
      'jointGroup.card.list': 'Group List',
      'jointGroup.list.count3': '3 joints',
      'jointGroup.list.count2': '2 joints',
      'jointGroup.list.add': 'Add group',
      'jointGroup.card.editor': 'Group Editor',
      'jointGroup.form.id': 'Group ID',
      'jointGroup.form.id.placeholder': 'jg_upper',
      'jointGroup.targets.note': 'Select joints in this group.',
      'jointGroup.card.summary': 'Selected Joint',
      'jointGroup.summary.id': 'Joint ID',
      'jointGroup.summary.type': 'Type',
      'jointGroup.summary.servos': 'Servos',
      'pose.title': 'Pose Settings',
      'pose.desc': 'Set joint angles directly in the UI and save them as reusable poses.',
      'pose.card.list': 'Pose List',
      'pose.list.home': 'Home',
      'pose.list.wave': 'Wave',
      'pose.list.ready': 'Ready',
      'pose.list.add': 'Add pose',
      'pose.card.editor': 'Pose Editor',
      'pose.editor.id': 'Pose ID',
      'pose.editor.id.placeholder': 'p_wave',
      'pose.editor.group': 'Joint group',
      'pose.editor.group.all': 'All joints',
      'pose.editor.axes.note': 'Axes from the selected joint group.',
      'pose.axis.title': 'Axis Settings',
      'pose.axis.id': 'Axis',
      'pose.axis.value': 'Angle (deg)',
      'pose.control.title': 'Check motion',
      'pose.control.startPose': 'Start pose',
      'pose.control.duration': 'Move duration (ms)',
      'pose.control.easing': 'Base easing',
      'pose.control.axisEasing': 'Axis easing overrides',
      'pose.control.axisDefault': 'Use base easing',
      'pose.control.go': 'Move to target',
      'pose.control.note': 'Move to the base pose first, then preview using the move duration and easing settings.',
      'pose.triggers.title': 'Trigger Settings',
      'pose.triggers.start': 'Pose start',
      'pose.triggers.reached': 'Pose reached',
      'pose.triggers.end': 'Pose end',
      'pose.triggers.overrun': 'Time overrun',
      'pose.triggers.event.none': 'No event',
      'pose.triggers.event.sound': '100 - event_sound_a',
      'pose.triggers.event.led': '210 - event_led_flash',
      'pose.triggers.note': 'Pose reached triggers when the sequence movement completes. Pose end triggers after the sequence hold time.',
      'pose.triggers.overrun.note': 'Time overrun triggers during the move into this pose when speed limits extend the move beyond the specified duration.',
      'sequence.title': 'Sequence Settings',
      'sequence.desc': 'Compose steps, triggers, and reusable sequences for header export.',
      'sequence.card.list': 'Sequence List',
      'sequence.card.steps': 'Sequence Steps',
      'sequence.steps.step1': '1: p_home',
      'sequence.steps.step2': '2: p_wave',
      'sequence.steps.step3': '3: call seq_intro',
      'sequence.steps.inline': 'Inline on header export',
      'sequence.steps.add': 'Add step',
      'sequence.steps.moveUp': 'Move up',
      'sequence.steps.moveDown': 'Move down',
      'sequence.card.rules': 'Loop & Trigger',
      'sequence.form.id': 'Sequence ID',
      'sequence.triggers.title': 'Trigger Settings',
      'sequence.triggers.start': 'Sequence start',
      'sequence.triggers.end': 'Sequence end',
      'sequence.triggers.event.none': 'No event',
      'sequence.triggers.event.sound': '100 - event_sound_a',
      'sequence.triggers.event.led': '210 - event_led_flash',
      'sequence.target.title': 'Target Settings',
      'sequence.target.type': 'Target type',
      'sequence.target.type.pose': 'Pose',
      'sequence.target.type.sequence': 'Sequence',
      'sequence.target.id': 'Target',
      'sequence.pose.duration': 'Move duration (ms)',
      'sequence.pose.easing': 'Base easing',
      'sequence.pose.axisEasing': 'Axis easing overrides',
      'sequence.pose.axisDefault': 'Use base easing',
      'sequence.control.title': 'Check motion',
      'sequence.control.startPose': 'Start pose',
      'sequence.control.go': 'Play sequence',
      'sequence.control.note': 'Move to the base pose first, then play the configured sequence from the beginning.',
      'easing.title': 'Easing Settings',
      'easing.desc': 'Manage easing presets and custom curves.',
      'easing.card.list': 'Easing List',
      'easing.list.preset': 'Preset',
      'easing.list.custom': 'Custom',
      'easing.list.add': 'Add easing',
      'easing.delete.confirm': 'Delete "{id}"?',
      'easing.card.editor': 'Curve Editor',
      'easing.form.id': 'Easing ID',
      'easing.form.preset': 'Preset',
      'easing.form.preset.linear': 'Linear',
      'easing.form.preset.smooth': 'Smooth',
      'easing.form.preset.curve': 'S-curve',
      'easing.form.param': 'Strength',
      'easing.card.preview': 'Timing Curves',
      'easing.form.type': 'Type',
      'easing.form.type.warpcurve': 'WarpCurve',
      'easing.editor.note': 'Preset entries are read-only. Custom entries adjust parameters based on a preset.',
      'easing.param.shape': 'Shape (0-255)',
      'easing.param.shape.note': '0=Linear, 120=Soft, 180=Normal, 230=Hard',
      'easing.param.bias': 'Bias (0-255)',
      'easing.param.bias.note': '0=EaseIn, 128=InOut, 255=EaseOut',
      'easing.param.symmetry': 'Symmetry (0-255)',
      'easing.param.symmetry.note': 'Shifts the center position. 128 recommended.',
      'easing.param.overshoot': 'Overshoot (0-255)',
      'easing.param.overshoot.note': '0=None, 40=Small, 80=Med, 140=Big',
      'easing.param.overshootTiming': 'Overshoot timing (0-255)',
      'easing.param.overshootTiming.note': 'Start position; 170 (~0.67) recommended.',
      'easing.param.overshootDamping': 'Overshoot damping (0-255)',
      'easing.param.overshootDamping.note': 'Return speed; 160 (~0.63) recommended.',
      'easing.graph.velocity': 'Velocity over time',
      'easing.graph.distance': 'Distance over time',
      'event.title': 'Event Settings',
      'event.desc': 'Manage event IDs and numbers. Triggers are set in pose/sequence.',
      'event.card.list': 'Event List',
      'event.list.add': 'Add event',
      'event.card.editor': 'Event Editor',
      'event.form.id': 'Event ID',
      'event.form.id.duplicate': 'Event ID must be unique.',
      'event.form.number': 'Event number',
      'event.delete.confirm': 'Delete "{id}"?',
      'event.card.usage': 'Event Usage',
      'event.usage.poseList': 'Pose usage',
      'event.usage.poseStart': 'Pose start',
      'event.usage.poseReached': 'Pose reached',
      'event.usage.poseEnd': 'Pose end',
      'event.usage.sequenceList': 'Sequence usage',
      'event.usage.sequenceStart': 'Sequence start',
      'event.usage.sequenceEnd': 'Sequence end',
      'data.title': 'Data Export',
      'data.desc': 'Review internal JSON and generated C++ API output.',
      'data.tabs.rich': 'Rich UI JSON',
      'data.tabs.simple': 'Simple JSON',
      'data.tabs.cpp': 'C++ API'
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
      'device.actions.connect': '接続',
      'device.actions.disconnect': '切断',
      'device.actions.flash': 'プレビュー用ファームウェア転送',
      'device.meta.port': 'ポート',
      'device.meta.firmware': 'ファームウェア',
      'device.meta.sync': '最終同期',
      'device.meta.mode': 'モード',
      'device.mode.live': 'ライブ',
      'preview.title': 'プレビュー',
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
      'tabs.servo': 'サーボ設定',
      'tabs.servo.note': '範囲/リミット/プレビュー',
      'tabs.joint': 'ジョイント設定',
      'tabs.joint.note': '軸マッピング/オフセット',
      'tabs.jointGroup': 'ジョイントグループ設定',
      'tabs.jointGroup.note': 'まとめ編集',
      'tabs.pose': 'ポーズ設定',
      'tabs.pose.note': 'ポーズ一覧',
      'tabs.sequence': 'シーケンス設定',
      'tabs.sequence.note': 'ステップ/トリガー',
      'tabs.easing': 'イージング設定',
      'tabs.easing.note': 'カーブ/プリセット',
      'tabs.event': 'イベント設定',
      'tabs.event.note': 'トリガー/通知',
      'tabs.data': 'データ',
      'tabs.data.note': 'JSON/C++ API出力',
      'common.import': 'インポート',
      'common.save': '保存',
      'common.duplicate': '複製',
      'common.add': '追加',
      'common.deleteSelected': '削除',
      'common.filter.label': 'IDで絞り込み',
      'common.filter.placeholder': 'IDで絞り込み',
      'common.form.displayOrder': '表示順',
      'common.form.displayOrder.placeholder': '10',
      'common.form.description': '説明',
      'common.form.description.placeholder': 'この項目の説明',
      'servo.title': 'サーボ設定',
      'servo.desc': 'サーボごとの範囲、ニュートラル、安全リミットを設定します。',
      'servo.card.list': 'サーボ一覧',
      'servo.card.profile': 'サーボプロファイル',
      'servo.form.id': 'サーボ ID',
      'servo.form.id.placeholder': 'servo_front_left',
      'servo.form.type': 'タイプ',
      'servo.form.type.pwm': 'PWM',
      'servo.form.type.ttl': 'TTL/バス',
      'servo.form.mode': 'モード',
      'servo.form.mode.position': '位置 (180°)',
      'servo.form.mode.wheel': '回転 (360°)',
      'servo.form.previewOffset': 'プレビューオフセット (deg)',
      'servo.form.previewDirection': 'プレビュー回転方向',
      'servo.form.previewDirection.cw': '右回り',
      'servo.form.previewDirection.ccw': '左回り',
      'servo.form.displayOrder': '表示順',
      'servo.form.displayOrder.placeholder': '10',
      'servo.form.description': '説明',
      'servo.form.description.placeholder': 'v1 試作の左肩サーボ',
      'servo.form.pin': 'PWM ピン',
      'servo.form.pwm.freq': 'PWM 周波数 (Hz)',
      'servo.form.pwm.pulseMin': 'パルス幅 最小 (us)',
      'servo.form.pwm.pulseMax': 'パルス幅 最大 (us)',
      'servo.form.pwm.center': 'パルス幅 センター (us)',
      'servo.form.pwm.deadband': 'デッドバンド (us)',
      'servo.form.pwm.speed': '速度制限 (deg/s)',
      'servo.form.pwm.angleMin': '角度 最小 (deg)',
      'servo.form.pwm.angleMax': '角度 最大 (deg)',
      'servo.form.pwm.offset': 'オフセット (deg)',
      'servo.form.ttl.note': 'TTL/バスの詳細項目は後続で定義します。プレビューでは仮の項目を表示します。',
      'servo.form.ttl.address': 'バスアドレス',
      'servo.form.ttl.bus': 'UART バス',
      'servo.card.preview': 'ライブプレビュー',
      'servo.preview.angle': 'プレビュー角度',
      'servo.preview.offset.note': '例: プレビューオフセットを 270°（または -90°）にすると左側から開始します。回転方向は右回り/左回りで切り替えます。',
      'servo.preview.card.angle': '角度',
      'servo.card.calibration': 'キャリブレーション',
      'servo.calibration.note': '保存前にホーンを中央に合わせ、ニュートラルポーズで全軸を整列します。',
      'servo.calibration.item1': 'ニュートラル保存済み',
      'servo.calibration.item2': 'リミット確認済み',
      'servo.calibration.item3': '方向確認済み',
      'joint.title': 'ジョイント設定',
      'joint.desc': '論理軸を 1 つ以上のサーボに割り当てます。',
      'joint.card.list': 'ジョイント一覧',
      'joint.card.settings': 'ジョイント設定',
      'joint.form.id': 'ジョイント ID',
      'joint.form.id.placeholder': 'yaw',
      'joint.targets.note': '対象とするサーボを選択します。',
      'joint.servo.title': 'サーボ別設定',
      'joint.servo.id': '対象サーボ',
      'joint.servo.direction': '回転方向を反転',
      'joint.servo.offset': 'サーボオフセット (deg)',
      'joint.servo.min': 'サーボ最小 (deg)',
      'joint.servo.max': 'サーボ最大 (deg)',
      'jointGroup.title': 'ジョイントグループ設定',
      'jointGroup.desc': 'ジョイントをまとめて選択し、一括編集できます。',
      'jointGroup.card.list': 'グループ一覧',
      'jointGroup.list.count3': '3 ジョイント',
      'jointGroup.list.count2': '2 ジョイント',
      'jointGroup.list.add': 'グループ追加',
      'jointGroup.card.editor': 'グループ編集',
      'jointGroup.form.id': 'グループ ID',
      'jointGroup.form.id.placeholder': 'jg_upper',
      'jointGroup.targets.note': 'このグループに含めるジョイントを選択します。',
      'jointGroup.card.summary': '選択中ジョイント',
      'jointGroup.summary.id': 'ジョイント ID',
      'jointGroup.summary.type': '種別',
      'jointGroup.summary.servos': 'サーボ数',
      'pose.title': 'ポーズ設定',
      'pose.desc': 'UI でジョイントの値を設定し、再利用できるポーズとして保存します。',
      'pose.card.list': 'ポーズ一覧',
      'pose.list.home': 'ホーム',
      'pose.list.wave': 'ウェーブ',
      'pose.list.ready': '準備',
      'pose.list.add': 'ポーズ追加',
      'pose.card.editor': 'ポーズ編集',
      'pose.editor.id': 'ポーズ ID',
      'pose.editor.id.placeholder': 'p_wave',
      'pose.editor.group': 'ジョイントグループ',
      'pose.editor.group.all': '全ジョイント',
      'pose.editor.axes.note': '選択したジョイントグループの軸一覧です。',
      'pose.axis.title': '軸別設定',
      'pose.axis.id': '軸',
      'pose.axis.value': '角度 (deg)',
      'pose.control.title': '動作確認',
      'pose.control.startPose': '開始ポーズ',
      'pose.control.duration': '移動時間 (ms)',
      'pose.control.easing': '基本イージング',
      'pose.control.axisEasing': '軸別イージング',
      'pose.control.axisDefault': '基本を使う',
      'pose.control.go': 'ターゲットへ移動',
      'pose.control.note': '基本ポーズに最短で移動してから、移動時間とイージング設定を利用して移動の動作確認ができます。',
      'pose.triggers.title': 'トリガー設定',
      'pose.triggers.start': 'ポーズ開始',
      'pose.triggers.reached': 'ポーズ到達',
      'pose.triggers.end': 'ポーズ終了',
      'pose.triggers.overrun': '時間延長時',
      'pose.triggers.event.none': 'イベントなし',
      'pose.triggers.event.sound': '100 - event_sound_a',
      'pose.triggers.event.led': '210 - event_led_flash',
      'pose.triggers.note': 'ポーズ到達はシーケンスの移動が完了したとき、ポーズ終了はシーケンスのホールド時間が経過したときに発火します。',
      'pose.triggers.overrun.note': '時間延長時はこのポーズへの移動中に、速度制限に抵触して移動時間が指定を超過した場合に発火します。',
      'sequence.title': 'シーケンス設定',
      'sequence.desc': 'ステップ/トリガー/再利用シーケンスを構成し、ヘッダ出力に反映します。',
      'sequence.card.list': 'シーケンス一覧',
      'sequence.card.steps': 'シーケンスステップ',
      'sequence.steps.step1': '1: p_home',
      'sequence.steps.step2': '2: p_wave',
      'sequence.steps.step3': '3: seq_intro を呼び出し',
      'sequence.steps.inline': 'ヘッダ出力時に展開',
      'sequence.steps.add': 'ステップ追加',
      'sequence.steps.moveUp': '上へ移動',
      'sequence.steps.moveDown': '下へ移動',
      'sequence.card.rules': 'ループとトリガー',
      'sequence.form.id': 'シーケンス ID',
      'sequence.triggers.title': 'トリガー設定',
      'sequence.triggers.start': 'シーケンス開始',
      'sequence.triggers.end': 'シーケンス終了',
      'sequence.triggers.event.none': 'イベントなし',
      'sequence.triggers.event.sound': '100 - event_sound_a',
      'sequence.triggers.event.led': '210 - event_led_flash',
      'sequence.target.title': 'ターゲット設定',
      'sequence.target.type': '種類',
      'sequence.target.type.pose': 'ポーズ',
      'sequence.target.type.sequence': 'シーケンス',
      'sequence.target.id': 'ターゲット',
      'sequence.pose.duration': '移動時間 (ms)',
      'sequence.pose.easing': '基本イージング',
      'sequence.pose.axisEasing': '軸別イージング',
      'sequence.pose.axisDefault': '基本を使う',
      'sequence.control.title': '動作確認',
      'sequence.control.startPose': '開始ポーズ',
      'sequence.control.go': 'シーケンスを再生',
      'sequence.control.note': '基本ポーズに最短で移動してから、設定済みのシーケンスを最初から再生して動作確認ができます。',
      'easing.title': 'イージング設定',
      'easing.desc': 'イージングのプリセットやカスタムカーブを管理します。',
      'easing.card.list': 'イージング一覧',
      'easing.list.preset': 'プリセット',
      'easing.list.custom': 'カスタム',
      'easing.list.add': 'イージング追加',
      'easing.delete.confirm': '「{id}」を削除しますか？',
      'easing.card.editor': 'カーブ編集',
      'easing.form.id': 'イージング ID',
      'easing.form.preset': 'プリセット',
      'easing.form.preset.linear': 'リニア',
      'easing.form.preset.smooth': 'スムーズ',
      'easing.form.preset.curve': 'S カーブ',
      'easing.form.param': '強さ',
      'easing.card.preview': 'タイミングカーブ',
      'easing.form.type': '種別',
      'easing.form.type.warpcurve': '時間変形曲線',
      'easing.editor.note': 'プリセットは編集不可です。カスタムはプリセットを元にパラメーターを調整します。',
      'easing.param.shape': '曲線強度 (0-255)',
      'easing.param.shape.note': '0=リニア, 120=ソフト, 180=標準, 230=ハード',
      'easing.param.bias': '加速前後配分 (0-255)',
      'easing.param.bias.note': '0=加速寄り, 128=中間, 255=減速寄り',
      'easing.param.symmetry': '中央重心 (0-255)',
      'easing.param.symmetry.note': '中心座標をずらす。128 推奨',
      'easing.param.overshoot': 'オーバーシュート (0-255)',
      'easing.param.overshoot.note': '0=なし, 40=小, 80=中, 140=大',
      'easing.param.overshootTiming': 'オーバーシュート開始 (0-255)',
      'easing.param.overshootTiming.note': '開始位置。170（約0.67）推奨。',
      'easing.param.overshootDamping': 'オーバーシュート収束 (0-255)',
      'easing.param.overshootDamping.note': '戻りの速さ。160（約0.63）推奨。',
      'easing.graph.velocity': '速度の推移',
      'easing.graph.distance': '移動距離の積算',
      'event.title': 'イベント設定',
      'event.desc': 'イベント ID とイベント番号を管理します。トリガーはポーズ/シーケンスで設定します。',
      'event.card.list': 'イベント一覧',
      'event.list.add': 'イベント追加',
      'event.card.editor': 'イベント編集',
      'event.form.id': 'イベント ID',
      'event.form.id.duplicate': 'イベント ID が重複しています。',
      'event.form.number': 'イベント番号',
      'event.delete.confirm': '「{id}」を削除しますか？',
      'event.card.usage': '呼び出し元',
      'event.usage.poseList': 'ポーズ一覧',
      'event.usage.poseStart': 'ポーズ開始',
      'event.usage.poseReached': 'ポーズ到達',
      'event.usage.poseEnd': 'ポーズ終了',
      'event.usage.sequenceList': 'シーケンス一覧',
      'event.usage.sequenceStart': 'シーケンス開始',
      'event.usage.sequenceEnd': 'シーケンス完了',
      'data.title': 'データ出力',
      'data.desc': '内部JSONとC++ API出力を確認できます。',
      'data.tabs.rich': 'リッチUI JSON',
      'data.tabs.simple': 'シンプルJSON',
      'data.tabs.cpp': 'C++ API'
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
  const servoPreviewAngle = document.getElementById('servo-preview-angle');
  const servoPreviewAngleInput = document.getElementById('servo-preview-angle-input');
  const servoPreviewNeedle = document.querySelector('.dial-needle');
  const servoPreviewOffsetInput = document.querySelector('[data-preview-offset-input]');
  const servoPreviewDirectionSelect = document.querySelector('[data-preview-direction-select]');

  let updateFirmwareLocale = () => { };
  let updateHeroPanels = () => { };

  const state = {
    status: 'disconnected',
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

    modeLabel.textContent = getTranslation('device.mode.live');
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
    const storageKey = 'ui.workspaceTab';

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

      if (tab === 'data') {
        updateRichJsonOutput();
      }

      try {
        sessionStorage.setItem(storageKey, tab);
      } catch (error) {
        // Ignore storage errors for preview-only UI.
      }
    };

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => setActiveTab(button.dataset.tab));
    });

    let initial = tabButtons.find((button) => button.classList.contains('is-active')) || tabButtons[0];
    try {
      const stored = sessionStorage.getItem(storageKey);
      const storedButton = tabButtons.find((button) => button.dataset.tab === stored);
      if (storedButton) {
        initial = storedButton;
      }
    } catch (error) {
      // Ignore storage errors for preview-only UI.
    }
    if (initial) {
      setActiveTab(initial.dataset.tab);
    }
  };

  const initSelectableLists = () => {
    const listContainers = Array.from(document.querySelectorAll('.list'));
    listContainers.forEach((list) => {
      list.addEventListener('click', (event) => {
        const item = event.target.closest('.list-item');
        if (!item || !list.contains(item)) {
          return;
        }
        list.querySelectorAll('.list-item').forEach((node) => {
          node.classList.remove('is-active');
        });
        item.classList.add('is-active');
      });
    });
  };

  const initSelectableSteps = () => {
    const stepLists = Array.from(document.querySelectorAll('.step-list'));
    stepLists.forEach((list) => {
      list.addEventListener('click', (event) => {
        const item = event.target.closest('li');
        if (!item || !list.contains(item)) {
          return;
        }
        list.querySelectorAll('li').forEach((node) => {
          node.classList.remove('is-active');
        });
        item.classList.add('is-active');
      });
    });
  };

  const initFilterClearButtons = () => {
    const clearButtons = Array.from(document.querySelectorAll('[data-clear-for]'));
    clearButtons.forEach((button) => {
      const targetId = button.dataset.clearFor;
      if (!targetId) {
        return;
      }
      const input = document.getElementById(targetId);
      if (!input) {
        return;
      }
      button.addEventListener('click', () => {
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
    });
  };

  const initJointServoSelection = () => {
    const targetLabel = document.querySelector('#joint-servo-target');
    const servoButtons = Array.from(document.querySelectorAll('[data-servo-select]'));
    const servoRows = Array.from(document.querySelectorAll('[data-servo-row]'));
    if (!targetLabel || servoButtons.length === 0) {
      return;
    }

    const setActiveServo = (servoId) => {
      targetLabel.textContent = servoId;
      servoRows.forEach((row) => {
        const button = row.querySelector('[data-servo-select]');
        row.classList.toggle('is-active', button?.dataset.servoSelect === servoId);
      });
    };

    servoButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveServo(button.dataset.servoSelect);
      });
    });

    const initial = servoButtons.find((button) => button.closest('.mini-row')?.classList.contains('is-active')) || servoButtons[0];
    if (initial) {
      setActiveServo(initial.dataset.servoSelect);
    }
  };

  const initJointGroupSelection = () => {
    const selectedId = document.querySelector('#joint-group-selected');
    const selectedType = document.querySelector('#joint-group-type');
    const selectedServos = document.querySelector('#joint-group-servos');
    const jointButtons = Array.from(document.querySelectorAll('[data-joint-select]'));
    const jointRows = Array.from(document.querySelectorAll('[data-joint-row]'));
    if (!selectedId || jointButtons.length === 0) {
      return;
    }

    const setActiveJoint = (jointId, jointType, jointServos) => {
      selectedId.textContent = jointId;
      if (selectedType) {
        selectedType.textContent = jointType || '—';
      }
      if (selectedServos) {
        selectedServos.textContent = jointServos || '—';
      }
      jointRows.forEach((row) => {
        const button = row.querySelector('[data-joint-select]');
        row.classList.toggle('is-active', button?.dataset.jointSelect === jointId);
      });
    };

    jointButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveJoint(button.dataset.jointSelect, button.dataset.jointType, button.dataset.jointServos);
      });
    });

    const initial = jointButtons.find((button) => button.closest('.mini-row')?.classList.contains('is-active')) || jointButtons[0];
    if (initial) {
      setActiveJoint(initial.dataset.jointSelect, initial.dataset.jointType, initial.dataset.jointServos);
    }
  };

  const initPoseAxisSelection = () => {
    const axisLabel = document.querySelector('#pose-axis-target');
    const axisRange = document.querySelector('#pose-axis-range');
    const axisInput = document.querySelector('#pose-axis-input');
    const axisButtons = Array.from(document.querySelectorAll('[data-pose-axis]'));
    const axisRows = Array.from(document.querySelectorAll('[data-pose-axis-row]'));
    if (!axisLabel || axisButtons.length === 0) {
      return;
    }

    const clampAngle = (value) => {
      return Math.max(-90, Math.min(90, Number(value || 0)));
    };

    const setActiveAxis = (axisId, angle) => {
      axisLabel.textContent = axisId;
      if (axisRange && axisInput) {
        const clamped = clampAngle(angle);
        axisRange.value = String(clamped);
        axisInput.value = String(clamped);
      }
      axisRows.forEach((row) => {
        const button = row.querySelector('[data-pose-axis]');
        row.classList.toggle('is-active', button?.dataset.poseAxis === axisId);
      });
    };

    axisButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveAxis(button.dataset.poseAxis, button.dataset.poseAngle);
      });
    });

    const initial = axisButtons.find((button) => button.closest('.mini-row')?.classList.contains('is-active')) || axisButtons[0];
    if (initial) {
      setActiveAxis(initial.dataset.poseAxis, initial.dataset.poseAngle);
    }
  };

  const clamp01 = (value) => Math.max(0, Math.min(1, value));

  const warpCurveDistance = (time, params) => {
    const t = clamp01(time);
    const shape = clamp01(params.shape / 255);
    const bias = clamp01(params.bias / 255);
    const symmetry = clamp01(params.symmetry / 255);
    const overshoot = clamp01(params.overshoot / 255);
    const overshootTiming = clamp01(params.overshootTiming / 255);
    const overshootDamping = clamp01(params.overshootDamping / 255);

    let warped = t;
    const biasK = (bias - 0.5) * 2;
    if (biasK < 0) {
      warped = Math.pow(warped, 1 + (-biasK) * 2);
    } else if (biasK > 0) {
      warped = 1 - Math.pow(1 - warped, 1 + biasK * 2);
    }

    const symmetryK = (symmetry - 0.5) * 2;
    warped = clamp01(warped + symmetryK * 0.12 * Math.sin(Math.PI * warped));

    const power = 1 + shape * 3;
    const a = Math.pow(warped, power);
    const b = Math.pow(1 - warped, power);
    let distance = (a + b === 0) ? 0 : a / (a + b);

    const overshootAmount = overshoot * 0.4;
    if (overshootAmount > 0) {
      const start = Math.min(0.98, overshootTiming);
      if (t >= start) {
        const phase = (t - start) / (1 - start);
        const damping = 1 + overshootDamping * 3;
        const bump = Math.sin(Math.PI * phase) * Math.exp(-damping * phase);
        distance += overshootAmount * bump;
      }
    }

    return distance;
  };

  const finiteDifference = (time, fn, params) => {
    const t = clamp01(time);
    const dt = 0.001;
    if (t <= 0) {
      return (fn(clamp01(t + dt), params) - fn(t, params)) / dt;
    }
    if (t >= 1) {
      return (fn(t, params) - fn(clamp01(t - dt), params)) / dt;
    }
    return (fn(clamp01(t + dt), params) - fn(clamp01(t - dt), params)) / (2 * dt);
  };

  const easingFunctions = {
    linear: (time) => {
      const clamped = clamp01(time);
      return { velocity: 1, distance: clamped };
    },
    warpcurve: (time, params) => {
      const t = clamp01(time);
      const distance = warpCurveDistance(t, params);
      const velocity = finiteDifference(t, warpCurveDistance, params);
      return { velocity: clamp01(velocity), distance };
    }
  };

  const buildCurvePath = (points) => {
    if (points.length === 0) {
      return '';
    }
    return points
      .map((point, index) => {
        const cmd = index === 0 ? 'M' : 'L';
        return `${cmd}${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      })
      .join(' ');
  };

  const renderEasingGraphs = () => {
    const velocityPath = document.querySelector('.curve-line--velocity');
    const distancePath = document.querySelector('.curve-line--distance');
    const typeSelect = document.querySelector('[data-easing-type-select]');
    const paramInputs = Array.from(document.querySelectorAll('[data-easing-param]'));
    if (!velocityPath || !distancePath) {
      return;
    }

    const easingType = typeSelect?.value || 'linear';
    const easingFn = easingFunctions[easingType] || easingFunctions.linear;
    if (!easingFn) {
      return;
    }

    const params = {
      shape: 180,
      bias: 128,
      symmetry: 128,
      overshoot: 0,
      overshootTiming: 170,
      overshootDamping: 160
    };

    paramInputs.forEach((input) => {
      const key = input.dataset.easingParam;
      if (!key) {
        return;
      }
      const value = Number(input.value);
      params[key] = Number.isFinite(value) ? value : params[key];
    });

    const samples = 40;
    const padding = { x: 8, y: 16 };
    const width = 240;
    const height = 160;
    const innerWidth = width - padding.x * 2;
    const innerHeight = height - padding.y * 2;

    const velocityPoints = [];
    const distancePoints = [];
    const distances = [];
    const enforceMonotonic = params.overshoot === 0;
    let lastDistance = 0;

    for (let i = 0; i <= samples; i += 1) {
      const t = i / samples;
      const { velocity, distance } = easingFn(t, params);
      const adjustedDistance = enforceMonotonic ? Math.max(distance, lastDistance) : distance;
      lastDistance = adjustedDistance;
      const x = padding.x + innerWidth * t;
      const velocityY = padding.y + innerHeight * (1 - clamp01(velocity));
      distances.push(adjustedDistance);
      velocityPoints.push({ x, y: velocityY });
    }

    for (let i = 0; i <= samples; i += 1) {
      const t = i / samples;
      const distance = distances[i];
      const x = padding.x + innerWidth * t;
      const distanceY = padding.y + innerHeight * (1 - distance);
      distancePoints.push({ x, y: distanceY });
    }

    velocityPath.setAttribute('d', buildCurvePath(velocityPoints));
    distancePath.setAttribute('d', buildCurvePath(distancePoints));
  };

  const initEasingTypeToggle = () => {
    const typeSelect = document.querySelector('[data-easing-type-select]');
    const paramGroups = Array.from(document.querySelectorAll('[data-easing-type-group]'));
    const paramInputs = Array.from(document.querySelectorAll('[data-easing-param]'));
    if (!typeSelect) {
      return;
    }

    const update = () => {
      paramGroups.forEach((group) => {
        const isActive = group.dataset.easingTypeGroup === typeSelect.value;
        group.classList.toggle('is-active', isActive);
        group.hidden = !isActive;
        group.setAttribute('aria-hidden', String(!isActive));
      });
      renderEasingGraphs();
    };

    typeSelect.addEventListener('change', update);
    paramInputs.forEach((input) => {
      input.addEventListener('input', renderEasingGraphs);
    });
    update();
  };

  const initServoPreviewAngle = () => {
    if (!servoPreviewAngle || !servoPreviewAngleInput) {
      return;
    }
    const clampAngle = (value) => {
      return Math.max(0, Math.min(360, Number(value || 0)));
    };
    const getOffset = () => {
      return Number(servoPreviewOffsetInput?.value || 0);
    };
    const getDirection = () => {
      return servoPreviewDirectionSelect?.value === 'ccw' ? -1 : 1;
    };
    const applyAngle = (value) => {
      const angle = clampAngle(value);
      const offset = getOffset();
      const direction = getDirection();
      const displayAngle = (offset + angle * direction + 3600) % 360;
      servoPreviewAngle.value = String(angle);
      servoPreviewAngleInput.value = String(angle);
      if (servoPreviewNeedle) {
        servoPreviewNeedle.style.transform = `translateX(-50%) rotate(${displayAngle}deg)`;
      }
    };
    servoPreviewAngle.addEventListener('input', () => applyAngle(servoPreviewAngle.value));
    servoPreviewAngleInput.addEventListener('input', () => applyAngle(servoPreviewAngleInput.value));
    if (servoPreviewOffsetInput) {
      servoPreviewOffsetInput.addEventListener('input', () => applyAngle(servoPreviewAngle.value));
    }
    if (servoPreviewDirectionSelect) {
      servoPreviewDirectionSelect.addEventListener('change', () => applyAngle(servoPreviewAngle.value));
    }
    applyAngle(servoPreviewAngle.value);
  };

  const initServoPreviewCards = () => {
    const cards = Array.from(document.querySelectorAll('.servo-card'));
    if (cards.length === 0) {
      return;
    }
    const clampAngle = (value) => {
      return Math.max(0, Math.min(360, Number(value || 0)));
    };
    const getOffset = () => {
      return Number(servoPreviewOffsetInput?.value || 0);
    };
    const getDirection = () => {
      return servoPreviewDirectionSelect?.value === 'ccw' ? -1 : 1;
    };
    const applyCardAngle = (card, value) => {
      const angle = clampAngle(value);
      const offset = getOffset();
      const direction = getDirection();
      const displayAngle = (offset + angle * direction + 3600) % 360;
      const range = card.querySelector('[data-preview-card-angle]');
      const input = card.querySelector('[data-preview-card-angle-input]');
      const needle = card.querySelector('.mini-needle');
      if (range) {
        range.value = String(angle);
      }
      if (input) {
        input.value = String(angle);
      }
      if (needle) {
        needle.style.transform = `translateX(-50%) rotate(${displayAngle}deg)`;
      }
    };

    cards.forEach((card) => {
      const range = card.querySelector('[data-preview-card-angle]');
      const input = card.querySelector('[data-preview-card-angle-input]');
      if (!range || !input) {
        return;
      }
      range.addEventListener('input', () => applyCardAngle(card, range.value));
      input.addEventListener('input', () => applyCardAngle(card, input.value));
      applyCardAngle(card, range.value);
    });

    if (servoPreviewOffsetInput) {
      servoPreviewOffsetInput.addEventListener('input', () => {
        cards.forEach((card) => {
          const range = card.querySelector('[data-preview-card-angle]');
          if (range) {
            applyCardAngle(card, range.value);
          }
        });
      });
    }
    if (servoPreviewDirectionSelect) {
      servoPreviewDirectionSelect.addEventListener('change', () => {
        cards.forEach((card) => {
          const range = card.querySelector('[data-preview-card-angle]');
          if (range) {
            applyCardAngle(card, range.value);
          }
        });
      });
    }
  };

  const initServoTypeToggle = () => {
    const select = document.querySelector('[data-servo-type-select]');
    const groups = Array.from(document.querySelectorAll('[data-servo-type-group]'));
    if (!select || groups.length === 0) {
      return;
    }

    const setActive = (type) => {
      groups.forEach((group) => {
        const isActive = group.dataset.servoTypeGroup === type;
        group.classList.toggle('is-active', isActive);
        group.hidden = !isActive;
        group.setAttribute('aria-hidden', String(!isActive));
      });
    };

    select.addEventListener('change', () => {
      setActive(select.value);
    });

    setActive(select.value);
  };

  const initHeroTabs = () => {
    const heroTabs = Array.from(document.querySelectorAll('.hero-tab'));
    const heroPanels = Array.from(document.querySelectorAll('.hero-tab-panel'));
    const heroPanelsContainer = document.querySelector('.hero-tab-panels');
    const storageKey = 'ui.heroTab';
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

      try {
        sessionStorage.setItem(storageKey, tab);
      } catch (error) {
        // Ignore storage errors for preview-only UI.
      }
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

    let initial = heroTabs.find((button) => button.classList.contains('is-active')) || heroTabs[0];
    try {
      const stored = sessionStorage.getItem(storageKey);
      const storedButton = heroTabs.find((button) => button.dataset.heroTab === stored);
      if (storedButton) {
        initial = storedButton;
      }
    } catch (error) {
      // Ignore storage errors for preview-only UI.
    }
    if (initial) {
      setActiveHero(initial.dataset.heroTab);
    }

    updateHeroPanels = setHeroPanelsHeight;
    setHeroPanelsHeight();
    window.addEventListener('resize', setHeroPanelsHeight);
  };

  const initDataTabs = () => {
    const dataTabs = Array.from(document.querySelectorAll('.data-tab'));
    const dataPanels = Array.from(document.querySelectorAll('.data-panel'));
    if (dataTabs.length === 0 || dataPanels.length === 0) {
      return;
    }

    const setActive = (tab) => {
      dataTabs.forEach((button) => {
        const isActive = button.dataset.dataTab === tab;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
        button.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      dataPanels.forEach((panel) => {
        const isActive = panel.dataset.dataPanel === tab;
        panel.classList.toggle('is-active', isActive);
        panel.setAttribute('aria-hidden', String(!isActive));
      });

      if (tab === 'rich') {
        updateRichJsonOutput();
      }
    };

    dataTabs.forEach((button) => {
      button.addEventListener('click', () => setActive(button.dataset.dataTab));
    });

    const initial = dataTabs.find((button) => button.classList.contains('is-active')) || dataTabs[0];
    if (initial) {
      setActive(initial.dataset.dataTab);
    }
  };

  const eventStorageKey = 'motionkit.richUi';
  const eventList = document.getElementById('event-list');
  const eventAddButton = document.getElementById('event-add');
  const eventDuplicateButton = document.getElementById('event-duplicate');
  const eventDeleteButton = document.getElementById('event-delete');
  const eventIdInput = document.getElementById('event-id-input');
  const eventIdError = document.getElementById('event-id-error');
  const eventNumberInput = document.getElementById('event-number-input');
  const eventOrderInput = document.getElementById('event-order-input');
  const eventDescriptionInput = document.getElementById('event-description-input');
  const dataRichOutput = document.getElementById('data-rich-output');
  const eventFilterInput = document.getElementById('event-filter-input');
  const easingList = document.getElementById('easing-list');
  const easingAddButton = document.getElementById('easing-add');
  const easingIdInput = document.getElementById('easing-id-input');
  const easingOrderInput = document.getElementById('easing-order-input');
  const easingDescriptionInput = document.getElementById('easing-description-input');
  const easingTypeSelect = document.getElementById('easing-type-select');
  const easingFilterInput = document.getElementById('easing-filter-input');

  const defaultState = {
    meta: {
      schema: 'motionkit',
      version: '0.1.0'
    },
    events: [
      { id: 'event_sound_a', number: 100, displayOrder: 10, description: 'Play sound A' },
      { id: 'event_led_flash', number: 210, displayOrder: 20, description: 'Flash LED' }
    ],
    easings: [
      { id: 'e_linear', type: 'linear', kind: 'preset', displayOrder: 10, description: '', params: [] },
      {
        id: 'e_smooth',
        type: 'warpcurve',
        kind: 'custom',
        displayOrder: 20,
        description: 'Smooth easing for demo',
        params: [180, 128, 128, 0, 170, 160]
      },
      {
        id: 'e_scurve_strong',
        type: 'warpcurve',
        kind: 'custom',
        displayOrder: 30,
        description: 'Strong S-curve',
        params: [230, 128, 128, 0, 170, 160]
      }
    ]
  };

  let eventState = { ...defaultState };
  let selectedEventId = null;

  const loadEventState = () => {
    try {
      const raw = localStorage.getItem(eventStorageKey);
      if (!raw) {
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed && parsed.meta) {
        eventState = {
          meta: parsed.meta || defaultState.meta,
          events: Array.isArray(parsed.events) ? parsed.events : defaultState.events,
          easings: Array.isArray(parsed.easings) ? parsed.easings : defaultState.easings
        };
      }
    } catch (error) {
      // Ignore malformed storage.
    }
  };

  const persistEventState = () => {
    try {
      localStorage.setItem(eventStorageKey, JSON.stringify(eventState));
    } catch (error) {
      // Ignore storage errors.
    }
  };

  const buildRichJson = () => {
    const events = eventState.events.map((event) => {
      const item = {
        id: event.id,
        number: event.number
      };
      if (event.displayOrder !== null && event.displayOrder !== undefined && event.displayOrder !== '') {
        item.displayOrder = event.displayOrder;
      }
      if (event.description) {
        item.description = event.description;
      }
      return item;
    });
    const easings = eventState.easings.map((easing) => {
      const item = {
        id: easing.id,
        type: easing.kind,
        preset: easing.type
      };
      if (easing.displayOrder !== null && easing.displayOrder !== undefined && easing.displayOrder !== '') {
        item.displayOrder = easing.displayOrder;
      }
      if (easing.description) {
        item.description = easing.description;
      }
      if (Array.isArray(easing.params) && easing.params.length > 0) {
        const params = {};
        easing.params.forEach((value, index) => {
          params[`param${index}`] = value;
        });
        item.params = params;
      }
      return item;
    });
    return {
      meta: eventState.meta,
      events,
      easings
    };
  };

  const sortEvents = () => {
    eventState.events.sort((a, b) => {
      const orderA = a.displayOrder === null || a.displayOrder === undefined ? Number.POSITIVE_INFINITY : a.displayOrder;
      const orderB = b.displayOrder === null || b.displayOrder === undefined ? Number.POSITIVE_INFINITY : b.displayOrder;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return String(a.id).localeCompare(String(b.id));
    });
  };

  const sortEasings = () => {
    eventState.easings.sort((a, b) => {
      const orderA = a.displayOrder === null || a.displayOrder === undefined ? Number.POSITIVE_INFINITY : a.displayOrder;
      const orderB = b.displayOrder === null || b.displayOrder === undefined ? Number.POSITIVE_INFINITY : b.displayOrder;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return String(a.id).localeCompare(String(b.id));
    });
  };

  const easingParamOrder = {
    warpcurve: ['shape', 'bias', 'symmetry', 'overshoot', 'overshootTiming', 'overshootDamping'],
    linear: []
  };

  const getEasingParams = (type) => {
    const keys = easingParamOrder[type] || [];
    return keys.map((key) => {
      const input = document.querySelector(`[data-easing-param="${key}"]`);
      if (!input) {
        return 0;
      }
      return Math.max(0, Math.min(255, Number(input.value) || 0));
    });
  };

  const applyEasingParams = (type, params) => {
    const keys = easingParamOrder[type] || [];
    keys.forEach((key, index) => {
      const input = document.querySelector(`[data-easing-param="${key}"]`);
      if (!input) {
        return;
      }
      const value = params?.[index];
      input.value = value !== undefined ? value : input.value;
    });
  };

  const updateRichJsonOutput = () => {
    if (!dataRichOutput) {
      return;
    }
    const richJson = buildRichJson();
    dataRichOutput.value = JSON.stringify(richJson, null, 2);
  };

  const renderEventList = () => {
    if (!eventList) {
      return;
    }
    eventList.innerHTML = '';
    const filter = eventFilterInput?.value?.trim().toLowerCase() || '';
    eventState.events.forEach((event) => {
      if (filter && !event.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.eventId = event.id;
      if (event.id === selectedEventId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = event.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = String(event.number ?? '');
      item.appendChild(name);
      item.appendChild(chip);
      eventList.appendChild(item);
    });
  };

  const populateEventEditor = (event) => {
    if (!event || !eventIdInput || !eventNumberInput || !eventOrderInput || !eventDescriptionInput) {
      return;
    }
    eventIdInput.value = event.id ?? '';
    eventNumberInput.value = event.number ?? '';
    eventOrderInput.value = event.displayOrder ?? '';
    eventDescriptionInput.value = event.description ?? '';
    clearEventIdError();
  };

  const clearEventEditor = () => {
    if (!eventIdInput || !eventNumberInput || !eventOrderInput || !eventDescriptionInput) {
      return;
    }
    eventIdInput.value = '';
    eventNumberInput.value = '';
    eventOrderInput.value = '';
    eventDescriptionInput.value = '';
    clearEventIdError();
  };

  const clearEventIdError = () => {
    if (eventIdError) {
      eventIdError.hidden = true;
    }
    if (eventIdInput) {
      eventIdInput.classList.remove('is-error');
    }
  };

  const showEventIdError = () => {
    if (eventIdError) {
      eventIdError.hidden = false;
    }
    if (eventIdInput) {
      eventIdInput.classList.add('is-error');
    }
  };

  const hasDuplicateId = (id, currentId) => {
    return eventState.events.some((item) => item.id === id && item.id !== currentId);
  };

  const selectEventById = (eventId) => {
    const event = eventState.events.find((item) => item.id === eventId) || eventState.events[0];
    if (!event) {
      return;
    }
    selectedEventId = event.id;
    renderEventList();
    populateEventEditor(event);
  };

  const ensureSelection = () => {
    if (!selectedEventId && eventState.events.length > 0) {
      selectedEventId = eventState.events[0].id;
    }
  };

  const addEvent = () => {
    const base = 'event_new';
    let index = eventState.events.length + 1;
    let id = `${base}_${index}`;
    while (eventState.events.some((event) => event.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const event = {
      id,
      number: 0,
      displayOrder: eventState.events.length * 10,
      description: ''
    };
    eventState.events.push(event);
    selectedEventId = event.id;
    persistEventState();
    renderEventList();
    populateEventEditor(event);
    updateRichJsonOutput();
  };

  const clampUint16 = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return null;
    }
    return Math.max(0, Math.min(65535, Math.round(numeric)));
  };

  const parseNumber = (value, fallback) => {
    if (value === '' || value === null || value === undefined) {
      return fallback;
    }
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  };

  const saveEvent = () => {
    if (!selectedEventId) {
      return;
    }
    const event = eventState.events.find((item) => item.id === selectedEventId);
    if (!event) {
      return;
    }
    const nextId = (eventIdInput?.value || '').trim() || event.id;
    if (hasDuplicateId(nextId, event.id)) {
      showEventIdError();
      return;
    }
    event.id = nextId;
    const nextNumber = clampUint16(eventNumberInput?.value);
    event.number = nextNumber ?? event.number ?? 0;
    const orderRaw = eventOrderInput?.value ?? '';
    event.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, event.displayOrder ?? null);
    event.description = (eventDescriptionInput?.value || '').trim();
    selectedEventId = event.id;
    clearEventIdError();
    sortEvents();
    persistEventState();
    renderEventList();
    updateRichJsonOutput();
  };

  const duplicateEvent = () => {
    if (!selectedEventId) {
      return;
    }
    const source = eventState.events.find((item) => item.id === selectedEventId);
    if (!source) {
      return;
    }
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.events.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id
    };
    eventState.events.push(copy);
    selectedEventId = id;
    persistEventState();
    renderEventList();
    populateEventEditor(copy);
    updateRichJsonOutput();
  };

  const deleteEvent = () => {
    if (!selectedEventId) {
      return;
    }
    const target = eventState.events.find((item) => item.id === selectedEventId);
    const label = target?.id || selectedEventId;
    const confirmText = getTranslation('event.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.events.findIndex((item) => item.id === selectedEventId);
    if (index === -1) {
      return;
    }
    eventState.events.splice(index, 1);
    selectedEventId = eventState.events[index]?.id || eventState.events[index - 1]?.id || null;
    persistEventState();
    renderEventList();
    if (selectedEventId) {
      selectEventById(selectedEventId);
    } else {
      clearEventEditor();
      updateRichJsonOutput();
    }
  };

  const initEventEditor = () => {
    if (!eventList || !eventAddButton) {
      return;
    }
    loadEventState();
    ensureSelection();
    sortEvents();
    renderEventList();
    selectEventById(selectedEventId);
    updateRichJsonOutput();

    eventList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !eventList.contains(item)) {
        return;
      }
      selectEventById(item.dataset.eventId);
    });

    eventAddButton.addEventListener('click', () => {
      addEvent();
    });

    const saveButton = document.querySelector('#panel-event .card-actions .btn.btn-secondary');
    if (saveButton) {
      saveButton.addEventListener('click', () => {
        saveEvent();
      });
    }

    if (eventIdInput) {
      eventIdInput.addEventListener('input', () => {
        clearEventIdError();
      });
    }

    if (eventFilterInput) {
      eventFilterInput.addEventListener('input', () => {
        renderEventList();
      });
    }

    if (eventDuplicateButton) {
      eventDuplicateButton.addEventListener('click', () => {
        duplicateEvent();
      });
    }

    if (eventDeleteButton) {
      eventDeleteButton.addEventListener('click', () => {
        deleteEvent();
      });
    }
  };

  let selectedEasingId = null;

  const renderEasingList = () => {
    if (!easingList) {
      return;
    }
    easingList.innerHTML = '';
    const filter = easingFilterInput?.value?.trim().toLowerCase() || '';
    eventState.easings.forEach((easing) => {
      if (filter && !easing.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.easingId = easing.id;
      if (easing.id === selectedEasingId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = easing.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = getTranslation(easing.kind === 'preset' ? 'easing.list.preset' : 'easing.list.custom');
      item.appendChild(name);
      item.appendChild(chip);
      easingList.appendChild(item);
    });
  };

  const populateEasingEditor = (easing) => {
    if (!easing || !easingIdInput || !easingOrderInput || !easingDescriptionInput || !easingTypeSelect) {
      return;
    }
    easingIdInput.value = easing.id ?? '';
    easingOrderInput.value = easing.displayOrder ?? '';
    easingDescriptionInput.value = easing.description ?? '';
    easingTypeSelect.value = easing.type;
    easingTypeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    applyEasingParams(easing.type, easing.params || []);
    renderEasingGraphs();
  };

  const selectEasingById = (easingId) => {
    const easing = eventState.easings.find((item) => item.id === easingId) || eventState.easings[0];
    if (!easing) {
      return;
    }
    selectedEasingId = easing.id;
    renderEasingList();
    populateEasingEditor(easing);
  };

  const ensureEasingSelection = () => {
    if (!selectedEasingId && eventState.easings.length > 0) {
      selectedEasingId = eventState.easings[0].id;
    }
  };

  const addEasing = () => {
    const base = 'e_new';
    let index = eventState.easings.length + 1;
    let id = `${base}_${index}`;
    while (eventState.easings.some((item) => item.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const type = easingTypeSelect?.value || 'warpcurve';
    const easing = {
      id,
      type,
      kind: type === 'linear' ? 'preset' : 'custom',
      displayOrder: eventState.easings.length * 10,
      description: '',
      params: getEasingParams(type)
    };
    eventState.easings.push(easing);
    selectedEasingId = easing.id;
    sortEasings();
    persistEventState();
    renderEasingList();
    populateEasingEditor(easing);
    updateRichJsonOutput();
  };

  const saveEasing = () => {
    if (!selectedEasingId) {
      return;
    }
    const easing = eventState.easings.find((item) => item.id === selectedEasingId);
    if (!easing) {
      return;
    }
    easing.id = (easingIdInput?.value || '').trim() || easing.id;
    const orderRaw = easingOrderInput?.value ?? '';
    easing.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, easing.displayOrder ?? null);
    easing.description = (easingDescriptionInput?.value || '').trim();
    easing.type = easingTypeSelect?.value || easing.type;
    easing.kind = easing.type === 'linear' ? 'preset' : 'custom';
    easing.params = getEasingParams(easing.type);
    selectedEasingId = easing.id;
    sortEasings();
    persistEventState();
    renderEasingList();
    updateRichJsonOutput();
  };

  const duplicateEasing = () => {
    if (!selectedEasingId) {
      return;
    }
    const source = eventState.easings.find((item) => item.id === selectedEasingId);
    if (!source) {
      return;
    }
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.easings.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id
    };
    eventState.easings.push(copy);
    selectedEasingId = id;
    sortEasings();
    persistEventState();
    renderEasingList();
    populateEasingEditor(copy);
    updateRichJsonOutput();
  };

  const deleteEasing = () => {
    if (!selectedEasingId) {
      return;
    }
    const label = selectedEasingId;
    const confirmText = getTranslation('easing.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.easings.findIndex((item) => item.id === selectedEasingId);
    if (index === -1) {
      return;
    }
    eventState.easings.splice(index, 1);
    selectedEasingId = eventState.easings[index]?.id || eventState.easings[index - 1]?.id || null;
    persistEventState();
    renderEasingList();
    if (selectedEasingId) {
      selectEasingById(selectedEasingId);
    } else if (easingIdInput) {
      easingIdInput.value = '';
      easingOrderInput.value = '';
      easingDescriptionInput.value = '';
    }
    updateRichJsonOutput();
  };

  const initEasingEditor = () => {
    if (!easingList || !easingAddButton) {
      return;
    }
    ensureEasingSelection();
    sortEasings();
    renderEasingList();
    selectEasingById(selectedEasingId);

    easingList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !easingList.contains(item)) {
        return;
      }
      selectEasingById(item.dataset.easingId);
    });

    easingAddButton.addEventListener('click', () => {
      addEasing();
    });

    if (easingFilterInput) {
      easingFilterInput.addEventListener('input', () => {
        renderEasingList();
      });
    }

    const saveButton = document.querySelector('#panel-easing .card-actions .btn.btn-secondary');
    if (saveButton) {
      saveButton.addEventListener('click', () => {
        saveEasing();
      });
    }

    const duplicateButton = document.querySelector('#panel-easing .card-actions .btn.btn-outline');
    if (duplicateButton) {
      duplicateButton.addEventListener('click', () => {
        duplicateEasing();
      });
    }

    const deleteButton = document.querySelector('#panel-easing .card-actions .btn.btn-ghost');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        deleteEasing();
      });
    }
  };

  languageSelect.addEventListener('change', () => {
    const next = languageSelect.value;
    localStorage.setItem(storageKey, next);
    applyTranslations(next);
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
  initDataTabs();
  initSelectableLists();
  initSelectableSteps();
  initFilterClearButtons();
  initJointServoSelection();
  initJointGroupSelection();
  initPoseAxisSelection();
  initEasingTypeToggle();
  initEventEditor();
  initEasingEditor();
  renderEasingGraphs();
  initServoTypeToggle();
  initServoPreviewAngle();
  initServoPreviewCards();
  const initialLanguage = detectLanguage();
  languageSelect.value = initialLanguage;
  applyTranslations(initialLanguage);
});
