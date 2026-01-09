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
      'insight.title': 'Workspace',
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
      'project.new': 'New workspace',
      'project.new.confirm': 'Clear the current workspace and start a new one?',
      'project.import.invalid': 'Invalid JSON file.',
      'servo.form.id.duplicate': 'Servo ID must be unique.',
      'servo.usage.title': 'Usage',
      'servo.delete.confirm': 'Delete "{id}"?',
      'servo.delete.inUse': 'This servo is used by joints.',
      'joint.form.id.duplicate': 'Joint ID must be unique.',
      'joint.form.rangeMin': 'Servo min (deg) [auto]',
      'joint.form.rangeMax': 'Servo max (deg) [auto]',
      'joint.list.count': '{count} servos',
      'joint.usage.title': 'Usage',
      'joint.usage.groupList': 'Joint groups',
      'joint.usage.poseList': 'Poses',
      'joint.delete.confirm': 'Delete "{id}"?',
      'joint.delete.inUse': 'This joint is used by joint groups or poses.',
      'jointGroup.form.id.duplicate': 'Group ID must be unique.',
      'jointGroup.list.count': '{count} joints',
      'jointGroup.usage.title': 'Usage',
      'jointGroup.delete.confirm': 'Delete "{id}"?',
      'jointGroup.delete.inUse': 'This joint group is used by poses.',
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
      'servo.form.angle.note': 'Angle min/max map to pulse min/max. If you need to limit usable motion, use joint angle limits.',
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
      'joint.form.previewOffset': 'Preview offset (deg)',
      'joint.form.previewDirection': 'Preview direction',
      'joint.form.previewDirection.cw': 'Clockwise',
      'joint.form.previewDirection.ccw': 'Counterclockwise',
      'joint.targets.note': 'Select target servos.',
      'joint.servo.title': 'Servo Settings',
      'joint.servo.id': 'Target servo',
      'joint.servo.direction': 'Reverse direction',
      'joint.servo.offset': 'Servo offset (deg)',
      'joint.servo.min': 'Servo min (deg)',
      'joint.servo.max': 'Servo max (deg)',
      'joint.servo.rangeHint': 'Target servo range: {min}-{max} deg',
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
      'pose.axis.rangeNote': 'Range: {min}-{max} deg',
      'pose.control.title': 'Check motion',
      'pose.control.startPose': 'Start pose',
      'pose.control.duration': 'Move duration (ms)',
      'pose.control.easing': 'Base easing',
      'pose.control.axisEasing': 'Axis easing overrides',
      'pose.control.axisDefault': 'Use base easing',
      'pose.control.go': 'Move to target',
      'pose.control.note': 'Move to the base pose first, then preview using the move duration and easing settings.',
      'pose.usage.title': 'Usage',
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
      'pose.form.id.duplicate': 'Pose ID must be unique.',
      'pose.form.axes.required': 'Select at least one joint.',
      'pose.delete.confirm': 'Delete "{id}"?',
      'pose.delete.inUse': 'This pose is used by sequences.',
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
      'sequence.usage.title': 'Usage',
      'sequence.form.id.duplicate': 'Sequence ID must be unique.',
      'sequence.list.count': '{count} steps',
      'sequence.delete.confirm': 'Delete "{id}"?',
      'sequence.delete.inUse': 'This sequence is used by other sequences.',
      'easing.title': 'Easing Settings',
      'easing.desc': 'Manage easing presets and custom curves.',
      'easing.card.list': 'Easing List',
      'easing.list.preset': 'Preset',
      'easing.list.custom': 'Custom',
      'easing.list.add': 'Add easing',
      'easing.delete.confirm': 'Delete "{id}"?',
      'easing.delete.inUse': 'This easing is used by poses or sequences.',
      'easing.card.editor': 'Curve Editor',
      'easing.form.id': 'Easing ID',
      'easing.form.preset': 'Preset',
      'easing.form.preset.linear': 'Linear',
      'easing.form.preset.smooth': 'Smooth',
      'easing.form.preset.curve': 'S-curve',
      'easing.form.param': 'Strength',
      'easing.card.preview': 'Timing Curves',
      'easing.card.usage': 'Usage',
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
      'event.form.number.duplicate': 'Event number must be unique.',
      'event.delete.confirm': 'Delete "{id}"?',
      'event.delete.inUse': 'This event is used by poses or sequences.',
      'event.card.usage': 'Usage',
      'event.usage.poseList': 'Pose usage',
      'event.usage.poseStart': 'Pose start',
      'event.usage.poseReached': 'Pose reached',
      'event.usage.poseEnd': 'Pose end',
      'event.usage.poseOverrun': 'Time overrun',
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
      'insight.title': 'ワークスペース',
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
      'project.new': '新規ワークスペース',
      'project.new.confirm': '現在のワークスペースを消去して新規作成しますか？',
      'project.import.invalid': 'JSONファイルを読み込めませんでした。',
      'servo.form.id.duplicate': 'サーボ ID が重複しています。',
      'servo.usage.title': '利用元',
      'servo.delete.confirm': '「{id}」を削除しますか？',
      'servo.delete.inUse': 'このサーボはジョイントで使用中です。',
      'joint.form.id.duplicate': 'ジョイント ID が重複しています。',
      'joint.form.rangeMin': 'サーボ最小 (deg) ※自動',
      'joint.form.rangeMax': 'サーボ最大 (deg) ※自動',
      'joint.list.count': '{count} サーボ',
      'joint.usage.title': '利用元',
      'joint.usage.groupList': 'ジョイントグループ',
      'joint.usage.poseList': 'ポーズ',
      'joint.delete.confirm': '「{id}」を削除しますか？',
      'joint.delete.inUse': 'このジョイントはジョイントグループまたはポーズで使用中です。',
      'jointGroup.form.id.duplicate': 'グループ ID が重複しています。',
      'jointGroup.list.count': '{count} ジョイント',
      'jointGroup.usage.title': '利用元',
      'jointGroup.delete.confirm': '「{id}」を削除しますか？',
      'jointGroup.delete.inUse': 'このジョイントグループはポーズで使用中です。',
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
      'servo.form.angle.note': '角度の最小/最大はパルス幅の最小/最大に対応します。サーボの可動範囲や干渉で制限したい場合は、この角度ではなくジョイントの角度で制限してください。',
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
      'joint.form.previewOffset': 'プレビューオフセット (deg)',
      'joint.form.previewDirection': 'プレビュー回転方向',
      'joint.form.previewDirection.cw': '右回り',
      'joint.form.previewDirection.ccw': '左回り',
      'joint.targets.note': '対象とするサーボを選択します。',
      'joint.servo.title': 'サーボ別設定',
      'joint.servo.id': '対象サーボ',
      'joint.servo.direction': '回転方向を反転',
      'joint.servo.offset': 'サーボオフセット (deg)',
      'joint.servo.min': 'サーボ最小 (deg)',
      'joint.servo.max': 'サーボ最大 (deg)',
      'joint.servo.rangeHint': '対象サーボ範囲: {min}-{max} deg',
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
      'pose.axis.rangeNote': '設定可能範囲: {min}-{max} deg',
      'pose.control.title': '動作確認',
      'pose.control.startPose': '開始ポーズ',
      'pose.control.duration': '移動時間 (ms)',
      'pose.control.easing': '基本イージング',
      'pose.control.axisEasing': '軸別イージング',
      'pose.control.axisDefault': '基本を使う',
      'pose.control.go': 'ターゲットへ移動',
      'pose.control.note': '基本ポーズに最短で移動してから、移動時間とイージング設定を利用して移動の動作確認ができます。',
      'pose.usage.title': '利用元',
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
      'pose.form.id.duplicate': 'ポーズ ID が重複しています。',
      'pose.form.axes.required': 'ジョイントを1つ以上選択してください。',
      'pose.delete.confirm': '「{id}」を削除しますか？',
      'pose.delete.inUse': 'このポーズはシーケンスで使用中です。',
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
      'sequence.usage.title': '利用元',
      'sequence.form.id.duplicate': 'シーケンス ID が重複しています。',
      'sequence.list.count': '{count} ステップ',
      'sequence.delete.confirm': '「{id}」を削除しますか？',
      'sequence.delete.inUse': 'このシーケンスは他のシーケンスで使用中です。',
      'easing.title': 'イージング設定',
      'easing.desc': 'イージングのプリセットやカスタムカーブを管理します。',
      'easing.card.list': 'イージング一覧',
      'easing.list.preset': 'プリセット',
      'easing.list.custom': 'カスタム',
      'easing.list.add': 'イージング追加',
      'easing.delete.confirm': '「{id}」を削除しますか？',
      'easing.delete.inUse': 'このイージングはポーズまたはシーケンスで使用中です。',
      'easing.card.editor': 'カーブ編集',
      'easing.form.id': 'イージング ID',
      'easing.form.preset': 'プリセット',
      'easing.form.preset.linear': 'リニア',
      'easing.form.preset.smooth': 'スムーズ',
      'easing.form.preset.curve': 'S カーブ',
      'easing.form.param': '強さ',
      'easing.card.preview': 'タイミングカーブ',
      'easing.card.usage': '利用元',
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
      'event.form.number.duplicate': 'イベント番号が重複しています。',
      'event.delete.confirm': '「{id}」を削除しますか？',
      'event.delete.inUse': 'このイベントはポーズまたはシーケンスで使用中です。',
      'event.card.usage': '利用元',
      'event.usage.poseList': 'ポーズ一覧',
      'event.usage.poseStart': 'ポーズ開始',
      'event.usage.poseReached': 'ポーズ到達',
      'event.usage.poseEnd': 'ポーズ終了',
      'event.usage.poseOverrun': '時間延長時',
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
  const projectNewButton = document.getElementById('project-new-button');

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

  const renderEventUsage = () => {
    if (!eventUsageList) {
      return;
    }
    eventUsageList.innerHTML = '';
    if (!selectedEventId) {
      return;
    }

    const addHeader = (labelKey) => {
      const row = document.createElement('div');
      row.className = 'mini-row mini-row--header';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = getTranslation(labelKey);
      row.appendChild(label);
      eventUsageList.appendChild(row);
    };

    const addItem = (name, labelKey) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      const badge = document.createElement('span');
      badge.className = 'mini-v badge';
      badge.textContent = getTranslation(labelKey);
      row.appendChild(key);
      row.appendChild(badge);
      eventUsageList.appendChild(row);
    };

    const poseUsage = [];
    eventState.poses.forEach((pose) => {
      const triggers = pose.triggers || {};
      if (triggers.start === selectedEventId) {
        poseUsage.push({ name: pose.id, label: 'event.usage.poseStart' });
      }
      if (triggers.reached === selectedEventId) {
        poseUsage.push({ name: pose.id, label: 'event.usage.poseReached' });
      }
      if (triggers.end === selectedEventId) {
        poseUsage.push({ name: pose.id, label: 'event.usage.poseEnd' });
      }
      if (triggers.overrun === selectedEventId) {
        poseUsage.push({ name: pose.id, label: 'event.usage.poseOverrun' });
      }
    });

    const sequenceUsage = [];
    eventState.sequences.forEach((sequence) => {
      const triggers = sequence.triggers || {};
      if (triggers.start === selectedEventId) {
        sequenceUsage.push({ name: sequence.id, label: 'event.usage.sequenceStart' });
      }
      if (triggers.end === selectedEventId) {
        sequenceUsage.push({ name: sequence.id, label: 'event.usage.sequenceEnd' });
      }
    });

    addHeader('event.usage.poseList');
    if (poseUsage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      eventUsageList.appendChild(empty);
    } else {
      poseUsage.forEach((item) => addItem(item.name, item.label));
    }

    addHeader('event.usage.sequenceList');
    if (sequenceUsage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      eventUsageList.appendChild(empty);
    } else {
      sequenceUsage.forEach((item) => addItem(item.name, item.label));
    }
  };

  const renderEasingUsage = () => {
    if (!easingUsageList) {
      return;
    }
    easingUsageList.innerHTML = '';
    if (!selectedEasingId) {
      return;
    }
    const usage = [];
    eventState.sequences.forEach((sequence) => {
      const used = (sequence.steps || []).some((step) => {
        if (step.type !== 'pose') {
          return false;
        }
        if (step.easingId === selectedEasingId) {
          return true;
        }
        if (step.axisEasing) {
          return Object.values(step.axisEasing).some((value) => value === selectedEasingId);
        }
        return false;
      });
      if (used) {
        usage.push(sequence.id);
      }
    });
    if (usage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      easingUsageList.appendChild(empty);
      return;
    }
    usage.forEach((name) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      row.appendChild(key);
      easingUsageList.appendChild(row);
    });
  };

  const renderSequenceUsage = () => {
    if (!sequenceUsageList) {
      return;
    }
    sequenceUsageList.innerHTML = '';
    if (!selectedSequenceId) {
      return;
    }
    const usage = eventState.sequences
      .filter((sequence) => sequence.id !== selectedSequenceId)
      .filter((sequence) => (sequence.steps || []).some((step) => step.type === 'sequence' && step.targetId === selectedSequenceId))
      .map((sequence) => sequence.id);
    if (usage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      sequenceUsageList.appendChild(empty);
      return;
    }
    usage.forEach((name) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      row.appendChild(key);
      sequenceUsageList.appendChild(row);
    });
  };

  const renderPoseUsage = () => {
    if (!poseUsageList) {
      return;
    }
    poseUsageList.innerHTML = '';
    if (!selectedPoseId) {
      return;
    }
    const usage = eventState.sequences
      .filter((sequence) => (sequence.steps || []).some((step) => step.type === 'pose' && step.targetId === selectedPoseId))
      .map((sequence) => sequence.id);
    if (usage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      poseUsageList.appendChild(empty);
      return;
    }
    usage.forEach((name) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      row.appendChild(key);
      poseUsageList.appendChild(row);
    });
  };

  const renderServoUsage = () => {
    if (!servoUsageList) {
      return;
    }
    servoUsageList.innerHTML = '';
    if (!selectedServoId) {
      return;
    }
    const usage = eventState.joints
      .filter((joint) => (joint.servos || []).some((servo) => servo.servoId === selectedServoId))
      .map((joint) => joint.id);
    if (usage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      servoUsageList.appendChild(empty);
      return;
    }
    usage.forEach((name) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      row.appendChild(key);
      servoUsageList.appendChild(row);
    });
  };

  const renderJointUsage = () => {
    if (!jointUsageList) {
      return;
    }
    jointUsageList.innerHTML = '';
    if (!selectedJointId) {
      return;
    }
    const getPoseSelectedJointIds = (pose) => {
      if (!pose) {
        return [];
      }
      if (pose.id === selectedPoseId && poseAxisList) {
        const selectedIds = [];
        poseAxisList.querySelectorAll('input[type="checkbox"][data-pose-axis]').forEach((input) => {
          if (input.checked) {
            selectedIds.push(input.dataset.poseAxis);
          }
        });
        return selectedIds;
      }
      return (pose.jointTargets || []).map((target) => target.jointId);
    };
    const addHeader = (labelKey) => {
      const row = document.createElement('div');
      row.className = 'mini-row mini-row--header';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = getTranslation(labelKey);
      row.appendChild(label);
      jointUsageList.appendChild(row);
    };

    const addItem = (name) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      row.appendChild(key);
      jointUsageList.appendChild(row);
    };

    const groupUsage = eventState.jointGroups
      .filter((group) => (group.jointIds || []).includes(selectedJointId))
      .map((group) => group.id);

    const poseUsage = eventState.poses
      .filter((pose) => getPoseSelectedJointIds(pose).includes(selectedJointId))
      .map((pose) => pose.id);

    addHeader('joint.usage.groupList');
    if (groupUsage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      jointUsageList.appendChild(empty);
    } else {
      groupUsage.forEach((name) => addItem(name));
    }

    addHeader('joint.usage.poseList');
    if (poseUsage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      jointUsageList.appendChild(empty);
    } else {
      poseUsage.forEach((name) => addItem(name));
    }
  };

  const renderJointGroupUsage = () => {
    if (!jointGroupUsageList) {
      return;
    }
    jointGroupUsageList.innerHTML = '';
    if (!selectedJointGroupId) {
      return;
    }
    const usage = eventState.poses
      .filter((pose) => pose.groupId === selectedJointGroupId)
      .map((pose) => pose.id);
    if (usage.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = '—';
      empty.appendChild(label);
      jointGroupUsageList.appendChild(empty);
      return;
    }
    usage.forEach((name) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const key = document.createElement('span');
      key.className = 'mini-k';
      key.textContent = name;
      row.appendChild(key);
      jointGroupUsageList.appendChild(row);
    });
  };

  const getSequenceUsageCount = (sequenceId) => {
    let count = 0;
    eventState.sequences.forEach((sequence) => {
      if (sequence.id === sequenceId) {
        return;
      }
      if ((sequence.steps || []).some((step) => step.type === 'sequence' && step.targetId === sequenceId)) {
        count += 1;
      }
    });
    return count;
  };

  const getPoseUsageCount = (poseId) => {
    let count = 0;
    eventState.sequences.forEach((sequence) => {
      if ((sequence.steps || []).some((step) => step.type === 'pose' && step.targetId === poseId)) {
        count += 1;
      }
    });
    return count;
  };

  const getJointUsageCount = (jointId) => {
    let count = 0;
    eventState.jointGroups.forEach((group) => {
      if ((group.jointIds || []).includes(jointId)) {
        count += 1;
      }
    });
    eventState.poses.forEach((pose) => {
      const targetIds = pose.id === selectedPoseId && poseAxisList
        ? Array.from(poseAxisList.querySelectorAll('input[type="checkbox"][data-pose-axis]'))
          .filter((input) => input.checked)
          .map((input) => input.dataset.poseAxis)
        : (pose.jointTargets || []).map((target) => target.jointId);
      if (targetIds.includes(jointId)) {
        count += 1;
      }
    });
    return count;
  };

  const getServoUsageCount = (servoId) => {
    let count = 0;
    eventState.joints.forEach((joint) => {
      if ((joint.servos || []).some((servo) => servo.servoId === servoId)) {
        count += 1;
      }
    });
    return count;
  };

  const getJointGroupUsageCount = (groupId) => {
    let count = 0;
    eventState.poses.forEach((pose) => {
      if (pose.groupId === groupId) {
        count += 1;
      }
    });
    return count;
  };

  const getEventUsageCount = (eventId) => {
    let count = 0;
    eventState.poses.forEach((pose) => {
      const triggers = pose.triggers || {};
      if (triggers.start === eventId) {
        count += 1;
      }
      if (triggers.reached === eventId) {
        count += 1;
      }
      if (triggers.end === eventId) {
        count += 1;
      }
      if (triggers.overrun === eventId) {
        count += 1;
      }
    });
    eventState.sequences.forEach((sequence) => {
      const triggers = sequence.triggers || {};
      if (triggers.start === eventId) {
        count += 1;
      }
      if (triggers.end === eventId) {
        count += 1;
      }
    });
    return count;
  };

  const getEasingUsageCount = (easingId) => {
    let count = 0;
    eventState.sequences.forEach((sequence) => {
      (sequence.steps || []).forEach((step) => {
        if (step.type !== 'pose') {
          return;
        }
        if (step.easingId === easingId) {
          count += 1;
        }
        if (step.axisEasing) {
          Object.values(step.axisEasing).forEach((value) => {
            if (value === easingId) {
              count += 1;
            }
          });
        }
      });
    });
    return count;
  };

  const updateLocalizedLists = () => {
    renderServoList?.();
    renderJointList?.();
    renderJointGroupList?.();
    renderPoseList?.();
    renderSequenceList?.();
    renderEasingList?.();
    renderServoUsage?.();
    renderEventUsage?.();
    renderEasingUsage?.();
    renderSequenceUsage?.();
    renderPoseUsage?.();
    renderJointGroupUsage?.();
    renderJointUsage?.();
    updateJointServoRangeLimits?.(selectedJointServoId);
    const jointGroup = selectedJointGroupId
      ? eventState.jointGroups.find((group) => group.id === selectedJointGroupId)
      : null;
    if (jointGroup) {
      renderJointGroupJointList?.(jointGroup);
    }
    updatePoseTriggerOptions?.();
    updatePoseControlOptions?.();
    renderPoseControlAxisEasing?.();
    const pose = getSelectedPose?.();
    if (pose) {
      updatePoseGroupOptions?.(pose.groupId);
      renderPoseAxisList?.(pose);
      const axisId = selectedPoseAxisId || pose.jointTargets?.[0]?.jointId || getPoseJointIds?.(pose)?.[0] || null;
      if (axisId) {
        const target = pose.jointTargets?.find((item) => item.jointId === axisId);
        setActivePoseAxis?.(axisId, target?.deg ?? 0, pose);
      } else {
        setActivePoseAxis?.(null, 0, pose);
      }
    }
    const sequence = getSelectedSequence?.();
    if (sequence) {
      renderSequenceSteps?.(sequence);
    }
    updateSequenceTriggerOptions?.();
    updateSequenceTargetOptions?.();
    updateSequenceEasingOptions?.();
    renderSequenceAxisEasing?.();
    updateSequenceControlOptions?.();
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
    updateLocalizedLists();
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
      if (tab === 'simple') {
        updateSimpleJsonOutput();
      }
      if (tab === 'cpp') {
        updateCppOutput();
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
  const eventNumberError = document.getElementById('event-number-error');
  const eventOrderInput = document.getElementById('event-order-input');
  const eventDescriptionInput = document.getElementById('event-description-input');
  const dataRichOutput = document.getElementById('data-rich-output');
  const dataSimpleOutput = document.getElementById('data-simple-output');
  const dataCppOutput = document.getElementById('data-cpp-output');
  const eventFilterInput = document.getElementById('event-filter-input');
  const servoList = document.getElementById('servo-list');
  const servoAddButton = document.getElementById('servo-add');
  const servoSaveButton = document.getElementById('servo-save');
  const servoDuplicateButton = document.getElementById('servo-duplicate');
  const servoDeleteButton = document.getElementById('servo-delete');
  const servoIdInput = document.getElementById('servo-id-input');
  const servoIdError = document.getElementById('servo-id-error');
  const servoOrderInput = document.getElementById('servo-order-input');
  const servoDescriptionInput = document.getElementById('servo-description-input');
  const servoTypeSelect = document.getElementById('servo-type-select');
  const servoModeSelect = document.getElementById('servo-mode-select');
  const servoFilterInput = document.getElementById('servo-filter-input');
  const servoPwmPinInput = document.getElementById('servo-pwm-pin-input');
  const servoPwmFreqInput = document.getElementById('servo-pwm-freq-input');
  const servoPwmPulseMinInput = document.getElementById('servo-pwm-pulse-min-input');
  const servoPwmPulseMaxInput = document.getElementById('servo-pwm-pulse-max-input');
  const servoPwmCenterInput = document.getElementById('servo-pwm-center-input');
  const servoPwmDeadbandInput = document.getElementById('servo-pwm-deadband-input');
  const servoPwmSpeedInput = document.getElementById('servo-pwm-speed-input');
  const servoPwmAngleMinInput = document.getElementById('servo-pwm-angle-min-input');
  const servoPwmAngleMaxInput = document.getElementById('servo-pwm-angle-max-input');
  const servoPwmOffsetInput = document.getElementById('servo-pwm-offset-input');
  const servoTtlAddressInput = document.getElementById('servo-ttl-address-input');
  const servoTtlBusInput = document.getElementById('servo-ttl-bus-input');
  const servoTtlSpeedInput = document.getElementById('servo-ttl-speed-input');
  const servoTtlAngleMinInput = document.getElementById('servo-ttl-angle-min-input');
  const servoTtlAngleMaxInput = document.getElementById('servo-ttl-angle-max-input');
  const servoTtlOffsetInput = document.getElementById('servo-ttl-offset-input');
  const servoUsageList = document.getElementById('servo-usage-list');
  const jointList = document.getElementById('joint-list');
  const jointAddButton = document.getElementById('joint-add');
  const jointSaveButton = document.getElementById('joint-save');
  const jointDuplicateButton = document.getElementById('joint-duplicate');
  const jointDeleteButton = document.getElementById('joint-delete');
  const jointIdInput = document.getElementById('joint-id-input');
  const jointIdError = document.getElementById('joint-id-error');
  const jointOrderInput = document.getElementById('joint-order-input');
  const jointDescriptionInput = document.getElementById('joint-description-input');
  const jointPreviewOffsetInput = document.getElementById('joint-preview-offset-input');
  const jointPreviewDirectionSelect = document.getElementById('joint-preview-direction-select');
  const jointRangeMinInput = document.getElementById('joint-range-min-input');
  const jointRangeMaxInput = document.getElementById('joint-range-max-input');
  const jointFilterInput = document.getElementById('joint-filter-input');
  const jointServoList = document.getElementById('joint-servo-list');
  const jointServoTarget = document.getElementById('joint-servo-target');
  const jointServoDirectionInput = document.getElementById('joint-servo-direction-input');
  const jointServoOffsetInput = document.getElementById('joint-servo-offset-input');
  const jointServoMinInput = document.getElementById('joint-servo-min-input');
  const jointServoMaxInput = document.getElementById('joint-servo-max-input');
  const jointServoMinHint = document.getElementById('joint-servo-min-hint');
  const jointServoMaxHint = document.getElementById('joint-servo-max-hint');
  const jointServoSaveButton = document.getElementById('joint-servo-save');
  const jointUsageList = document.getElementById('joint-usage-list');
  const jointGroupList = document.getElementById('joint-group-list');
  const jointGroupAddButton = document.getElementById('joint-group-add');
  const jointGroupSaveButton = document.getElementById('joint-group-save');
  const jointGroupDuplicateButton = document.getElementById('joint-group-duplicate');
  const jointGroupDeleteButton = document.getElementById('joint-group-delete');
  const jointGroupIdInput = document.getElementById('joint-group-id-input');
  const jointGroupIdError = document.getElementById('joint-group-id-error');
  const jointGroupOrderInput = document.getElementById('joint-group-order-input');
  const jointGroupDescriptionInput = document.getElementById('joint-group-description-input');
  const jointGroupFilterInput = document.getElementById('joint-group-filter-input');
  const jointGroupJointList = document.getElementById('joint-group-joint-list');
  const jointGroupSelectedId = document.getElementById('joint-group-selected');
  const jointGroupSelectedServos = document.getElementById('joint-group-servos');
  const jointGroupUsageList = document.getElementById('joint-group-usage-list');
  const poseList = document.getElementById('pose-list');
  const poseAddButton = document.getElementById('pose-add');
  const poseSaveButton = document.getElementById('pose-save');
  const poseDuplicateButton = document.getElementById('pose-duplicate');
  const poseDeleteButton = document.getElementById('pose-delete');
  const poseIdInput = document.getElementById('pose-id-input');
  const poseIdError = document.getElementById('pose-id-error');
  const poseOrderInput = document.getElementById('pose-order-input');
  const poseDescriptionInput = document.getElementById('pose-description-input');
  const poseGroupSelect = document.getElementById('pose-group-select');
  const poseFilterInput = document.getElementById('pose-filter-input');
  const poseAxisList = document.getElementById('pose-axis-list');
  const poseAxisTarget = document.getElementById('pose-axis-target');
  const poseAxisRange = document.getElementById('pose-axis-range');
  const poseAxisInput = document.getElementById('pose-axis-input');
  const poseAxisRangeNote = document.getElementById('pose-axis-range-note');
  const poseAxisNeedle = document.querySelector('#panel-pose .servo-preview-card .mini-needle');
  const poseTriggerStart = document.getElementById('pose-trigger-start');
  const poseTriggerReached = document.getElementById('pose-trigger-reached');
  const poseTriggerEnd = document.getElementById('pose-trigger-end');
  const poseTriggerOverrun = document.getElementById('pose-trigger-overrun');
  const poseControlStart = document.getElementById('pose-control-start');
  const poseControlDuration = document.getElementById('pose-control-duration');
  const poseControlEasing = document.getElementById('pose-control-easing');
  const poseControlAxisEasing = document.getElementById('pose-control-axis-easing');
  const poseUsageList = document.getElementById('pose-usage-list');
  const sequenceList = document.getElementById('sequence-list');
  const sequenceAddButton = document.getElementById('sequence-add');
  const sequenceSaveButton = document.getElementById('sequence-save');
  const sequenceDuplicateButton = document.getElementById('sequence-duplicate');
  const sequenceDeleteButton = document.getElementById('sequence-delete');
  const sequenceIdInput = document.getElementById('sequence-id-input');
  const sequenceIdError = document.getElementById('sequence-id-error');
  const sequenceOrderInput = document.getElementById('sequence-order-input');
  const sequenceDescriptionInput = document.getElementById('sequence-description-input');
  const sequenceFilterInput = document.getElementById('sequence-filter-input');
  const sequenceStepList = document.getElementById('sequence-step-list');
  const sequenceStepAddButton = document.getElementById('sequence-step-add');
  const sequenceStepUpButton = document.getElementById('sequence-step-up');
  const sequenceStepDownButton = document.getElementById('sequence-step-down');
  const sequenceTriggerStart = document.getElementById('sequence-trigger-start');
  const sequenceTriggerEnd = document.getElementById('sequence-trigger-end');
  const sequenceTargetType = document.getElementById('sequence-target-type');
  const sequenceTargetId = document.getElementById('sequence-target-id');
  const sequencePoseDuration = document.getElementById('sequence-pose-duration');
  const sequencePoseEasing = document.getElementById('sequence-pose-easing');
  const sequenceAxisEasing = document.getElementById('sequence-axis-easing');
  const sequenceControlStart = document.getElementById('sequence-control-start');
  const eventUsageList = document.getElementById('event-usage-list');
  const easingUsageList = document.getElementById('easing-usage-list');
  const sequenceUsageList = document.getElementById('sequence-usage-list');
  const easingList = document.getElementById('easing-list');
  const easingAddButton = document.getElementById('easing-add');
  const easingIdInput = document.getElementById('easing-id-input');
  const easingOrderInput = document.getElementById('easing-order-input');
  const easingDescriptionInput = document.getElementById('easing-description-input');
  const easingTypeSelect = document.getElementById('easing-type-select');
  const easingFilterInput = document.getElementById('easing-filter-input');
  const projectImportButton = document.getElementById('project-import-button');
  const projectSaveButton = document.getElementById('project-save-button');
  const projectImportInput = document.getElementById('project-import-input');

  const defaultState = {
    meta: {
      schema: 'motionkit',
      version: '0.1.0'
    },
    events: [
      { id: 'event_sound_a', number: 100, displayOrder: 10, description: 'Play sound A' },
      { id: 'event_led_flash', number: 210, displayOrder: 20, description: 'Flash LED' }
    ],
    servos: [
      {
        id: 'servo_front_left',
        type: 'pwm',
        mode: 'position',
        displayOrder: 10,
        description: 'Front left servo',
        previewOffset: 0,
        previewDirection: 'cw',
        pwm: {
          pin: 18,
          freq: 50,
          pulseMin: 500,
          pulseMax: 2400,
          center: 1500,
          deadband: 5,
          speed: 300,
          angleMin: 0,
          angleMax: 180,
          offset: 0
        },
        ttl: {
          address: 1,
          bus: 'UART0'
        }
      },
      {
        id: 'servo_front_right',
        type: 'pwm',
        mode: 'position',
        displayOrder: 20,
        description: 'Front right servo',
        previewOffset: 0,
        previewDirection: 'cw',
        pwm: {
          pin: 19,
          freq: 50,
          pulseMin: 500,
          pulseMax: 2400,
          center: 1500,
          deadband: 5,
          speed: 300,
          angleMin: 0,
          angleMax: 180,
          offset: 0
        },
        ttl: {
          address: 1,
          bus: 'UART0'
        }
      },
      {
        id: 'servo_tail',
        type: 'ttl',
        mode: 'position',
        displayOrder: 30,
        description: 'Tail servo',
        previewOffset: 0,
        previewDirection: 'cw',
        pwm: {
          pin: 18,
          freq: 50,
          pulseMin: 500,
          pulseMax: 2400,
          center: 1500,
          deadband: 5,
          speed: 300,
          angleMin: 0,
          angleMax: 180,
          offset: 0
        },
        ttl: {
          address: 1,
          bus: 'UART0'
        }
      }
    ],
    joints: [
      {
        id: 'yaw',
        displayOrder: 10,
        description: 'Head yaw',
        previewOffset: 0,
        previewDirection: 'cw',
        servos: [
          { servoId: 'servo_front_left', reverse: false, offset: 0, min: 0, max: 180 },
          { servoId: 'servo_front_right', reverse: false, offset: 0, min: 0, max: 180 }
        ]
      },
      {
        id: 'pitch',
        displayOrder: 20,
        description: 'Head pitch',
        previewOffset: 0,
        previewDirection: 'cw',
        servos: [{ servoId: 'servo_front_left', reverse: false, offset: 0, min: 0, max: 180 }]
      },
      {
        id: 'roll',
        displayOrder: 30,
        description: 'Head roll',
        previewOffset: 0,
        previewDirection: 'cw',
        servos: [{ servoId: 'servo_tail', reverse: false, offset: 0, min: 0, max: 180 }]
      }
    ],
    jointGroups: [
      {
        id: 'jg_arms',
        displayOrder: 10,
        description: 'Arm joints',
        jointIds: ['yaw', 'pitch', 'roll']
      },
      {
        id: 'jg_head',
        displayOrder: 20,
        description: 'Head joints',
        jointIds: ['yaw', 'pitch']
      }
    ],
    poses: [
      {
        id: 'p_home',
        displayOrder: 10,
        description: 'Neutral pose',
        groupId: 'all',
        jointTargets: [
          { jointId: 'yaw', deg: 0 },
          { jointId: 'pitch', deg: 0 },
          { jointId: 'roll', deg: 0 }
        ],
        triggers: { start: null, reached: null, end: null, overrun: null }
      },
      {
        id: 'p_wave',
        displayOrder: 20,
        description: 'Wave pose',
        groupId: 'jg_arms',
        jointTargets: [
          { jointId: 'yaw', deg: 20 },
          { jointId: 'pitch', deg: -10 }
        ],
        triggers: { start: null, reached: null, end: null, overrun: null }
      },
      {
        id: 'p_ready',
        displayOrder: 30,
        description: 'Ready pose',
        groupId: 'jg_head',
        jointTargets: [
          { jointId: 'yaw', deg: 5 },
          { jointId: 'roll', deg: 5 }
        ],
        triggers: { start: null, reached: null, end: null, overrun: null }
      }
    ],
    sequences: [
      {
        id: 'seq_demo',
        displayOrder: 10,
        description: 'Demo sequence',
        steps: [
          { type: 'pose', targetId: 'p_home', moveMs: 500, easingId: 'e_smooth', axisEasing: {} },
          { type: 'pose', targetId: 'p_wave', moveMs: 800, easingId: 'e_linear', axisEasing: {} },
          { type: 'sequence', targetId: 'seq_intro' }
        ],
        triggers: { start: null, end: null }
      },
      {
        id: 'seq_intro',
        displayOrder: 20,
        description: 'Intro sequence',
        steps: [
          { type: 'pose', targetId: 'p_home', moveMs: 400, easingId: 'e_linear', axisEasing: {} },
          { type: 'pose', targetId: 'p_ready', moveMs: 600, easingId: 'e_smooth', axisEasing: {} }
        ],
        triggers: { start: null, end: null }
      }
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
  let selectedServoId = null;
  let selectedJointId = null;
  let selectedJointServoId = null;
  let selectedJointGroupId = null;
  let selectedJointGroupJointId = null;
  let selectedPoseId = null;
  let selectedPoseAxisId = null;
  let selectedSequenceId = null;
  let selectedSequenceStepIndex = null;
  let hasLoadedState = false;

  const loadEventState = () => {
    if (hasLoadedState) {
      return;
    }
    try {
      const raw = localStorage.getItem(eventStorageKey);
      if (!raw) {
        hasLoadedState = true;
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed && parsed.meta) {
        eventState = {
          meta: parsed.meta || defaultState.meta,
          events: Array.isArray(parsed.events) ? parsed.events : defaultState.events,
          easings: Array.isArray(parsed.easings) ? parsed.easings : defaultState.easings,
          servos: Array.isArray(parsed.servos) ? parsed.servos : defaultState.servos,
          joints: Array.isArray(parsed.joints) ? parsed.joints : defaultState.joints,
          jointGroups: Array.isArray(parsed.jointGroups) ? parsed.jointGroups : defaultState.jointGroups,
          poses: Array.isArray(parsed.poses) ? parsed.poses : defaultState.poses,
          sequences: Array.isArray(parsed.sequences) ? parsed.sequences : defaultState.sequences
        };
      }
      hasLoadedState = true;
    } catch (error) {
      // Ignore malformed storage.
      hasLoadedState = true;
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
    const servos = eventState.servos.map((servo) => {
      const item = {
        id: servo.id,
        type: servo.type,
        mode: servo.mode
      };
      if (servo.displayOrder !== null && servo.displayOrder !== undefined && servo.displayOrder !== '') {
        item.displayOrder = servo.displayOrder;
      }
      if (servo.description) {
        item.description = servo.description;
      }
      if (servo.previewOffset !== null && servo.previewOffset !== undefined) {
        item.previewOffset = servo.previewOffset;
      }
      if (servo.previewDirection) {
        item.previewDirection = servo.previewDirection;
      }
      if (servo.type === 'pwm') {
        if (servo.pwm?.pin !== undefined && servo.pwm?.pin !== null) {
          item.pin = servo.pwm.pin;
        }
        item.pwm = {
          freq: servo.pwm?.freq,
          pulseMin: servo.pwm?.pulseMin,
          pulseMax: servo.pwm?.pulseMax,
          center: servo.pwm?.center,
          deadband: servo.pwm?.deadband,
          speed: servo.pwm?.speed,
          angleMin: servo.pwm?.angleMin,
          angleMax: servo.pwm?.angleMax,
          offset: servo.pwm?.offset
        };
      }
      if (servo.type === 'ttl') {
        item.ttl = {
          address: servo.ttl?.address,
          bus: servo.ttl?.bus,
          speed: servo.ttl?.speed,
          angleMin: servo.ttl?.angleMin,
          angleMax: servo.ttl?.angleMax,
          offset: servo.ttl?.offset
        };
      }
      return item;
    });
    const joints = eventState.joints.map((joint) => {
      const item = {
        id: joint.id,
        servoRefs: (joint.servos || []).map((servo) => ({
          servoId: servo.servoId,
          reverse: !!servo.reverse,
          offset: servo.offset ?? 0,
          min: servo.min ?? 0,
          max: servo.max ?? 0
        }))
      };
      if (joint.displayOrder !== null && joint.displayOrder !== undefined && joint.displayOrder !== '') {
        item.displayOrder = joint.displayOrder;
      }
      if (joint.description) {
        item.description = joint.description;
      }
      if (joint.previewOffset !== null && joint.previewOffset !== undefined) {
        item.previewOffset = joint.previewOffset;
      }
      if (joint.previewDirection) {
        item.previewDirection = joint.previewDirection;
      }
      if (joint.rangeMin !== null && joint.rangeMin !== undefined) {
        item.rangeMin = joint.rangeMin;
      }
      if (joint.rangeMax !== null && joint.rangeMax !== undefined) {
        item.rangeMax = joint.rangeMax;
      }
      return item;
    });
    const jointGroups = eventState.jointGroups.map((group) => {
      const item = {
        id: group.id,
        jointIds: group.jointIds || []
      };
      if (group.displayOrder !== null && group.displayOrder !== undefined && group.displayOrder !== '') {
        item.displayOrder = group.displayOrder;
      }
      if (group.description) {
        item.description = group.description;
      }
      return item;
    });
    const poses = eventState.poses.map((pose) => {
      const item = {
        id: pose.id,
        jointTargets: (pose.jointTargets || []).map((target) => ({
          jointId: target.jointId,
          deg: target.deg
        }))
      };
      if (pose.displayOrder !== null && pose.displayOrder !== undefined && pose.displayOrder !== '') {
        item.displayOrder = pose.displayOrder;
      }
      if (pose.description) {
        item.description = pose.description;
      }
      if (pose.groupId && pose.groupId !== 'all') {
        item.groupId = pose.groupId;
      }
      if (pose.triggers) {
        const triggerItems = Object.entries(pose.triggers)
          .filter(([, eventId]) => eventId)
          .map(([key, eventId]) => ({ at: key, eventId }));
        if (triggerItems.length > 0) {
          item.triggers = triggerItems;
        }
      }
      return item;
    });
    const sequences = eventState.sequences.map((sequence) => {
      const item = {
        id: sequence.id,
        steps: (sequence.steps || []).map((step) => {
          if (step.type === 'sequence') {
            return { sequenceId: step.targetId };
          }
          const stepItem = {
            poseId: step.targetId,
            moveMs: step.moveMs,
            easingId: step.easingId
          };
          if (step.axisEasing && Object.keys(step.axisEasing).length > 0) {
            stepItem.axisEasing = step.axisEasing;
          }
          return stepItem;
        })
      };
      if (sequence.displayOrder !== null && sequence.displayOrder !== undefined && sequence.displayOrder !== '') {
        item.displayOrder = sequence.displayOrder;
      }
      if (sequence.description) {
        item.description = sequence.description;
      }
      if (sequence.triggers) {
        const triggerItems = [];
        if (sequence.triggers.start) {
          triggerItems.push({ at: 'sequence_start', eventId: sequence.triggers.start });
        }
        if (sequence.triggers.end) {
          triggerItems.push({ at: 'sequence_end', eventId: sequence.triggers.end });
        }
        if (triggerItems.length > 0) {
          item.triggers = triggerItems;
        }
      }
      return item;
    });
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
      servos,
      joints,
      jointGroups,
      poses,
      sequences,
      events,
      easings
    };
  };

  const expandSequenceSteps = (steps, sequences, rootId) => {
    const expanded = [];
    (steps || []).forEach((step) => {
      if (step?.sequenceId) {
        const targetId = step.sequenceId;
        if (targetId === rootId) {
          return;
        }
        const target = sequences.find((sequence) => sequence.id === targetId);
        if (!target) {
          return;
        }
        (target.steps || []).forEach((nested) => {
          if (!nested?.sequenceId) {
            expanded.push({ ...nested });
          }
        });
        return;
      }
      expanded.push({ ...step });
    });
    return expanded;
  };

  const buildSimpleJson = () => {
    const richJson = buildRichJson();
    const simpleJson = JSON.parse(JSON.stringify(richJson));
    const collections = [
      'servos',
      'joints',
      'jointGroups',
      'poses',
      'sequences',
      'events',
      'easings'
    ];
    collections.forEach((key) => {
      (simpleJson[key] || []).forEach((item) => {
        delete item.displayOrder;
        delete item.description;
      });
    });
    delete simpleJson.jointGroups;
    (simpleJson.poses || []).forEach((pose) => {
      delete pose.groupId;
    });
    (simpleJson.servos || []).forEach((servo) => {
      delete servo.previewOffset;
      delete servo.previewDirection;
    });
    (simpleJson.joints || []).forEach((joint) => {
      delete joint.previewOffset;
      delete joint.previewDirection;
      (joint.servoRefs || []).forEach((servoRef) => {
        delete servoRef.min;
        delete servoRef.max;
      });
    });
    (simpleJson.sequences || []).forEach((sequence) => {
      sequence.steps = expandSequenceSteps(sequence.steps, simpleJson.sequences || [], sequence.id);
    });
    (simpleJson.easings || []).forEach((easing) => {
      delete easing.type;
    });
    return simpleJson;
  };

  const toCppIdentifier = (prefix, id) => {
    const source = String(id || 'id');
    const safe = source
      .replace(/[^a-zA-Z0-9_一-龯ぁ-ゖァ-ヺㄱ-힣]/g, '_');
    const normalized = /^\d/.test(safe) ? `_${safe}` : safe;
    return `${prefix}${normalized}`;
  };

  const stripDefaultPrefix = (type, id) => {
    const source = String(id || '');
    const prefixMap = {
      servo: 'servo_',
      joint: 'joint_',
      pose: 'pose_',
      easing: 'easing_',
      event: 'event_',
      sequence: 'seq_'
    };
    const prefix = prefixMap[type];
    if (prefix && source.startsWith(prefix)) {
      return source.slice(prefix.length) || source;
    }
    return source;
  };

  const reservedCppWords = new Set([
    'alignas', 'alignof', 'and', 'and_eq', 'asm', 'auto', 'bitand', 'bitor',
    'bool', 'break', 'case', 'catch', 'char', 'char16_t', 'char32_t', 'class',
    'compl', 'const', 'constexpr', 'const_cast', 'continue', 'decltype',
    'default', 'delete', 'do', 'double', 'dynamic_cast', 'else', 'enum',
    'explicit', 'export', 'extern', 'false', 'float', 'for', 'friend', 'goto',
    'if', 'inline', 'int', 'long', 'mutable', 'namespace', 'new', 'noexcept',
    'not', 'not_eq', 'nullptr', 'operator', 'or', 'or_eq', 'private',
    'protected', 'public', 'register', 'reinterpret_cast', 'return', 'short',
    'signed', 'sizeof', 'static', 'static_assert', 'static_cast', 'struct',
    'switch', 'template', 'this', 'thread_local', 'throw', 'true', 'try',
    'typedef', 'typeid', 'typename', 'union', 'unsigned', 'using', 'virtual',
    'void', 'volatile', 'wchar_t', 'while', 'xor', 'xor_eq',
    '_Alignas', '_Alignof', '_Atomic', '_Bool', '_Complex', '_Generic',
    '_Imaginary', '_Noreturn', '_Static_assert', '_Thread_local'
  ]);

  const makeIdSymbol = (type, id, existing) => {
    const base = toCppIdentifier('', stripDefaultPrefix(type, id)) || 'id';
    if (reservedCppWords.has(base)) {
      existing.add(base);
    }
    if (!existing.has(base)) {
      existing.add(base);
      return base;
    }
    let index = 2;
    let candidate = `${base}_${index}`;
    while (existing.has(candidate)) {
      index += 1;
      candidate = `${base}_${index}`;
    }
    existing.add(candidate);
    return candidate;
  };

  const formatCppValue = (value) => {
    if (value === null || value === undefined) {
      return '0';
    }
    const numeric = Number(value);
    return Number.isFinite(numeric) ? String(numeric) : '0';
  };

  const buildCppOutput = () => {
    const simpleJson = buildSimpleJson();
    const lines = [];
    lines.push('#pragma once');
    lines.push('#include "ESP32ServoMotionKit.h"');
    lines.push('');
    lines.push('/*');
    lines.push('#include "motionkit_assets.h"');
    lines.push('');
    lines.push('motionkit::MotionKit kit;');
    lines.push('');
    lines.push('void setup()');
    lines.push('{');
    lines.push('  motionkit::assets::Load(kit);');
    lines.push('}');
    lines.push('');
    lines.push('void loop()');
    lines.push('{');
    lines.push('}');
    lines.push('*/');
    lines.push('');
    const idSymbols = {
      servo: new Map(),
      joint: new Map(),
      pose: new Map(),
      sequence: new Map(),
      easing: new Map(),
      event: new Map()
    };
    const registerSymbols = (type, items) => {
      const used = new Set();
      items.forEach((item) => {
        const symbol = makeIdSymbol(type, item.id, used);
        idSymbols[type].set(item.id, symbol);
      });
    };
    registerSymbols('servo', simpleJson.servos || []);
    registerSymbols('joint', simpleJson.joints || []);
    registerSymbols('pose', simpleJson.poses || []);
    registerSymbols('sequence', simpleJson.sequences || []);
    registerSymbols('easing', simpleJson.easings || []);
    registerSymbols('event', simpleJson.events || []);
    const getSymbol = (type, id) => {
      return idSymbols[type]?.get(id) || makeIdSymbol(type, id, new Set());
    };

    lines.push('namespace motionkit::assets::servo');
    lines.push('{');
    (simpleJson.servos || []).forEach((servo) => {
      lines.push(`  inline constexpr const char *${getSymbol('servo', servo.id)} = "${servo.id}";`);
    });
    lines.push('}');
    lines.push('');
    lines.push('namespace motionkit::assets::joint');
    lines.push('{');
    (simpleJson.joints || []).forEach((joint) => {
      lines.push(`  inline constexpr const char *${getSymbol('joint', joint.id)} = "${joint.id}";`);
    });
    lines.push('}');
    lines.push('');
    lines.push('namespace motionkit::assets::pose');
    lines.push('{');
    (simpleJson.poses || []).forEach((pose) => {
      lines.push(`  inline constexpr const char *${getSymbol('pose', pose.id)} = "${pose.id}";`);
    });
    lines.push('}');
    lines.push('');
    lines.push('namespace motionkit::assets::sequence');
    lines.push('{');
    (simpleJson.sequences || []).forEach((sequence) => {
      lines.push(`  inline constexpr const char *${getSymbol('sequence', sequence.id)} = "${sequence.id}";`);
    });
    lines.push('}');
    lines.push('');
    lines.push('namespace motionkit::assets::easing');
    lines.push('{');
    (simpleJson.easings || []).forEach((easing) => {
      lines.push(`  inline constexpr const char *${getSymbol('easing', easing.id)} = "${easing.id}";`);
    });
    lines.push('}');
    lines.push('');
    lines.push('namespace motionkit::assets::event');
    lines.push('{');
    (simpleJson.events || []).forEach((event) => {
      lines.push(`  inline constexpr const char *${getSymbol('event', event.id)} = "${event.id}";`);
    });
    lines.push('}');
    lines.push('');
    lines.push('namespace motionkit::assets');
    lines.push('{');
    lines.push('  inline void Load(motionkit::MotionKit &kit)');
    lines.push('  {');
    lines.push('');
    lines.push('    // Servos');
    (simpleJson.servos || []).forEach((servo) => {
      const idName = `motionkit::assets::servo::${getSymbol('servo', servo.id)}`;
      if (servo.type === 'pwm') {
        const pin = formatCppValue(servo.pin ?? servo.pwm?.pin);
        const mode = servo.mode === 'wheel' ? '.wheel()' : '.position()';
        const pwm = servo.pwm || {};
        const chain = [
          `.pwm(${pin})`,
          mode,
          pwm.freq !== undefined ? `.pwmFreq(${formatCppValue(pwm.freq)})` : '',
          pwm.pulseMin !== undefined ? `.pulseMin(${formatCppValue(pwm.pulseMin)})` : '',
          pwm.pulseMax !== undefined ? `.pulseMax(${formatCppValue(pwm.pulseMax)})` : '',
          pwm.center !== undefined ? `.pulseCenter(${formatCppValue(pwm.center)})` : '',
          pwm.deadband !== undefined ? `.deadband(${formatCppValue(pwm.deadband)})` : '',
          pwm.speed !== undefined ? `.speedLimit(${formatCppValue(pwm.speed)})` : '',
          pwm.angleMin !== undefined ? `.angleMin(${formatCppValue(pwm.angleMin)})` : '',
          pwm.angleMax !== undefined ? `.angleMax(${formatCppValue(pwm.angleMax)})` : '',
          pwm.offset !== undefined ? `.offset(${formatCppValue(pwm.offset)})` : ''
        ]
          .filter(Boolean)
          .join('');
        lines.push(`    kit.servo(${idName})${chain};`);
      } else if (servo.type === 'ttl') {
        const ttl = servo.ttl || {};
        const address = formatCppValue(ttl.address ?? 0);
        const bus = ttl.bus ? `"${ttl.bus}"` : '"UART0"';
        const mode = servo.mode === 'wheel' ? '.wheel()' : '.position()';
        const chain = [
          `.ttl(${address}, ${bus})`,
          mode,
          ttl.speed !== undefined ? `.speedLimit(${formatCppValue(ttl.speed)})` : '',
          ttl.angleMin !== undefined ? `.angleMin(${formatCppValue(ttl.angleMin)})` : '',
          ttl.angleMax !== undefined ? `.angleMax(${formatCppValue(ttl.angleMax)})` : '',
          ttl.offset !== undefined ? `.offset(${formatCppValue(ttl.offset)})` : ''
        ]
          .filter(Boolean)
          .join('');
        lines.push(`    kit.servo(${idName})${chain};`);
      } else {
        const mode = servo.mode === 'wheel' ? '.wheel()' : '.position()';
        lines.push(`    kit.servo(${idName})${mode};`);
      }
    });
    lines.push('');
    lines.push('    // Joints');
    (simpleJson.joints || []).forEach((joint) => {
      const idName = `motionkit::assets::joint::${getSymbol('joint', joint.id)}`;
      (joint.servoRefs || []).forEach((ref) => {
        const servoConst = `motionkit::assets::servo::${getSymbol('servo', ref.servoId)}`;
        let line = `    kit.joint(${idName}).servo(${servoConst})`;
        if (ref.reverse !== undefined) {
          line += `.reverse(${ref.reverse ? 'true' : 'false'})`;
        }
        if (ref.offset !== undefined) {
          line += `.offset(${formatCppValue(ref.offset)})`;
        }
        line += ';';
        lines.push(line);
      });
      if (joint.rangeMin !== undefined && joint.rangeMin !== null) {
        lines.push(`    kit.joint(${idName}).rangeMin(${formatCppValue(joint.rangeMin)});`);
      }
      if (joint.rangeMax !== undefined && joint.rangeMax !== null) {
        lines.push(`    kit.joint(${idName}).rangeMax(${formatCppValue(joint.rangeMax)});`);
      }
    });
    lines.push('');
    lines.push('    // Easings');
    (simpleJson.easings || []).forEach((easing) => {
      const idName = `motionkit::assets::easing::${getSymbol('easing', easing.id)}`;
      const chain = [];
      if (easing.preset) {
        chain.push(`.preset("${easing.preset}")`);
      }
      if (easing.params) {
        Object.entries(easing.params).forEach(([key, value]) => {
          chain.push(`.param("${key}", ${formatCppValue(value)})`);
        });
      }
      lines.push(`    kit.easing(${idName})${chain.join('')};`);
    });
    lines.push('');
    lines.push('    // Events');
    (simpleJson.events || []).forEach((event) => {
      const idName = `motionkit::assets::event::${getSymbol('event', event.id)}`;
      lines.push(`    kit.event(${idName}).number(${formatCppValue(event.number)});`);
    });
    lines.push('');
    lines.push('    // Poses');
    (simpleJson.poses || []).forEach((pose) => {
      const idName = `motionkit::assets::pose::${getSymbol('pose', pose.id)}`;
      (pose.jointTargets || []).forEach((target) => {
        const jointConst = `motionkit::assets::joint::${getSymbol('joint', target.jointId)}`;
        lines.push(`    kit.pose(${idName}).target(${jointConst}, ${formatCppValue(target.deg)});`);
      });
      (pose.triggers || []).forEach((trigger) => {
        const eventConst = `motionkit::assets::event::${getSymbol('event', trigger.eventId)}`;
        lines.push(`    kit.pose(${idName}).trigger("${trigger.at}", ${eventConst});`);
      });
    });
    lines.push('');
    lines.push('    // Sequences');
    (simpleJson.sequences || []).forEach((sequence) => {
      const idName = `motionkit::assets::sequence::${getSymbol('sequence', sequence.id)}`;
      (sequence.steps || []).forEach((step) => {
        const poseConst = `motionkit::assets::pose::${getSymbol('pose', step.poseId)}`;
        const easingConst = `motionkit::assets::easing::${getSymbol('easing', step.easingId)}`;
        if (step.axisEasing && Object.keys(step.axisEasing).length > 0) {
          const overrides = Object.entries(step.axisEasing)
            .map(([jointId, easingId]) => {
              const jointConst = `motionkit::assets::joint::${getSymbol('joint', jointId)}`;
              const easingOverride = `motionkit::assets::easing::${getSymbol('easing', easingId)}`;
              return `.set(${jointConst}, ${easingOverride})`;
            })
            .join('');
          lines.push(
            `    kit.sequence(${idName}).step(${poseConst}, ${formatCppValue(step.moveMs)}, ${easingConst}, kit.easingOverride()${overrides});`
          );
        } else {
          lines.push(
            `    kit.sequence(${idName}).step(${poseConst}, ${formatCppValue(step.moveMs)}, ${easingConst});`
          );
        }
      });
      (sequence.triggers || []).forEach((trigger) => {
        const eventConst = `motionkit::assets::event::${getSymbol('event', trigger.eventId)}`;
        lines.push(`    kit.sequence(${idName}).trigger("${trigger.at}", ${eventConst});`);
      });
    });
    lines.push('  }');
    lines.push('}');
    lines.push('');
    lines.push('/* MK_RICH_UI_JSON_BEGIN');
    lines.push(JSON.stringify(buildRichJson(), null, 2));
    lines.push('MK_RICH_UI_JSON_END */');
    return lines.join('\n');
  };

  const normalizeServoNumber = (value, fallback) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : fallback;
  };

  const normalizeOptionalNumber = (value) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
  };

  const normalizeEasingParams = (type, params) => {
    if (Array.isArray(params)) {
      return params;
    }
    if (!params || typeof params !== 'object') {
      return [];
    }
    const keys = easingParamOrder[type] || [];
    return keys.map((_, index) => {
      const value = params[`param${index}`];
      return Math.max(0, Math.min(255, Number(value) || 0));
    });
  };

  const normalizeServos = (servos) => {
    if (!Array.isArray(servos)) {
      return [];
    }
    return servos.map((item) => {
      const type = item?.type === 'ttl' ? 'ttl' : 'pwm';
      const mode = item?.mode === 'wheel' ? 'wheel' : 'position';
      const pwmSource = item?.pwm || {};
      const ttlSource = item?.ttl || {};
      return {
        id: item?.id || 'servo_new',
        type,
        mode,
        displayOrder: item?.displayOrder ?? null,
        description: item?.description || '',
        previewOffset: normalizeServoNumber(item?.previewOffset, 0),
        previewDirection: item?.previewDirection === 'ccw' ? 'ccw' : 'cw',
        pwm: {
          pin: normalizeServoNumber(item?.pin ?? pwmSource.pin, 18),
          freq: normalizeServoNumber(pwmSource.freq, 50),
          pulseMin: normalizeServoNumber(pwmSource.pulseMin, 500),
          pulseMax: normalizeServoNumber(pwmSource.pulseMax, 2400),
          center: normalizeServoNumber(pwmSource.center, 1500),
          deadband: normalizeServoNumber(pwmSource.deadband, 5),
          speed: normalizeServoNumber(pwmSource.speed, 300),
          angleMin: normalizeServoNumber(pwmSource.angleMin, 0),
          angleMax: normalizeServoNumber(pwmSource.angleMax, 180),
          offset: normalizeServoNumber(pwmSource.offset, 0)
        },
        ttl: {
          address: normalizeServoNumber(ttlSource.address ?? item?.address, 1),
          bus: ttlSource.bus ?? item?.bus ?? 'UART0',
          speed: normalizeServoNumber(ttlSource.speed, 300),
          angleMin: normalizeServoNumber(ttlSource.angleMin, 0),
          angleMax: normalizeServoNumber(ttlSource.angleMax, 180),
          offset: normalizeServoNumber(ttlSource.offset, 0)
        }
      };
    });
  };

  const normalizeJointServo = (item) => ({
    servoId: item?.servoId || '',
    reverse: !!item?.reverse,
    offset: normalizeServoNumber(item?.offset, 0),
    min: normalizeServoNumber(item?.min, 0),
    max: normalizeServoNumber(item?.max, 180)
  });

  const normalizeJoints = (joints) => {
    if (!Array.isArray(joints)) {
      return [];
    }
    return joints.map((item) => {
      const servoRefs = Array.isArray(item?.servos)
        ? item.servos.map(normalizeJointServo)
        : Array.isArray(item?.servoRefs)
          ? item.servoRefs.map(normalizeJointServo)
          : Array.isArray(item?.servoIds)
            ? item.servoIds.map((servoId) => normalizeJointServo({ servoId }))
            : [];
      return {
        id: item?.id || 'joint_new',
        displayOrder: item?.displayOrder ?? null,
        description: item?.description || '',
        servos: servoRefs,
        previewOffset: normalizeServoNumber(item?.previewOffset, 0),
        previewDirection: item?.previewDirection === 'ccw' ? 'ccw' : 'cw',
        rangeMin: normalizeOptionalNumber(item?.rangeMin),
        rangeMax: normalizeOptionalNumber(item?.rangeMax)
      };
    });
  };

  const normalizeJointGroups = (groups) => {
    if (!Array.isArray(groups)) {
      return [];
    }
    return groups.map((item) => ({
      id: item?.id || 'group_new',
      displayOrder: item?.displayOrder ?? null,
      description: item?.description || '',
      jointIds: Array.isArray(item?.jointIds) ? item.jointIds : []
    }));
  };

  const normalizePoses = (poses) => {
    if (!Array.isArray(poses)) {
      return [];
    }
    return poses.map((item) => {
      const targets = Array.isArray(item?.jointTargets)
        ? item.jointTargets.map((target) => ({
          jointId: target?.jointId || '',
          deg: normalizeServoNumber(target?.deg, 0)
        }))
        : [];
      const triggers = Array.isArray(item?.triggers)
        ? item.triggers.reduce((acc, trigger) => {
          if (trigger?.at && trigger?.eventId) {
            acc[trigger.at] = trigger.eventId;
          }
          return acc;
        }, { start: null, reached: null, end: null, overrun: null })
        : {
          start: item?.triggers?.start ?? null,
          reached: item?.triggers?.reached ?? null,
          end: item?.triggers?.end ?? null,
          overrun: item?.triggers?.overrun ?? null
        };
      return {
        id: item?.id || 'pose_new',
        displayOrder: item?.displayOrder ?? null,
        description: item?.description || '',
        groupId: item?.groupId || 'all',
        jointTargets: targets,
        triggers
      };
    });
  };

  const normalizeSequences = (sequences) => {
    if (!Array.isArray(sequences)) {
      return [];
    }
    return sequences.map((item) => {
      const steps = Array.isArray(item?.steps)
        ? item.steps.map((step) => {
          if (step?.poseId) {
            return {
              type: 'pose',
              targetId: step.poseId,
              moveMs: normalizeServoNumber(step.moveMs, 500),
              easingId: step.easingId || 'e_linear',
              axisEasing: step.axisEasing || {}
            };
          }
          if (step?.sequenceId) {
            return {
              type: 'sequence',
              targetId: step.sequenceId
            };
          }
          if (step?.type === 'sequence') {
            return { type: 'sequence', targetId: step.targetId || '' };
          }
          return {
            type: 'pose',
            targetId: step?.targetId || '',
            moveMs: normalizeServoNumber(step?.moveMs, 500),
            easingId: step?.easingId || 'e_linear',
            axisEasing: step?.axisEasing || {}
          };
        })
        : [];
      const triggerMap = Array.isArray(item?.triggers)
        ? item.triggers.reduce((acc, trigger) => {
          if (trigger?.at === 'sequence_start') {
            acc.start = trigger.eventId;
          }
          if (trigger?.at === 'sequence_end') {
            acc.end = trigger.eventId;
          }
          return acc;
        }, { start: null, end: null })
        : {
          start: item?.triggers?.start ?? null,
          end: item?.triggers?.end ?? null
        };
      return {
        id: item?.id || 'sequence_new',
        displayOrder: item?.displayOrder ?? null,
        description: item?.description || '',
        steps,
        triggers: triggerMap
      };
    });
  };

  const normalizeEasings = (easings) => {
    if (!Array.isArray(easings)) {
      return [];
    }
    return easings.map((item) => {
      const rawKind = item?.kind || item?.type || 'custom';
      const kind = rawKind === 'preset' || rawKind === 'custom' ? rawKind : 'custom';
      const type = item?.preset || item?.type || 'warpcurve';
      return {
        id: item?.id || 'easing_new',
        type,
        kind,
        displayOrder: item?.displayOrder ?? null,
        description: item?.description || '',
        params: normalizeEasingParams(type, item?.params)
      };
    });
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

  const sortJoints = () => {
    eventState.joints.sort((a, b) => {
      const orderA = a.displayOrder === null || a.displayOrder === undefined ? Number.POSITIVE_INFINITY : a.displayOrder;
      const orderB = b.displayOrder === null || b.displayOrder === undefined ? Number.POSITIVE_INFINITY : b.displayOrder;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return String(a.id).localeCompare(String(b.id));
    });
  };

  const sortJointGroups = () => {
    eventState.jointGroups.sort((a, b) => {
      const orderA = a.displayOrder === null || a.displayOrder === undefined ? Number.POSITIVE_INFINITY : a.displayOrder;
      const orderB = b.displayOrder === null || b.displayOrder === undefined ? Number.POSITIVE_INFINITY : b.displayOrder;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return String(a.id).localeCompare(String(b.id));
    });
  };

  const sortPoses = () => {
    eventState.poses.sort((a, b) => {
      const orderA = a.displayOrder === null || a.displayOrder === undefined ? Number.POSITIVE_INFINITY : a.displayOrder;
      const orderB = b.displayOrder === null || b.displayOrder === undefined ? Number.POSITIVE_INFINITY : b.displayOrder;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return String(a.id).localeCompare(String(b.id));
    });
  };

  const sortSequences = () => {
    eventState.sequences.sort((a, b) => {
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
    updateSimpleJsonOutput();
    updateCppOutput();
  };

  const updateSimpleJsonOutput = () => {
    if (!dataSimpleOutput) {
      return;
    }
    const simpleJson = buildSimpleJson();
    dataSimpleOutput.value = JSON.stringify(simpleJson, null, 2);
  };

  const updateCppOutput = () => {
    if (!dataCppOutput) {
      return;
    }
    dataCppOutput.value = buildCppOutput();
  };

  const clearServoIdError = () => {
    if (servoIdError) {
      servoIdError.hidden = true;
    }
    if (servoIdInput) {
      servoIdInput.classList.remove('is-error');
    }
  };

  const showServoIdError = () => {
    if (servoIdError) {
      servoIdError.hidden = false;
    }
    if (servoIdInput) {
      servoIdInput.classList.add('is-error');
    }
  };

  const hasDuplicateServoId = (id, currentId) => {
    return eventState.servos.some((item) => item.id === id && item.id !== currentId);
  };

  const renderServoList = () => {
    if (!servoList) {
      return;
    }
    servoList.innerHTML = '';
    const filter = servoFilterInput?.value?.trim().toLowerCase() || '';
    eventState.servos.forEach((servo) => {
      if (filter && !servo.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.servoId = servo.id;
      if (servo.id === selectedServoId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = servo.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = servo.type === 'ttl' ? 'TTL' : 'PWM';
      item.appendChild(name);
      item.appendChild(chip);
      servoList.appendChild(item);
    });
  };

  const populateServoEditor = (servo) => {
    if (!servo || !servoIdInput || !servoOrderInput || !servoDescriptionInput || !servoTypeSelect || !servoModeSelect) {
      return;
    }
    servoIdInput.value = servo.id ?? '';
    servoOrderInput.value = servo.displayOrder ?? '';
    servoDescriptionInput.value = servo.description ?? '';
    servoTypeSelect.value = servo.type || 'pwm';
    servoTypeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    servoModeSelect.value = servo.mode || 'position';
    if (servoPreviewOffsetInput) {
      servoPreviewOffsetInput.value = servo.previewOffset ?? 0;
    }
    if (servoPreviewDirectionSelect) {
      servoPreviewDirectionSelect.value = servo.previewDirection || 'cw';
    }
    if (servoPwmPinInput) {
      servoPwmPinInput.value = servo.pwm?.pin ?? 18;
    }
    if (servoPwmFreqInput) {
      servoPwmFreqInput.value = servo.pwm?.freq ?? 50;
    }
    if (servoPwmPulseMinInput) {
      servoPwmPulseMinInput.value = servo.pwm?.pulseMin ?? 500;
    }
    if (servoPwmPulseMaxInput) {
      servoPwmPulseMaxInput.value = servo.pwm?.pulseMax ?? 2400;
    }
    if (servoPwmCenterInput) {
      servoPwmCenterInput.value = servo.pwm?.center ?? 1500;
    }
    if (servoPwmDeadbandInput) {
      servoPwmDeadbandInput.value = servo.pwm?.deadband ?? 5;
    }
    if (servoPwmSpeedInput) {
      servoPwmSpeedInput.value = servo.pwm?.speed ?? 300;
    }
    if (servoPwmAngleMinInput) {
      servoPwmAngleMinInput.value = servo.pwm?.angleMin ?? 0;
    }
    if (servoPwmAngleMaxInput) {
      servoPwmAngleMaxInput.value = servo.pwm?.angleMax ?? 180;
    }
    if (servoPwmOffsetInput) {
      servoPwmOffsetInput.value = servo.pwm?.offset ?? 0;
    }
    if (servoTtlAddressInput) {
      servoTtlAddressInput.value = servo.ttl?.address ?? 1;
    }
    if (servoTtlBusInput) {
      servoTtlBusInput.value = servo.ttl?.bus ?? 'UART0';
    }
    if (servoTtlSpeedInput) {
      servoTtlSpeedInput.value = servo.ttl?.speed ?? 300;
    }
    if (servoTtlAngleMinInput) {
      servoTtlAngleMinInput.value = servo.ttl?.angleMin ?? 0;
    }
    if (servoTtlAngleMaxInput) {
      servoTtlAngleMaxInput.value = servo.ttl?.angleMax ?? 180;
    }
    if (servoTtlOffsetInput) {
      servoTtlOffsetInput.value = servo.ttl?.offset ?? 0;
    }
    clearServoIdError();
    if (servoPreviewOffsetInput) {
      servoPreviewOffsetInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (servoPreviewDirectionSelect) {
      servoPreviewDirectionSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const selectServoById = (servoId) => {
    const servo = eventState.servos.find((item) => item.id === servoId) || eventState.servos[0];
    if (!servo) {
      return;
    }
    selectedServoId = servo.id;
    renderServoList();
    populateServoEditor(servo);
    renderServoUsage();
  };

  const ensureServoSelection = () => {
    if (!selectedServoId && eventState.servos.length > 0) {
      selectedServoId = eventState.servos[0].id;
    }
  };

  const sortServos = () => {
    eventState.servos.sort((a, b) => {
      const orderA = a.displayOrder === null || a.displayOrder === undefined ? Number.POSITIVE_INFINITY : a.displayOrder;
      const orderB = b.displayOrder === null || b.displayOrder === undefined ? Number.POSITIVE_INFINITY : b.displayOrder;
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      return String(a.id).localeCompare(String(b.id));
    });
  };

  const createDefaultServo = (overrides = {}) => ({
    id: 'servo_new',
    type: 'pwm',
    mode: 'position',
    displayOrder: 10,
    description: '',
    previewOffset: 0,
    previewDirection: 'cw',
    pwm: {
      pin: 18,
      freq: 50,
      pulseMin: 500,
      pulseMax: 2400,
      center: 1500,
      deadband: 5,
      speed: 300,
      angleMin: 0,
      angleMax: 180,
      offset: 0
    },
    ttl: {
      address: 1,
      bus: 'UART0',
      speed: 300,
      angleMin: 0,
      angleMax: 180,
      offset: 0
    },
    ...overrides
  });

  const addServo = () => {
    const base = 'servo_new';
    let index = eventState.servos.length + 1;
    let id = `${base}_${index}`;
    while (eventState.servos.some((servo) => servo.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const maxOrder = eventState.servos.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const servo = createDefaultServo({ id, displayOrder: maxOrder + 10 });
    eventState.servos.push(servo);
    selectedServoId = servo.id;
    sortServos();
    persistEventState();
    renderServoList();
    populateServoEditor(servo);
    renderServoUsage();
    updateRichJsonOutput();
  };

  const clearServoEditor = () => {
    if (!servoIdInput || !servoOrderInput || !servoDescriptionInput || !servoTypeSelect || !servoModeSelect) {
      return;
    }
    servoIdInput.value = '';
    servoOrderInput.value = '';
    servoDescriptionInput.value = '';
    servoTypeSelect.value = 'pwm';
    servoTypeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    servoModeSelect.value = 'position';
    if (servoPreviewOffsetInput) {
      servoPreviewOffsetInput.value = 0;
    }
    if (servoPreviewDirectionSelect) {
      servoPreviewDirectionSelect.value = 'cw';
    }
    if (servoPwmPinInput) {
      servoPwmPinInput.value = 18;
    }
    if (servoPwmFreqInput) {
      servoPwmFreqInput.value = 50;
    }
    if (servoPwmPulseMinInput) {
      servoPwmPulseMinInput.value = 500;
    }
    if (servoPwmPulseMaxInput) {
      servoPwmPulseMaxInput.value = 2400;
    }
    if (servoPwmCenterInput) {
      servoPwmCenterInput.value = 1500;
    }
    if (servoPwmDeadbandInput) {
      servoPwmDeadbandInput.value = 5;
    }
    if (servoPwmSpeedInput) {
      servoPwmSpeedInput.value = 300;
    }
    if (servoPwmAngleMinInput) {
      servoPwmAngleMinInput.value = 0;
    }
    if (servoPwmAngleMaxInput) {
      servoPwmAngleMaxInput.value = 180;
    }
    if (servoPwmOffsetInput) {
      servoPwmOffsetInput.value = 0;
    }
    if (servoTtlAddressInput) {
      servoTtlAddressInput.value = 1;
    }
    if (servoTtlBusInput) {
      servoTtlBusInput.value = 'UART0';
    }
    if (servoTtlSpeedInput) {
      servoTtlSpeedInput.value = 300;
    }
    if (servoTtlAngleMinInput) {
      servoTtlAngleMinInput.value = 0;
    }
    if (servoTtlAngleMaxInput) {
      servoTtlAngleMaxInput.value = 180;
    }
    if (servoTtlOffsetInput) {
      servoTtlOffsetInput.value = 0;
    }
    clearServoIdError();
  };

  const saveServo = () => {
    if (!selectedServoId) {
      return;
    }
    const servo = eventState.servos.find((item) => item.id === selectedServoId);
    if (!servo) {
      return;
    }
    const prevId = servo.id;
    const nextId = (servoIdInput?.value || '').trim() || servo.id;
    if (hasDuplicateServoId(nextId, servo.id)) {
      showServoIdError();
      return;
    }
    if (prevId !== nextId) {
      renameServoReferences(prevId, nextId);
    }
    servo.id = nextId;
    const orderRaw = servoOrderInput?.value ?? '';
    servo.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, servo.displayOrder ?? null);
    servo.description = (servoDescriptionInput?.value || '').trim();
    servo.type = servoTypeSelect?.value === 'ttl' ? 'ttl' : 'pwm';
    servo.mode = servoModeSelect?.value === 'wheel' ? 'wheel' : 'position';
    servo.previewOffset = parseNumber(servoPreviewOffsetInput?.value, servo.previewOffset ?? 0);
    servo.previewDirection = servoPreviewDirectionSelect?.value === 'ccw' ? 'ccw' : 'cw';
    servo.pwm = {
      pin: parseNumber(servoPwmPinInput?.value, servo.pwm?.pin ?? 18),
      freq: parseNumber(servoPwmFreqInput?.value, servo.pwm?.freq ?? 50),
      pulseMin: parseNumber(servoPwmPulseMinInput?.value, servo.pwm?.pulseMin ?? 500),
      pulseMax: parseNumber(servoPwmPulseMaxInput?.value, servo.pwm?.pulseMax ?? 2400),
      center: parseNumber(servoPwmCenterInput?.value, servo.pwm?.center ?? 1500),
      deadband: parseNumber(servoPwmDeadbandInput?.value, servo.pwm?.deadband ?? 5),
      speed: parseNumber(servoPwmSpeedInput?.value, servo.pwm?.speed ?? 300),
      angleMin: parseNumber(servoPwmAngleMinInput?.value, servo.pwm?.angleMin ?? 0),
      angleMax: parseNumber(servoPwmAngleMaxInput?.value, servo.pwm?.angleMax ?? 180),
      offset: parseNumber(servoPwmOffsetInput?.value, servo.pwm?.offset ?? 0)
    };
    servo.ttl = {
      address: parseNumber(servoTtlAddressInput?.value, servo.ttl?.address ?? 1),
      bus: servoTtlBusInput?.value || servo.ttl?.bus || 'UART0',
      speed: parseNumber(servoTtlSpeedInput?.value, servo.ttl?.speed ?? 300),
      angleMin: parseNumber(servoTtlAngleMinInput?.value, servo.ttl?.angleMin ?? 0),
      angleMax: parseNumber(servoTtlAngleMaxInput?.value, servo.ttl?.angleMax ?? 180),
      offset: parseNumber(servoTtlOffsetInput?.value, servo.ttl?.offset ?? 0)
    };
    selectedServoId = servo.id;
    clearServoIdError();
    sortServos();
    persistEventState();
    renderServoList();
    populateServoEditor(servo);
    renderServoUsage();
    renderJointList();
    const joint = getSelectedJoint();
    if (joint) {
      renderJointServoList(joint);
      if (selectedJointServoId) {
        setActiveJointServo(selectedJointServoId);
      }
      updateJointRangeSummary(joint);
    }
    updateRichJsonOutput();
  };

  const duplicateServo = () => {
    if (!selectedServoId) {
      return;
    }
    const source = eventState.servos.find((item) => item.id === selectedServoId);
    if (!source) {
      return;
    }
    const maxOrder = eventState.servos.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.servos.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      pwm: { ...source.pwm },
      ttl: { ...source.ttl }
    };
    eventState.servos.push(copy);
    selectedServoId = id;
    sortServos();
    persistEventState();
    renderServoList();
    populateServoEditor(copy);
    renderServoUsage();
    updateRichJsonOutput();
  };

  const deleteServo = () => {
    if (!selectedServoId) {
      return;
    }
    if (getServoUsageCount(selectedServoId) > 0) {
      window.alert(getTranslation('servo.delete.inUse'));
      return;
    }
    const label = selectedServoId;
    const confirmText = getTranslation('servo.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.servos.findIndex((item) => item.id === selectedServoId);
    if (index === -1) {
      return;
    }
    eventState.servos.splice(index, 1);
    selectedServoId = eventState.servos[index]?.id || eventState.servos[index - 1]?.id || null;
    persistEventState();
    renderServoList();
    if (selectedServoId) {
      selectServoById(selectedServoId);
    } else {
      clearServoEditor();
      renderServoUsage();
      updateRichJsonOutput();
    }
  };

  const initServoEditor = () => {
    if (!servoList || !servoAddButton) {
      return;
    }
    loadEventState();
    eventState.servos = normalizeServos(eventState.servos);
    ensureServoSelection();
    sortServos();
    renderServoList();
    if (selectedServoId) {
      selectServoById(selectedServoId);
    } else {
      clearServoEditor();
    }
    updateRichJsonOutput();

    servoList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !servoList.contains(item)) {
        return;
      }
      selectServoById(item.dataset.servoId);
    });

    servoAddButton.addEventListener('click', () => {
      addServo();
    });

    if (servoSaveButton) {
      servoSaveButton.addEventListener('click', () => {
        saveServo();
      });
    }

    if (servoDuplicateButton) {
      servoDuplicateButton.addEventListener('click', () => {
        duplicateServo();
      });
    }

    if (servoDeleteButton) {
      servoDeleteButton.addEventListener('click', () => {
        deleteServo();
      });
    }

    if (servoIdInput) {
      servoIdInput.addEventListener('input', () => {
        clearServoIdError();
      });
    }

    if (servoFilterInput) {
      servoFilterInput.addEventListener('input', () => {
        renderServoList();
      });
    }
  };

  const clearJointIdError = () => {
    if (jointIdError) {
      jointIdError.hidden = true;
    }
    if (jointIdInput) {
      jointIdInput.classList.remove('is-error');
    }
  };

  const showJointIdError = () => {
    if (jointIdError) {
      jointIdError.hidden = false;
    }
    if (jointIdInput) {
      jointIdInput.classList.add('is-error');
    }
  };

  const hasDuplicateJointId = (id, currentId) => {
    return eventState.joints.some((item) => item.id === id && item.id !== currentId);
  };

  const getSelectedJoint = () => {
    if (!selectedJointId) {
      return null;
    }
    return eventState.joints.find((item) => item.id === selectedJointId) || null;
  };

  const getJointServoDefaults = (servoId) => ({
    servoId,
    reverse: false,
    offset: 0,
    min: 0,
    max: 180
  });

  const computeJointRangeFromServos = (servos = []) => {
    if (!Array.isArray(servos) || servos.length === 0) {
      return { min: null, max: null };
    }
    let minValue = null;
    let maxValue = null;
    servos.forEach((servo) => {
      const min = Number(servo?.min ?? 0);
      const max = Number(servo?.max ?? 0);
      minValue = minValue === null ? min : Math.max(minValue, min);
      maxValue = maxValue === null ? max : Math.min(maxValue, max);
    });
    return {
      min: Number.isFinite(minValue) ? minValue : null,
      max: Number.isFinite(maxValue) ? maxValue : null
    };
  };

  const getServoAngleRange = (servoId) => {
    const servo = eventState.servos.find((item) => item.id === servoId);
    const rangeSource = servo?.type === 'ttl' ? servo?.ttl : servo?.pwm;
    const min = Number(rangeSource?.angleMin ?? 0);
    const max = Number(rangeSource?.angleMax ?? 180);
    return {
      min: Number.isFinite(min) ? min : 0,
      max: Number.isFinite(max) ? max : 180
    };
  };

  const updateJointServoRangeLimits = (servoId) => {
    if (!jointServoMinInput || !jointServoMaxInput) {
      return;
    }
    if (!servoId) {
      jointServoMinInput.removeAttribute('min');
      jointServoMinInput.removeAttribute('max');
      jointServoMaxInput.removeAttribute('min');
      jointServoMaxInput.removeAttribute('max');
      if (jointServoMinHint) {
        jointServoMinHint.textContent = '';
      }
      if (jointServoMaxHint) {
        jointServoMaxHint.textContent = '';
      }
      return;
    }
    const range = getServoAngleRange(servoId);
    jointServoMinInput.min = String(range.min);
    jointServoMinInput.max = String(range.max);
    jointServoMaxInput.min = String(range.min);
    jointServoMaxInput.max = String(range.max);
    const hint = getTranslation('joint.servo.rangeHint')
      .replace('{min}', String(range.min))
      .replace('{max}', String(range.max));
    if (jointServoMinHint) {
      jointServoMinHint.textContent = hint;
    }
    if (jointServoMaxHint) {
      jointServoMaxHint.textContent = hint;
    }
  };

  const getJointServoSelection = (joint) => {
    if (!joint) {
      return [];
    }
    if (jointServoList) {
      const selectedIds = [];
      jointServoList.querySelectorAll('input[type="checkbox"][data-servo-id]').forEach((input) => {
        if (input.checked) {
          selectedIds.push(input.dataset.servoId);
        }
      });
      return selectedIds;
    }
    return (joint.servos || []).map((servo) => servo.servoId);
  };

  const updateJointRangeSummary = (joint = getSelectedJoint()) => {
    if (!jointRangeMinInput || !jointRangeMaxInput) {
      return;
    }
    if (!joint) {
      jointRangeMinInput.value = '';
      jointRangeMaxInput.value = '';
      return;
    }
    const selectedIds = getJointServoSelection(joint);
    if (selectedIds.length === 0) {
      jointRangeMinInput.value = '';
      jointRangeMaxInput.value = '';
      return;
    }
    const currentMap = new Map((joint.servos || []).map((servo) => [servo.servoId, servo]));
    const entries = selectedIds.map((servoId) => currentMap.get(servoId) || getJointServoDefaults(servoId));
    const range = computeJointRangeFromServos(entries);
    jointRangeMinInput.value = Number.isFinite(range.min) ? range.min : '';
    jointRangeMaxInput.value = Number.isFinite(range.max) ? range.max : '';
  };

  const renderJointList = () => {
    if (!jointList) {
      return;
    }
    jointList.innerHTML = '';
    const filter = jointFilterInput?.value?.trim().toLowerCase() || '';
    eventState.joints.forEach((joint) => {
      if (filter && !joint.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.jointId = joint.id;
      if (joint.id === selectedJointId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = joint.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = getTranslation('joint.list.count').replace('{count}', String(joint.servos?.length ?? 0));
      item.appendChild(name);
      item.appendChild(chip);
      jointList.appendChild(item);
    });
  };

  const renderJointServoList = (joint) => {
    if (!jointServoList) {
      return;
    }
    jointServoList.innerHTML = '';
    const selectedIds = new Set((joint?.servos || []).map((servo) => servo.servoId));
    eventState.servos.forEach((servo) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      row.dataset.servoRow = '';
      row.dataset.servoId = servo.id;
      if (servo.id === selectedJointServoId) {
        row.classList.add('is-active');
      }

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.servoId = servo.id;
      checkbox.checked = selectedIds.has(servo.id);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mini-select';
      button.dataset.servoSelect = servo.id;
      button.textContent = servo.id;

      const meta = document.createElement('span');
      meta.className = 'mini-v';
      meta.textContent = servo.type === 'ttl' ? 'TTL' : 'PWM';

      row.appendChild(checkbox);
      row.appendChild(button);
      row.appendChild(meta);
      jointServoList.appendChild(row);
    });
    updateJointRangeSummary(joint);
  };

  const setActiveJointServo = (servoId) => {
    selectedJointServoId = servoId;
    if (jointServoTarget) {
      jointServoTarget.textContent = servoId || '—';
    }
    updateJointServoRangeLimits(servoId);
    if (jointServoList) {
      jointServoList.querySelectorAll('.mini-row').forEach((row) => {
        row.classList.toggle('is-active', row.dataset.servoId === servoId);
      });
    }
    const joint = getSelectedJoint();
    const entry = joint?.servos?.find((servo) => servo.servoId === servoId);
    const data = entry || getJointServoDefaults(servoId);
    if (jointServoDirectionInput) {
      jointServoDirectionInput.checked = !!data.reverse;
    }
    if (jointServoOffsetInput) {
      jointServoOffsetInput.value = data.offset ?? 0;
    }
    const range = servoId ? getServoAngleRange(servoId) : null;
    if (jointServoMinInput) {
      const value = data.min ?? 0;
      jointServoMinInput.value = range
        ? Math.min(Math.max(value, range.min), range.max)
        : value;
    }
    if (jointServoMaxInput) {
      const value = data.max ?? 180;
      jointServoMaxInput.value = range
        ? Math.min(Math.max(value, range.min), range.max)
        : value;
    }
  };

  const populateJointEditor = (joint) => {
    if (!joint || !jointIdInput || !jointOrderInput || !jointDescriptionInput) {
      return;
    }
    jointIdInput.value = joint.id ?? '';
    jointOrderInput.value = joint.displayOrder ?? '';
    jointDescriptionInput.value = joint.description ?? '';
    if (jointPreviewOffsetInput) {
      jointPreviewOffsetInput.value = joint.previewOffset ?? 0;
    }
    if (jointPreviewDirectionSelect) {
      jointPreviewDirectionSelect.value = joint.previewDirection || 'cw';
    }
    renderJointServoList(joint);
    const initialServoId = joint.servos?.[0]?.servoId || eventState.servos[0]?.id || null;
    setActiveJointServo(initialServoId);
    updateJointRangeSummary(joint);
    clearJointIdError();
  };

  const selectJointById = (jointId) => {
    const joint = eventState.joints.find((item) => item.id === jointId) || eventState.joints[0];
    if (!joint) {
      return;
    }
    selectedJointId = joint.id;
    renderJointList();
    populateJointEditor(joint);
    renderJointUsage();
    renderServoUsage();
  };

  const ensureJointSelection = () => {
    if (!selectedJointId && eventState.joints.length > 0) {
      selectedJointId = eventState.joints[0].id;
    }
  };

  const addJoint = () => {
    const base = 'joint_new';
    let index = eventState.joints.length + 1;
    let id = `${base}_${index}`;
    while (eventState.joints.some((joint) => joint.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const maxOrder = eventState.joints.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const servoId = eventState.servos[0]?.id;
    const joint = {
      id,
      displayOrder: maxOrder + 10,
      description: '',
      servos: servoId ? [getJointServoDefaults(servoId)] : []
    };
    eventState.joints.push(joint);
    selectedJointId = joint.id;
    sortJoints();
    persistEventState();
    renderJointList();
    populateJointEditor(joint);
    renderServoUsage();
    updateRichJsonOutput();
  };

  const clearJointEditor = () => {
    if (!jointIdInput || !jointOrderInput || !jointDescriptionInput) {
      return;
    }
    jointIdInput.value = '';
    jointOrderInput.value = '';
    jointDescriptionInput.value = '';
    if (jointPreviewOffsetInput) {
      jointPreviewOffsetInput.value = 0;
    }
    if (jointPreviewDirectionSelect) {
      jointPreviewDirectionSelect.value = 'cw';
    }
    if (jointRangeMinInput) {
      jointRangeMinInput.value = '';
    }
    if (jointRangeMaxInput) {
      jointRangeMaxInput.value = '';
    }
    if (jointServoList) {
      jointServoList.innerHTML = '';
    }
    setActiveJointServo(null);
    clearJointIdError();
  };

  const saveJoint = () => {
    if (!selectedJointId) {
      return;
    }
    const joint = eventState.joints.find((item) => item.id === selectedJointId);
    if (!joint) {
      return;
    }
    const prevId = joint.id;
    const nextId = (jointIdInput?.value || '').trim() || joint.id;
    if (hasDuplicateJointId(nextId, joint.id)) {
      showJointIdError();
      return;
    }
    if (prevId !== nextId) {
      renameJointReferences(prevId, nextId);
    }
    joint.id = nextId;
    const orderRaw = jointOrderInput?.value ?? '';
    joint.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, joint.displayOrder ?? null);
    joint.description = (jointDescriptionInput?.value || '').trim();
    joint.previewOffset = parseNumber(jointPreviewOffsetInput?.value, joint.previewOffset ?? 0);
    joint.previewDirection = jointPreviewDirectionSelect?.value === 'ccw' ? 'ccw' : 'cw';
    const selectedServoIds = [];
    if (jointServoList) {
      jointServoList.querySelectorAll('input[type="checkbox"][data-servo-id]').forEach((input) => {
        if (input.checked) {
          selectedServoIds.push(input.dataset.servoId);
        }
      });
    }
    const currentMap = new Map((joint.servos || []).map((servo) => [servo.servoId, servo]));
    joint.servos = selectedServoIds.map((servoId) => {
      const existing = currentMap.get(servoId);
      return existing ? { ...existing } : getJointServoDefaults(servoId);
    });
    const jointRange = computeJointRangeFromServos(joint.servos);
    joint.rangeMin = jointRange.min;
    joint.rangeMax = jointRange.max;
    selectedJointId = joint.id;
    clearJointIdError();
    sortJoints();
    persistEventState();
    renderJointList();
    populateJointEditor(joint);
    renderJointUsage();
    renderServoUsage();
    renderJointGroupList();
    const group = selectedJointGroupId
      ? eventState.jointGroups.find((item) => item.id === selectedJointGroupId)
      : null;
    if (group) {
      renderJointGroupJointList(group);
      if (selectedJointGroupJointId) {
        setActiveJointGroupJoint(selectedJointGroupJointId);
      }
    }
    renderPoseList();
    const pose = getSelectedPose();
    if (pose) {
      renderPoseAxisList(pose);
      const target = pose.jointTargets?.find((item) => item.jointId === selectedPoseAxisId);
      setActivePoseAxis(selectedPoseAxisId, target?.deg ?? 0);
      renderPoseControlAxisEasing();
    }
    const sequence = getSelectedSequence();
    if (sequence) {
      renderSequenceSteps(sequence);
      renderSequenceAxisEasing();
    }
    updateRichJsonOutput();
  };

  const duplicateJoint = () => {
    if (!selectedJointId) {
      return;
    }
    const source = eventState.joints.find((item) => item.id === selectedJointId);
    if (!source) {
      return;
    }
    const maxOrder = eventState.joints.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.joints.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      servos: (source.servos || []).map((servo) => ({ ...servo }))
    };
    eventState.joints.push(copy);
    selectedJointId = id;
    sortJoints();
    persistEventState();
    renderJointList();
    populateJointEditor(copy);
    renderJointUsage();
    renderServoUsage();
    updateRichJsonOutput();
  };

  const deleteJoint = () => {
    if (!selectedJointId) {
      return;
    }
    if (getJointUsageCount(selectedJointId) > 0) {
      window.alert(getTranslation('joint.delete.inUse'));
      return;
    }
    const label = selectedJointId;
    const confirmText = getTranslation('joint.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.joints.findIndex((item) => item.id === selectedJointId);
    if (index === -1) {
      return;
    }
    eventState.joints.splice(index, 1);
    selectedJointId = eventState.joints[index]?.id || eventState.joints[index - 1]?.id || null;
    persistEventState();
    renderJointList();
    if (selectedJointId) {
      selectJointById(selectedJointId);
    } else {
      clearJointEditor();
      updateRichJsonOutput();
    }
    renderJointUsage();
    renderServoUsage();
  };

  const saveJointServoSettings = () => {
    const joint = getSelectedJoint();
    if (!joint || !selectedJointServoId) {
      return;
    }
    let entry = joint.servos?.find((servo) => servo.servoId === selectedJointServoId);
    if (!entry) {
      entry = getJointServoDefaults(selectedJointServoId);
      joint.servos = joint.servos || [];
      joint.servos.push(entry);
    }
    entry.reverse = !!jointServoDirectionInput?.checked;
    entry.offset = parseNumber(jointServoOffsetInput?.value, entry.offset ?? 0);
    const range = getServoAngleRange(selectedJointServoId);
    const minValue = parseNumber(jointServoMinInput?.value, entry.min ?? 0);
    const maxValue = parseNumber(jointServoMaxInput?.value, entry.max ?? 180);
    entry.min = Math.min(Math.max(minValue, range.min), range.max);
    entry.max = Math.min(Math.max(maxValue, range.min), range.max);
    if (jointServoMinInput) {
      jointServoMinInput.value = entry.min;
    }
    if (jointServoMaxInput) {
      jointServoMaxInput.value = entry.max;
    }
    const jointRange = computeJointRangeFromServos(joint.servos);
    joint.rangeMin = jointRange.min;
    joint.rangeMax = jointRange.max;
    sortJoints();
    persistEventState();
    renderJointList();
    renderJointServoList(joint);
    setActiveJointServo(selectedJointServoId);
    updateJointRangeSummary(joint);
    renderServoUsage();
    updateRichJsonOutput();
  };

  const initJointEditor = () => {
    if (!jointList || !jointAddButton) {
      return;
    }
    loadEventState();
    eventState.joints = normalizeJoints(eventState.joints);
    ensureJointSelection();
    sortJoints();
    renderJointList();
    if (selectedJointId) {
      selectJointById(selectedJointId);
    } else {
      clearJointEditor();
    }
    updateRichJsonOutput();

    jointList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !jointList.contains(item)) {
        return;
      }
      selectJointById(item.dataset.jointId);
    });

    jointAddButton.addEventListener('click', () => {
      addJoint();
    });

    if (jointSaveButton) {
      jointSaveButton.addEventListener('click', () => {
        saveJoint();
      });
    }

    if (jointDuplicateButton) {
      jointDuplicateButton.addEventListener('click', () => {
        duplicateJoint();
      });
    }

    if (jointDeleteButton) {
      jointDeleteButton.addEventListener('click', () => {
        deleteJoint();
      });
    }

    if (jointIdInput) {
      jointIdInput.addEventListener('input', () => {
        clearJointIdError();
      });
    }

    if (jointFilterInput) {
      jointFilterInput.addEventListener('input', () => {
        renderJointList();
      });
    }

    if (jointServoList) {
      jointServoList.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-servo-select]');
        if (!button || !jointServoList.contains(button)) {
          return;
        }
        setActiveJointServo(button.dataset.servoSelect);
      });
      jointServoList.addEventListener('change', (event) => {
        const checkbox = event.target.closest('input[type="checkbox"][data-servo-id]');
        if (!checkbox || !jointServoList.contains(checkbox)) {
          return;
        }
        if (!checkbox.checked && checkbox.dataset.servoId === selectedJointServoId) {
          const fallback = jointServoList.querySelector('input[type="checkbox"][data-servo-id]:checked');
          setActiveJointServo(fallback?.dataset.servoId || eventState.servos[0]?.id || null);
        }
        updateJointRangeSummary();
      });
    }

    if (jointServoSaveButton) {
      jointServoSaveButton.addEventListener('click', () => {
        saveJointServoSettings();
      });
    }
  };

  const clearJointGroupIdError = () => {
    if (jointGroupIdError) {
      jointGroupIdError.hidden = true;
    }
    if (jointGroupIdInput) {
      jointGroupIdInput.classList.remove('is-error');
    }
  };

  const showJointGroupIdError = () => {
    if (jointGroupIdError) {
      jointGroupIdError.hidden = false;
    }
    if (jointGroupIdInput) {
      jointGroupIdInput.classList.add('is-error');
    }
  };

  const hasDuplicateJointGroupId = (id, currentId) => {
    return eventState.jointGroups.some((item) => item.id === id && item.id !== currentId);
  };

  const renderJointGroupList = () => {
    if (!jointGroupList) {
      return;
    }
    jointGroupList.innerHTML = '';
    const filter = jointGroupFilterInput?.value?.trim().toLowerCase() || '';
    eventState.jointGroups.forEach((group) => {
      if (filter && !group.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.groupId = group.id;
      if (group.id === selectedJointGroupId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = group.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = getTranslation('jointGroup.list.count').replace('{count}', String(group.jointIds?.length ?? 0));
      item.appendChild(name);
      item.appendChild(chip);
      jointGroupList.appendChild(item);
    });
  };

  const renderJointGroupJointList = (group) => {
    if (!jointGroupJointList) {
      return;
    }
    jointGroupJointList.innerHTML = '';
    const selectedIds = new Set(group?.jointIds || []);
    eventState.joints.forEach((joint) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      row.dataset.jointRow = '';
      row.dataset.jointId = joint.id;
      if (joint.id === selectedJointGroupJointId) {
        row.classList.add('is-active');
      }

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.jointId = joint.id;
      checkbox.checked = selectedIds.has(joint.id);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mini-select';
      button.dataset.jointSelect = joint.id;
      button.textContent = joint.id;

      const meta = document.createElement('span');
      meta.className = 'mini-v';
      meta.textContent = getTranslation('joint.list.count').replace('{count}', String(joint.servos?.length ?? 0));

      row.appendChild(checkbox);
      row.appendChild(button);
      row.appendChild(meta);
      jointGroupJointList.appendChild(row);
    });
  };

  const setActiveJointGroupJoint = (jointId) => {
    selectedJointGroupJointId = jointId;
    if (jointGroupJointList) {
      jointGroupJointList.querySelectorAll('.mini-row').forEach((row) => {
        row.classList.toggle('is-active', row.dataset.jointId === jointId);
      });
    }
    const joint = eventState.joints.find((item) => item.id === jointId);
    if (jointGroupSelectedId) {
      jointGroupSelectedId.textContent = joint?.id || '—';
    }
    if (jointGroupSelectedServos) {
      jointGroupSelectedServos.textContent = String(joint?.servos?.length ?? 0);
    }
  };

  const populateJointGroupEditor = (group) => {
    if (!group || !jointGroupIdInput || !jointGroupOrderInput || !jointGroupDescriptionInput) {
      return;
    }
    jointGroupIdInput.value = group.id ?? '';
    jointGroupOrderInput.value = group.displayOrder ?? '';
    jointGroupDescriptionInput.value = group.description ?? '';
    renderJointGroupJointList(group);
    const initialJointId = group.jointIds?.[0] || eventState.joints[0]?.id || null;
    setActiveJointGroupJoint(initialJointId);
    clearJointGroupIdError();
  };

  const selectJointGroupById = (groupId) => {
    const group = eventState.jointGroups.find((item) => item.id === groupId) || eventState.jointGroups[0];
    if (!group) {
      return;
    }
    selectedJointGroupId = group.id;
    renderJointGroupList();
    populateJointGroupEditor(group);
    renderJointGroupUsage();
    renderJointUsage();
  };

  const ensureJointGroupSelection = () => {
    if (!selectedJointGroupId && eventState.jointGroups.length > 0) {
      selectedJointGroupId = eventState.jointGroups[0].id;
    }
  };

  const addJointGroup = () => {
    const base = 'group_new';
    let index = eventState.jointGroups.length + 1;
    let id = `${base}_${index}`;
    while (eventState.jointGroups.some((group) => group.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const maxOrder = eventState.jointGroups.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const jointId = eventState.joints[0]?.id;
    const group = {
      id,
      displayOrder: maxOrder + 10,
      description: '',
      jointIds: jointId ? [jointId] : []
    };
    eventState.jointGroups.push(group);
    selectedJointGroupId = group.id;
    sortJointGroups();
    persistEventState();
    renderJointGroupList();
    populateJointGroupEditor(group);
    updateRichJsonOutput();
  };

  const clearJointGroupEditor = () => {
    if (!jointGroupIdInput || !jointGroupOrderInput || !jointGroupDescriptionInput) {
      return;
    }
    jointGroupIdInput.value = '';
    jointGroupOrderInput.value = '';
    jointGroupDescriptionInput.value = '';
    if (jointGroupJointList) {
      jointGroupJointList.innerHTML = '';
    }
    setActiveJointGroupJoint(null);
    clearJointGroupIdError();
  };

  const saveJointGroup = () => {
    if (!selectedJointGroupId) {
      return;
    }
    const group = eventState.jointGroups.find((item) => item.id === selectedJointGroupId);
    if (!group) {
      return;
    }
    const prevId = group.id;
    const nextId = (jointGroupIdInput?.value || '').trim() || group.id;
    if (hasDuplicateJointGroupId(nextId, group.id)) {
      showJointGroupIdError();
      return;
    }
    if (prevId !== nextId) {
      renameJointGroupReferences(prevId, nextId);
    }
    group.id = nextId;
    const orderRaw = jointGroupOrderInput?.value ?? '';
    group.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, group.displayOrder ?? null);
    group.description = (jointGroupDescriptionInput?.value || '').trim();
    const selectedJointIds = [];
    if (jointGroupJointList) {
      jointGroupJointList.querySelectorAll('input[type="checkbox"][data-joint-id]').forEach((input) => {
        if (input.checked) {
          selectedJointIds.push(input.dataset.jointId);
        }
      });
    }
    group.jointIds = selectedJointIds;
    selectedJointGroupId = group.id;
    clearJointGroupIdError();
    sortJointGroups();
    persistEventState();
    renderJointGroupList();
    populateJointGroupEditor(group);
    renderJointGroupUsage();
    renderJointUsage();
    renderPoseList();
    const pose = getSelectedPose();
    if (pose) {
      updatePoseGroupOptions(pose.groupId);
      renderPoseAxisList(pose);
      renderPoseControlAxisEasing();
    }
    updateRichJsonOutput();
  };

  const duplicateJointGroup = () => {
    if (!selectedJointGroupId) {
      return;
    }
    const source = eventState.jointGroups.find((item) => item.id === selectedJointGroupId);
    if (!source) {
      return;
    }
    const maxOrder = eventState.jointGroups.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.jointGroups.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      jointIds: [...(source.jointIds || [])]
    };
    eventState.jointGroups.push(copy);
    selectedJointGroupId = id;
    sortJointGroups();
    persistEventState();
    renderJointGroupList();
    populateJointGroupEditor(copy);
    renderJointGroupUsage();
    renderJointUsage();
    updateRichJsonOutput();
  };

  const deleteJointGroup = () => {
    if (!selectedJointGroupId) {
      return;
    }
    if (getJointGroupUsageCount(selectedJointGroupId) > 0) {
      window.alert(getTranslation('jointGroup.delete.inUse'));
      return;
    }
    const label = selectedJointGroupId;
    const confirmText = getTranslation('jointGroup.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.jointGroups.findIndex((item) => item.id === selectedJointGroupId);
    if (index === -1) {
      return;
    }
    eventState.jointGroups.splice(index, 1);
    selectedJointGroupId = eventState.jointGroups[index]?.id || eventState.jointGroups[index - 1]?.id || null;
    persistEventState();
    renderJointGroupList();
    if (selectedJointGroupId) {
      selectJointGroupById(selectedJointGroupId);
    } else {
      clearJointGroupEditor();
      updateRichJsonOutput();
    }
    renderJointGroupUsage();
    renderJointUsage();
  };

  const initJointGroupEditor = () => {
    if (!jointGroupList || !jointGroupAddButton) {
      return;
    }
    loadEventState();
    eventState.jointGroups = normalizeJointGroups(eventState.jointGroups);
    ensureJointGroupSelection();
    sortJointGroups();
    renderJointGroupList();
    if (selectedJointGroupId) {
      selectJointGroupById(selectedJointGroupId);
    } else {
      clearJointGroupEditor();
    }
    updateRichJsonOutput();

    jointGroupList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !jointGroupList.contains(item)) {
        return;
      }
      selectJointGroupById(item.dataset.groupId);
    });

    jointGroupAddButton.addEventListener('click', () => {
      addJointGroup();
    });

    if (jointGroupSaveButton) {
      jointGroupSaveButton.addEventListener('click', () => {
        saveJointGroup();
      });
    }

    if (jointGroupDuplicateButton) {
      jointGroupDuplicateButton.addEventListener('click', () => {
        duplicateJointGroup();
      });
    }

    if (jointGroupDeleteButton) {
      jointGroupDeleteButton.addEventListener('click', () => {
        deleteJointGroup();
      });
    }

    if (jointGroupIdInput) {
      jointGroupIdInput.addEventListener('input', () => {
        clearJointGroupIdError();
      });
    }

    if (jointGroupFilterInput) {
      jointGroupFilterInput.addEventListener('input', () => {
        renderJointGroupList();
      });
    }

    if (jointGroupJointList) {
      jointGroupJointList.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-joint-select]');
        if (!button || !jointGroupJointList.contains(button)) {
          return;
        }
        setActiveJointGroupJoint(button.dataset.jointSelect);
      });
      jointGroupJointList.addEventListener('change', (event) => {
        const checkbox = event.target.closest('input[type="checkbox"][data-joint-id]');
        if (!checkbox || !jointGroupJointList.contains(checkbox)) {
          return;
        }
        if (!checkbox.checked && checkbox.dataset.jointId === selectedJointGroupJointId) {
          const fallback = jointGroupJointList.querySelector('input[type="checkbox"][data-joint-id]:checked');
          setActiveJointGroupJoint(fallback?.dataset.jointId || eventState.joints[0]?.id || null);
        }
      });
    }
  };

  const clearPoseIdError = () => {
    if (poseIdError) {
      poseIdError.hidden = true;
    }
    if (poseIdInput) {
      poseIdInput.classList.remove('is-error');
    }
  };

  const showPoseIdError = () => {
    if (poseIdError) {
      poseIdError.hidden = false;
    }
    if (poseIdInput) {
      poseIdInput.classList.add('is-error');
    }
  };

  const hasDuplicatePoseId = (id, currentId) => {
    return eventState.poses.some((item) => item.id === id && item.id !== currentId);
  };

  const getSelectedPose = () => {
    if (!selectedPoseId) {
      return null;
    }
    return eventState.poses.find((item) => item.id === selectedPoseId) || null;
  };

  const ensurePoseSelection = () => {
    if (!selectedPoseId && eventState.poses.length > 0) {
      selectedPoseId = eventState.poses[0].id;
    }
  };

  const renderPoseList = () => {
    if (!poseList) {
      return;
    }
    poseList.innerHTML = '';
    const filter = poseFilterInput?.value?.trim().toLowerCase() || '';
    eventState.poses.forEach((pose) => {
      if (filter && !pose.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.poseId = pose.id;
      if (pose.id === selectedPoseId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = pose.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = pose.groupId && pose.groupId !== 'all'
        ? pose.groupId
        : getTranslation('pose.editor.group.all');
      item.appendChild(name);
      item.appendChild(chip);
      poseList.appendChild(item);
    });
  };

  const updatePoseGroupOptions = (selected) => {
    if (!poseGroupSelect) {
      return;
    }
    poseGroupSelect.innerHTML = '';
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = getTranslation('pose.editor.group.all');
    poseGroupSelect.appendChild(allOption);
    eventState.jointGroups.forEach((group) => {
      const option = document.createElement('option');
      option.value = group.id;
      option.textContent = group.id;
      poseGroupSelect.appendChild(option);
    });
    poseGroupSelect.value = selected && selected !== 'all' ? selected : 'all';
  };

  const getPoseJointIds = (pose) => {
    if (!pose || !pose.groupId || pose.groupId === 'all') {
      return eventState.joints.map((joint) => joint.id);
    }
    const group = eventState.jointGroups.find((item) => item.id === pose.groupId);
    if (group?.jointIds?.length) {
      return group.jointIds;
    }
    return eventState.joints.map((joint) => joint.id);
  };

  const renderPoseAxisList = (pose) => {
    if (!poseAxisList) {
      return;
    }
    poseAxisList.innerHTML = '';
    const jointIds = getPoseJointIds(pose);
    const targetMap = new Map((pose?.jointTargets || []).map((target) => [target.jointId, target.deg]));
    jointIds.forEach((jointId) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      row.dataset.poseAxisRow = '';
      row.dataset.poseAxis = jointId;
      if (jointId === selectedPoseAxisId) {
        row.classList.add('is-active');
      }
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.dataset.poseAxis = jointId;
      checkbox.checked = targetMap.has(jointId);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'mini-select';
      button.dataset.poseAxis = jointId;
      button.textContent = jointId;

      const value = document.createElement('span');
      value.className = 'mini-v';
      const angle = targetMap.has(jointId) ? targetMap.get(jointId) : 0;
      value.textContent = `${angle}°`;

      row.appendChild(checkbox);
      row.appendChild(button);
      row.appendChild(value);
      poseAxisList.appendChild(row);
    });
  };

  const updatePoseAxisValue = (pose, axisId, angle) => {
    if (!pose) {
      return;
    }
    const target = pose.jointTargets.find((item) => item.jointId === axisId);
    if (target) {
      target.deg = angle;
    } else {
      pose.jointTargets.push({ jointId: axisId, deg: angle });
    }
  };

  const getPoseAxisRange = (axisId) => {
    const joint = eventState.joints.find((item) => item.id === axisId);
    const min = Number.isFinite(joint?.rangeMin) ? joint.rangeMin : 0;
    const max = Number.isFinite(joint?.rangeMax) ? joint.rangeMax : 360;
    if (min > max) {
      return { min: 0, max: 360 };
    }
    return { min, max };
  };

  const getPoseAxisPreview = (axisId, angle) => {
    const joint = eventState.joints.find((item) => item.id === axisId);
    const offset = Number(joint?.previewOffset || 0);
    const direction = joint?.previewDirection === 'ccw' ? -1 : 1;
    const displayAngle = (offset + Number(angle || 0) * direction + 3600) % 360;
    return Number.isFinite(displayAngle) ? displayAngle : 0;
  };

  const setActivePoseAxis = (axisId, angle, pose = getSelectedPose()) => {
    selectedPoseAxisId = axisId;
    if (poseAxisTarget) {
      poseAxisTarget.textContent = axisId || '—';
    }
    if (poseAxisRange && poseAxisInput) {
      const range = axisId ? getPoseAxisRange(axisId) : { min: 0, max: 360 };
      poseAxisRange.min = String(range.min);
      poseAxisRange.max = String(range.max);
      poseAxisInput.min = String(range.min);
      poseAxisInput.max = String(range.max);
      const clamped = Math.min(Math.max(Number(angle ?? 0), range.min), range.max);
      poseAxisRange.value = String(clamped);
      poseAxisInput.value = String(clamped);
      if (pose && axisId) {
        updatePoseAxisValue(pose, axisId, clamped);
      }
      if (poseAxisList) {
        const row = poseAxisList.querySelector(`[data-pose-axis="${axisId}"]`);
        const label = row?.querySelector('.mini-v');
        if (label) {
          label.textContent = `${clamped}°`;
        }
      }
    }
    if (poseAxisRangeNote) {
      const range = axisId ? getPoseAxisRange(axisId) : { min: 0, max: 360 };
      poseAxisRangeNote.textContent = interpolate(getTranslation('pose.axis.rangeNote'), {
        min: range.min,
        max: range.max
      });
    }
    if (poseAxisList) {
      poseAxisList.querySelectorAll('.mini-row').forEach((row) => {
        row.classList.toggle('is-active', row.dataset.poseAxis === axisId);
      });
    }
    if (poseAxisNeedle) {
      const displayAngle = axisId ? getPoseAxisPreview(axisId, angle) : (angle ?? 0);
      poseAxisNeedle.style.transform = `translateX(-50%) rotate(${displayAngle}deg)`;
    }
  };

  const updatePoseTriggerOptions = () => {
    const selects = [poseTriggerStart, poseTriggerReached, poseTriggerEnd, poseTriggerOverrun].filter(Boolean);
    selects.forEach((select) => {
      const selected = select.value || 'none';
      select.innerHTML = '';
      const none = document.createElement('option');
      none.value = 'none';
      none.textContent = getTranslation('pose.triggers.event.none');
      select.appendChild(none);
      eventState.events.forEach((event) => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.number} - ${event.id}`;
        select.appendChild(option);
      });
      select.value = selected;
    });
  };

  const updatePoseControlOptions = () => {
    if (poseControlStart) {
      const selected = poseControlStart.value;
      poseControlStart.innerHTML = '';
      eventState.poses.forEach((pose) => {
        const option = document.createElement('option');
        option.value = pose.id;
        option.textContent = pose.id;
        poseControlStart.appendChild(option);
      });
      poseControlStart.value = selected || eventState.poses[0]?.id || '';
    }
    if (poseControlEasing) {
      const selected = poseControlEasing.value;
      poseControlEasing.innerHTML = '';
      eventState.easings.forEach((easing) => {
        const option = document.createElement('option');
        option.value = easing.id;
        option.textContent = easing.id;
        poseControlEasing.appendChild(option);
      });
      poseControlEasing.value = selected || eventState.easings[0]?.id || '';
    }
  };

  const renderPoseControlAxisEasing = () => {
    if (!poseControlAxisEasing) {
      return;
    }
    poseControlAxisEasing.innerHTML = '';
    const pose = getSelectedPose();
    const jointIds = getPoseJointIds(pose);
    jointIds.forEach((jointId) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = jointId;
      const select = document.createElement('select');
      select.className = 'mini-select';
      const base = document.createElement('option');
      base.value = 'base';
      base.textContent = getTranslation('pose.control.axisDefault');
      select.appendChild(base);
      eventState.easings.forEach((easing) => {
        const option = document.createElement('option');
        option.value = easing.id;
        option.textContent = easing.id;
        select.appendChild(option);
      });
      row.appendChild(label);
      row.appendChild(select);
      poseControlAxisEasing.appendChild(row);
    });
  };

  const populatePoseEditor = (pose) => {
    if (!pose || !poseIdInput || !poseOrderInput || !poseDescriptionInput) {
      return;
    }
    poseIdInput.value = pose.id ?? '';
    poseOrderInput.value = pose.displayOrder ?? '';
    poseDescriptionInput.value = pose.description ?? '';
    updatePoseGroupOptions(pose.groupId);
    renderPoseAxisList(pose);
    updatePoseTriggerOptions();
    if (poseTriggerStart) {
      poseTriggerStart.value = pose.triggers?.start || 'none';
    }
    if (poseTriggerReached) {
      poseTriggerReached.value = pose.triggers?.reached || 'none';
    }
    if (poseTriggerEnd) {
      poseTriggerEnd.value = pose.triggers?.end || 'none';
    }
    if (poseTriggerOverrun) {
      poseTriggerOverrun.value = pose.triggers?.overrun || 'none';
    }
    const initialAxis = pose.jointTargets?.[0]?.jointId || getPoseJointIds(pose)[0] || null;
    const initialAngle = pose.jointTargets?.find((target) => target.jointId === initialAxis)?.deg ?? 0;
    setActivePoseAxis(initialAxis, initialAngle);
    updatePoseControlOptions();
    renderPoseControlAxisEasing();
    clearPoseIdError();
  };

  const selectPoseById = (poseId) => {
    const pose = eventState.poses.find((item) => item.id === poseId) || eventState.poses[0];
    if (!pose) {
      return;
    }
    selectedPoseId = pose.id;
    renderPoseList();
    populatePoseEditor(pose);
    renderPoseUsage();
    renderJointGroupUsage();
  };

  const addPose = () => {
    const base = 'pose_new';
    let index = eventState.poses.length + 1;
    let id = `${base}_${index}`;
    while (eventState.poses.some((pose) => pose.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const maxOrder = eventState.poses.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const jointId = eventState.joints[0]?.id;
    const pose = {
      id,
      displayOrder: maxOrder + 10,
      description: '',
      groupId: 'all',
      jointTargets: jointId ? [{ jointId, deg: 0 }] : [],
      triggers: { start: null, reached: null, end: null, overrun: null }
    };
    eventState.poses.push(pose);
    selectedPoseId = pose.id;
    sortPoses();
    persistEventState();
    renderPoseList();
    populatePoseEditor(pose);
    updatePoseControlOptions();
    updateSequenceTargetOptions();
    updateSequenceControlOptions();
    renderSequenceAxisEasing();
    renderEventUsage();
    renderJointGroupUsage();
    updateRichJsonOutput();
  };

  const clearPoseEditor = () => {
    if (!poseIdInput || !poseOrderInput || !poseDescriptionInput) {
      return;
    }
    poseIdInput.value = '';
    poseOrderInput.value = '';
    poseDescriptionInput.value = '';
    if (poseGroupSelect) {
      poseGroupSelect.innerHTML = '';
    }
    if (poseAxisList) {
      poseAxisList.innerHTML = '';
    }
    clearPoseIdError();
  };

  const savePose = () => {
    if (!selectedPoseId) {
      return;
    }
    const pose = eventState.poses.find((item) => item.id === selectedPoseId);
    if (!pose) {
      return;
    }
    const prevId = pose.id;
    const nextId = (poseIdInput?.value || '').trim() || pose.id;
    if (hasDuplicatePoseId(nextId, pose.id)) {
      showPoseIdError();
      return;
    }
    if (prevId !== nextId) {
      renamePoseReferences(prevId, nextId);
    }
    pose.id = nextId;
    const orderRaw = poseOrderInput?.value ?? '';
    pose.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, pose.displayOrder ?? null);
    pose.description = (poseDescriptionInput?.value || '').trim();
    pose.groupId = poseGroupSelect?.value || 'all';
    const selectedAxisIds = [];
    if (poseAxisList) {
      poseAxisList.querySelectorAll('input[type="checkbox"][data-pose-axis]').forEach((input) => {
        if (input.checked) {
          selectedAxisIds.push(input.dataset.poseAxis);
        }
      });
    }
    if (selectedAxisIds.length === 0) {
      window.alert(getTranslation('pose.form.axes.required'));
      return;
    }
    const currentMap = new Map((pose.jointTargets || []).map((target) => [target.jointId, target]));
    pose.jointTargets = selectedAxisIds.map((axisId) => {
      const existing = currentMap.get(axisId);
      return existing ? { ...existing } : { jointId: axisId, deg: 0 };
    });
    pose.triggers = {
      start: poseTriggerStart?.value === 'none' ? null : poseTriggerStart?.value || null,
      reached: poseTriggerReached?.value === 'none' ? null : poseTriggerReached?.value || null,
      end: poseTriggerEnd?.value === 'none' ? null : poseTriggerEnd?.value || null,
      overrun: poseTriggerOverrun?.value === 'none' ? null : poseTriggerOverrun?.value || null
    };
    selectedPoseId = pose.id;
    clearPoseIdError();
    sortPoses();
    persistEventState();
    renderPoseList();
    populatePoseEditor(pose);
    updatePoseControlOptions();
    updateSequenceTargetOptions();
    updateSequenceControlOptions();
    renderSequenceAxisEasing();
    renderEventUsage();
    const sequence = getSelectedSequence();
    if (sequence) {
      renderSequenceSteps(sequence);
    }
    renderJointGroupUsage();
    updateRichJsonOutput();
  };

  const duplicatePose = () => {
    if (!selectedPoseId) {
      return;
    }
    const source = eventState.poses.find((item) => item.id === selectedPoseId);
    if (!source) {
      return;
    }
    const maxOrder = eventState.poses.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.poses.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      jointTargets: (source.jointTargets || []).map((target) => ({ ...target })),
      triggers: { ...source.triggers }
    };
    eventState.poses.push(copy);
    selectedPoseId = id;
    sortPoses();
    persistEventState();
    renderPoseList();
    populatePoseEditor(copy);
    updatePoseControlOptions();
    updateSequenceTargetOptions();
    updateSequenceControlOptions();
    renderSequenceAxisEasing();
    renderEventUsage();
    renderJointGroupUsage();
    updateRichJsonOutput();
  };

  const deletePose = () => {
    if (!selectedPoseId) {
      return;
    }
    if (getPoseUsageCount(selectedPoseId) > 0) {
      window.alert(getTranslation('pose.delete.inUse'));
      return;
    }
    const label = selectedPoseId;
    const confirmText = getTranslation('pose.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.poses.findIndex((item) => item.id === selectedPoseId);
    if (index === -1) {
      return;
    }
    eventState.poses.splice(index, 1);
    selectedPoseId = eventState.poses[index]?.id || eventState.poses[index - 1]?.id || null;
    persistEventState();
    renderPoseList();
    if (selectedPoseId) {
      selectPoseById(selectedPoseId);
    } else {
      clearPoseEditor();
      updateRichJsonOutput();
    }
    updatePoseControlOptions();
    updateSequenceTargetOptions();
    updateSequenceControlOptions();
    renderSequenceAxisEasing();
    renderEventUsage();
    renderPoseUsage();
    renderJointGroupUsage();
  };

  const initPoseEditor = () => {
    if (!poseList || !poseAddButton) {
      return;
    }
    loadEventState();
    eventState.poses = normalizePoses(eventState.poses);
    ensurePoseSelection();
    sortPoses();
    renderPoseList();
    if (selectedPoseId) {
      selectPoseById(selectedPoseId);
    } else {
      clearPoseEditor();
    }
    updateRichJsonOutput();

    poseList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !poseList.contains(item)) {
        return;
      }
      selectPoseById(item.dataset.poseId);
    });

    poseAddButton.addEventListener('click', () => {
      addPose();
    });

    if (poseSaveButton) {
      poseSaveButton.addEventListener('click', () => {
        savePose();
      });
    }

    if (poseDuplicateButton) {
      poseDuplicateButton.addEventListener('click', () => {
        duplicatePose();
      });
    }

    if (poseDeleteButton) {
      poseDeleteButton.addEventListener('click', () => {
        deletePose();
      });
    }

    if (poseIdInput) {
      poseIdInput.addEventListener('input', () => {
        clearPoseIdError();
      });
    }

    if (poseFilterInput) {
      poseFilterInput.addEventListener('input', () => {
        renderPoseList();
      });
    }

    if (poseGroupSelect) {
      poseGroupSelect.addEventListener('change', () => {
        const pose = getSelectedPose();
        if (!pose) {
          return;
        }
        pose.groupId = poseGroupSelect.value;
        renderPoseAxisList(pose);
        const jointIds = getPoseJointIds(pose);
        setActivePoseAxis(jointIds[0] || null, 0);
        renderPoseControlAxisEasing();
      });
    }

    if (poseAxisList) {
      poseAxisList.addEventListener('click', (event) => {
        const button = event.target.closest('button[data-pose-axis]');
        if (!button || !poseAxisList.contains(button)) {
          return;
        }
        const pose = getSelectedPose();
        if (!pose) {
          return;
        }
        const axisId = button.dataset.poseAxis;
        const target = pose.jointTargets.find((item) => item.jointId === axisId);
        const angle = target?.deg ?? 0;
        setActivePoseAxis(axisId, angle);
      });
      poseAxisList.addEventListener('change', (event) => {
        const checkbox = event.target.closest('input[type="checkbox"][data-pose-axis]');
        if (!checkbox || !poseAxisList.contains(checkbox)) {
          return;
        }
        if (!checkbox.checked && checkbox.dataset.poseAxis === selectedPoseAxisId) {
          const fallback = poseAxisList.querySelector('input[type="checkbox"][data-pose-axis]:checked');
          setActivePoseAxis(fallback?.dataset.poseAxis || null, 0);
        }
      });
    }

    if (poseAxisRange && poseAxisInput) {
      const onAngleChange = (value) => {
        const pose = getSelectedPose();
        if (!pose || !selectedPoseAxisId) {
          return;
        }
        const range = getPoseAxisRange(selectedPoseAxisId);
        const angle = Math.min(Math.max(Number(value || 0), range.min), range.max);
        poseAxisRange.value = String(angle);
        poseAxisInput.value = String(angle);
        updatePoseAxisValue(pose, selectedPoseAxisId, angle);
        const row = poseAxisList?.querySelector(`[data-pose-axis="${selectedPoseAxisId}"]`);
        if (row) {
          const label = row.querySelector('.mini-v');
          if (label) {
            label.textContent = `${angle}°`;
          }
        }
        if (poseAxisNeedle) {
          poseAxisNeedle.style.transform = `translateX(-50%) rotate(${getPoseAxisPreview(selectedPoseAxisId, angle)}deg)`;
        }
      };
      poseAxisRange.addEventListener('input', () => onAngleChange(poseAxisRange.value));
      poseAxisInput.addEventListener('input', () => onAngleChange(poseAxisInput.value));
    }
  };

  const clearSequenceIdError = () => {
    if (sequenceIdError) {
      sequenceIdError.hidden = true;
    }
    if (sequenceIdInput) {
      sequenceIdInput.classList.remove('is-error');
    }
  };

  const showSequenceIdError = () => {
    if (sequenceIdError) {
      sequenceIdError.hidden = false;
    }
    if (sequenceIdInput) {
      sequenceIdInput.classList.add('is-error');
    }
  };

  const hasDuplicateSequenceId = (id, currentId) => {
    return eventState.sequences.some((item) => item.id === id && item.id !== currentId);
  };

  const getSelectedSequence = () => {
    if (!selectedSequenceId) {
      return null;
    }
    return eventState.sequences.find((item) => item.id === selectedSequenceId) || null;
  };

  const ensureSequenceSelection = () => {
    if (!selectedSequenceId && eventState.sequences.length > 0) {
      selectedSequenceId = eventState.sequences[0].id;
    }
  };

  const renderSequenceList = () => {
    if (!sequenceList) {
      return;
    }
    sequenceList.innerHTML = '';
    const filter = sequenceFilterInput?.value?.trim().toLowerCase() || '';
    eventState.sequences.forEach((sequence) => {
      if (filter && !sequence.id.toLowerCase().includes(filter)) {
        return;
      }
      const item = document.createElement('li');
      item.className = 'list-item';
      item.dataset.sequenceId = sequence.id;
      if (sequence.id === selectedSequenceId) {
        item.classList.add('is-active');
      }
      const name = document.createElement('span');
      name.textContent = sequence.id;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = getTranslation('sequence.list.count').replace('{count}', String(sequence.steps?.length ?? 0));
      item.appendChild(name);
      item.appendChild(chip);
      sequenceList.appendChild(item);
    });
  };

  const updateSequenceTriggerOptions = () => {
    const selects = [sequenceTriggerStart, sequenceTriggerEnd].filter(Boolean);
    selects.forEach((select) => {
      const selected = select.value || 'none';
      select.innerHTML = '';
      const none = document.createElement('option');
      none.value = 'none';
      none.textContent = getTranslation('sequence.triggers.event.none');
      select.appendChild(none);
      eventState.events.forEach((event) => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.number} - ${event.id}`;
        select.appendChild(option);
      });
      select.value = selected;
    });
  };

  const toggleSequenceTargetGroups = (type) => {
    document.querySelectorAll('[data-sequence-target-group="pose"]').forEach((group) => {
      const isPose = type === 'pose';
      group.hidden = !isPose;
      group.setAttribute('aria-hidden', String(!isPose));
      group.style.display = isPose ? '' : 'none';
    });
  };

  const updateSequenceTargetOptions = () => {
    if (!sequenceTargetType || !sequenceTargetId) {
      return;
    }
    const type = sequenceTargetType.value || 'pose';
    toggleSequenceTargetGroups(type);
    const selected = sequenceTargetId.value;
    sequenceTargetId.innerHTML = '';
    if (type === 'pose') {
      eventState.poses.forEach((pose) => {
        const option = document.createElement('option');
        option.value = pose.id;
        option.textContent = pose.id;
        sequenceTargetId.appendChild(option);
      });
    } else {
      const currentId = selectedSequenceId;
      eventState.sequences.forEach((sequence) => {
        if (sequence.id === currentId) {
          return;
        }
        if (sequence.steps?.some((step) => step.type === 'sequence')) {
          return;
        }
        const option = document.createElement('option');
        option.value = sequence.id;
        option.textContent = sequence.id;
        sequenceTargetId.appendChild(option);
      });
    }
    sequenceTargetId.value = selected || sequenceTargetId.options[0]?.value || '';
  };

  const updateSequenceEasingOptions = () => {
    if (!sequencePoseEasing) {
      return;
    }
    const selected = sequencePoseEasing.value;
    sequencePoseEasing.innerHTML = '';
    eventState.easings.forEach((easing) => {
      const option = document.createElement('option');
      option.value = easing.id;
      option.textContent = easing.id;
      sequencePoseEasing.appendChild(option);
    });
    sequencePoseEasing.value = selected || eventState.easings[0]?.id || '';
  };

  const getSequenceStepAxes = (step) => {
    if (!step || step.type !== 'pose') {
      return [];
    }
    const pose = eventState.poses.find((item) => item.id === step.targetId);
    return pose?.jointTargets?.map((target) => target.jointId) || [];
  };

  const renderSequenceAxisEasing = () => {
    if (!sequenceAxisEasing) {
      return;
    }
    const sequence = getSelectedSequence();
    const step = sequence?.steps?.[selectedSequenceStepIndex ?? 0];
    sequenceAxisEasing.innerHTML = '';
    if (!sequence || !step || step.type !== 'pose') {
      return;
    }
    const axes = getSequenceStepAxes(step);
    axes.forEach((axisId) => {
      const row = document.createElement('div');
      row.className = 'mini-row';
      const label = document.createElement('span');
      label.className = 'mini-k';
      label.textContent = axisId;
      const select = document.createElement('select');
      select.className = 'mini-select';
      select.dataset.sequenceAxis = axisId;
      const base = document.createElement('option');
      base.value = 'base';
      base.textContent = getTranslation('sequence.pose.axisDefault');
      select.appendChild(base);
      eventState.easings.forEach((easing) => {
        const option = document.createElement('option');
        option.value = easing.id;
        option.textContent = easing.id;
        select.appendChild(option);
      });
      const current = step.axisEasing?.[axisId] || 'base';
      select.value = current;
      row.appendChild(label);
      row.appendChild(select);
      sequenceAxisEasing.appendChild(row);
    });
  };

  const updateSequenceControlOptions = () => {
    if (!sequenceControlStart) {
      return;
    }
    const selected = sequenceControlStart.value;
    sequenceControlStart.innerHTML = '';
    eventState.poses.forEach((pose) => {
      const option = document.createElement('option');
      option.value = pose.id;
      option.textContent = pose.id;
      sequenceControlStart.appendChild(option);
    });
    sequenceControlStart.value = selected || eventState.poses[0]?.id || '';
  };

  const renderSequenceSteps = (sequence) => {
    if (!sequenceStepList) {
      return;
    }
    sequenceStepList.innerHTML = '';
    (sequence?.steps || []).forEach((step, index) => {
      const item = document.createElement('li');
      if (index === selectedSequenceStepIndex) {
        item.classList.add('is-active');
      }
      item.dataset.stepIndex = String(index);
      const title = document.createElement('span');
      title.className = 'step-title';
      if (step.type === 'sequence') {
        title.textContent = `${index + 1}: ${step.targetId || 'sequence'}`;
      } else {
        title.textContent = `${index + 1}: ${step.targetId || 'pose'}`;
      }
      const chip = document.createElement('span');
      chip.className = 'chip';
      if (step.type === 'sequence') {
        chip.textContent = getTranslation('sequence.steps.inline');
      } else {
        const easing = step.easingId || 'e_linear';
        const move = step.moveMs ?? 0;
        chip.textContent = `${move}ms · ${easing}`;
      }
      item.appendChild(title);
      item.appendChild(chip);
      sequenceStepList.appendChild(item);
    });
  };

  const setActiveSequenceStep = (index) => {
    const sequence = getSelectedSequence();
    if (!sequence || !sequence.steps?.length) {
      selectedSequenceStepIndex = null;
      renderSequenceSteps(sequence);
      return;
    }
    const safeIndex = Math.max(0, Math.min(index, sequence.steps.length - 1));
    selectedSequenceStepIndex = safeIndex;
    renderSequenceSteps(sequence);
    populateSequenceTargetEditor();
  };

  const populateSequenceTargetEditor = () => {
    const sequence = getSelectedSequence();
    const step = sequence?.steps?.[selectedSequenceStepIndex ?? 0];
    if (!sequence || !step || !sequenceTargetType || !sequenceTargetId) {
      return;
    }
    sequenceTargetType.value = step.type || 'pose';
    updateSequenceTargetOptions();
    sequenceTargetId.value = step.targetId || sequenceTargetId.options[0]?.value || '';
    if (step.type === 'pose') {
      if (sequencePoseDuration) {
        sequencePoseDuration.value = step.moveMs ?? 500;
      }
      updateSequenceEasingOptions();
      if (sequencePoseEasing) {
        sequencePoseEasing.value = step.easingId || eventState.easings[0]?.id || 'e_linear';
      }
      renderSequenceAxisEasing();
    }
  };

  const populateSequenceEditor = (sequence) => {
    if (!sequence || !sequenceIdInput || !sequenceOrderInput || !sequenceDescriptionInput) {
      return;
    }
    sequenceIdInput.value = sequence.id ?? '';
    sequenceOrderInput.value = sequence.displayOrder ?? '';
    sequenceDescriptionInput.value = sequence.description ?? '';
    updateSequenceTriggerOptions();
    if (sequenceTriggerStart) {
      sequenceTriggerStart.value = sequence.triggers?.start || 'none';
    }
    if (sequenceTriggerEnd) {
      sequenceTriggerEnd.value = sequence.triggers?.end || 'none';
    }
    updateSequenceTargetOptions();
    updateSequenceEasingOptions();
    updateSequenceControlOptions();
    const stepIndex = sequence.steps?.length ? 0 : null;
    selectedSequenceStepIndex = stepIndex;
    renderSequenceSteps(sequence);
    if (stepIndex !== null) {
      populateSequenceTargetEditor();
    }
    clearSequenceIdError();
  };

  const selectSequenceById = (sequenceId) => {
    const sequence = eventState.sequences.find((item) => item.id === sequenceId) || eventState.sequences[0];
    if (!sequence) {
      return;
    }
    selectedSequenceId = sequence.id;
    renderSequenceList();
    populateSequenceEditor(sequence);
    renderSequenceUsage();
  };

  const addSequence = () => {
    const base = 'seq_new';
    let index = eventState.sequences.length + 1;
    let id = `${base}_${index}`;
    while (eventState.sequences.some((sequence) => sequence.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const maxOrder = eventState.sequences.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const poseId = eventState.poses[0]?.id || '';
    const easingId = eventState.easings[0]?.id || 'e_linear';
    const sequence = {
      id,
      displayOrder: maxOrder + 10,
      description: '',
      steps: poseId ? [{ type: 'pose', targetId: poseId, moveMs: 500, easingId, axisEasing: {} }] : [],
      triggers: { start: null, end: null }
    };
    eventState.sequences.push(sequence);
    selectedSequenceId = sequence.id;
    sortSequences();
    persistEventState();
    renderSequenceList();
    populateSequenceEditor(sequence);
    updateSequenceTargetOptions();
    renderEventUsage();
    renderEasingUsage();
    renderSequenceUsage();
    updateRichJsonOutput();
  };

  const clearSequenceEditor = () => {
    if (!sequenceIdInput || !sequenceOrderInput || !sequenceDescriptionInput) {
      return;
    }
    sequenceIdInput.value = '';
    sequenceOrderInput.value = '';
    sequenceDescriptionInput.value = '';
    if (sequenceStepList) {
      sequenceStepList.innerHTML = '';
    }
    clearSequenceIdError();
  };

  const saveSequence = () => {
    if (!selectedSequenceId) {
      return;
    }
    const sequence = eventState.sequences.find((item) => item.id === selectedSequenceId);
    if (!sequence) {
      return;
    }
    const prevId = sequence.id;
    const nextId = (sequenceIdInput?.value || '').trim() || sequence.id;
    if (hasDuplicateSequenceId(nextId, sequence.id)) {
      showSequenceIdError();
      return;
    }
    if (prevId !== nextId) {
      renameSequenceReferences(prevId, nextId);
    }
    sequence.id = nextId;
    const orderRaw = sequenceOrderInput?.value ?? '';
    sequence.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, sequence.displayOrder ?? null);
    sequence.description = (sequenceDescriptionInput?.value || '').trim();
    sequence.triggers = {
      start: sequenceTriggerStart?.value === 'none' ? null : sequenceTriggerStart?.value || null,
      end: sequenceTriggerEnd?.value === 'none' ? null : sequenceTriggerEnd?.value || null
    };
    selectedSequenceId = sequence.id;
    clearSequenceIdError();
    sortSequences();
    persistEventState();
    renderSequenceList();
    populateSequenceEditor(sequence);
    updateSequenceTargetOptions();
    renderEventUsage();
    renderEasingUsage();
    renderSequenceUsage();
    updateRichJsonOutput();
  };

  const duplicateSequence = () => {
    if (!selectedSequenceId) {
      return;
    }
    const source = eventState.sequences.find((item) => item.id === selectedSequenceId);
    if (!source) {
      return;
    }
    const maxOrder = eventState.sequences.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.sequences.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      steps: (source.steps || []).map((step) => ({ ...step, axisEasing: { ...step.axisEasing } })),
      triggers: { ...source.triggers }
    };
    eventState.sequences.push(copy);
    selectedSequenceId = id;
    sortSequences();
    persistEventState();
    renderSequenceList();
    populateSequenceEditor(copy);
    updateSequenceTargetOptions();
    renderEventUsage();
    renderEasingUsage();
    renderSequenceUsage();
    updateRichJsonOutput();
  };

  const deleteSequence = () => {
    if (!selectedSequenceId) {
      return;
    }
    if (getSequenceUsageCount(selectedSequenceId) > 0) {
      window.alert(getTranslation('sequence.delete.inUse'));
      return;
    }
    const label = selectedSequenceId;
    const confirmText = getTranslation('sequence.delete.confirm').replace('{id}', label);
    if (!window.confirm(confirmText)) {
      return;
    }
    const index = eventState.sequences.findIndex((item) => item.id === selectedSequenceId);
    if (index === -1) {
      return;
    }
    eventState.sequences.splice(index, 1);
    selectedSequenceId = eventState.sequences[index]?.id || eventState.sequences[index - 1]?.id || null;
    persistEventState();
    renderSequenceList();
    if (selectedSequenceId) {
      selectSequenceById(selectedSequenceId);
    } else {
      clearSequenceEditor();
      updateRichJsonOutput();
    }
    updateSequenceTargetOptions();
    renderEventUsage();
    renderEasingUsage();
    renderSequenceUsage();
  };

  const addSequenceStep = () => {
    const sequence = getSelectedSequence();
    if (!sequence) {
      return;
    }
    const poseId = eventState.poses[0]?.id || '';
    const easingId = eventState.easings[0]?.id || 'e_linear';
    const step = poseId
      ? { type: 'pose', targetId: poseId, moveMs: 500, easingId, axisEasing: {} }
      : { type: 'sequence', targetId: eventState.sequences[0]?.id || '' };
    sequence.steps = sequence.steps || [];
    sequence.steps.push(step);
    setActiveSequenceStep(sequence.steps.length - 1);
  };

  const moveSequenceStep = (direction) => {
    const sequence = getSelectedSequence();
    if (!sequence || selectedSequenceStepIndex === null || selectedSequenceStepIndex === undefined) {
      return;
    }
    const nextIndex = selectedSequenceStepIndex + direction;
    if (nextIndex < 0 || nextIndex >= sequence.steps.length) {
      return;
    }
    const steps = sequence.steps;
    [steps[selectedSequenceStepIndex], steps[nextIndex]] = [steps[nextIndex], steps[selectedSequenceStepIndex]];
    setActiveSequenceStep(nextIndex);
  };

  const updateSequenceStepFromEditor = () => {
    const sequence = getSelectedSequence();
    if (!sequence || selectedSequenceStepIndex === null || selectedSequenceStepIndex === undefined) {
      return;
    }
    const step = sequence.steps[selectedSequenceStepIndex];
    if (!step) {
      return;
    }
    const type = sequenceTargetType?.value || 'pose';
    step.type = type;
    step.targetId = sequenceTargetId?.value || sequenceTargetId?.options?.[0]?.value || '';
    if (type === 'pose') {
      step.moveMs = parseNumber(sequencePoseDuration?.value, step.moveMs ?? 500);
      step.easingId = sequencePoseEasing?.value || step.easingId || 'e_linear';
      step.axisEasing = step.axisEasing || {};
    } else {
      step.axisEasing = {};
    }
    renderSequenceSteps(sequence);
    populateSequenceTargetEditor();
    renderEasingUsage();
    renderPoseUsage();
  };

  const updateSequenceAxisEasing = (axisId, value) => {
    const sequence = getSelectedSequence();
    const step = sequence?.steps?.[selectedSequenceStepIndex ?? 0];
    if (!sequence || !step || step.type !== 'pose') {
      return;
    }
    step.axisEasing = step.axisEasing || {};
    if (value === 'base') {
      delete step.axisEasing[axisId];
    } else {
      step.axisEasing[axisId] = value;
    }
    renderEasingUsage();
  };

  const initSequenceEditor = () => {
    if (!sequenceList || !sequenceAddButton) {
      return;
    }
    loadEventState();
    eventState.sequences = normalizeSequences(eventState.sequences);
    ensureSequenceSelection();
    sortSequences();
    renderSequenceList();
    if (selectedSequenceId) {
      selectSequenceById(selectedSequenceId);
    } else {
      clearSequenceEditor();
    }
    updateRichJsonOutput();

    sequenceList.addEventListener('click', (event) => {
      const item = event.target.closest('.list-item');
      if (!item || !sequenceList.contains(item)) {
        return;
      }
      selectSequenceById(item.dataset.sequenceId);
    });

    sequenceAddButton.addEventListener('click', () => {
      addSequence();
    });

    if (sequenceSaveButton) {
      sequenceSaveButton.addEventListener('click', () => {
        saveSequence();
      });
    }

    if (sequenceDuplicateButton) {
      sequenceDuplicateButton.addEventListener('click', () => {
        duplicateSequence();
      });
    }

    if (sequenceDeleteButton) {
      sequenceDeleteButton.addEventListener('click', () => {
        deleteSequence();
      });
    }

    if (sequenceIdInput) {
      sequenceIdInput.addEventListener('input', () => {
        clearSequenceIdError();
      });
    }

    if (sequenceFilterInput) {
      sequenceFilterInput.addEventListener('input', () => {
        renderSequenceList();
      });
    }

    if (sequenceStepList) {
      sequenceStepList.addEventListener('click', (event) => {
        const item = event.target.closest('li');
        if (!item || !sequenceStepList.contains(item)) {
          return;
        }
        const index = Number(item.dataset.stepIndex);
        if (Number.isFinite(index)) {
          setActiveSequenceStep(index);
        }
      });
    }

    if (sequenceStepAddButton) {
      sequenceStepAddButton.addEventListener('click', () => {
        addSequenceStep();
        renderSequenceUsage();
        renderPoseUsage();
      });
    }

    if (sequenceStepUpButton) {
      sequenceStepUpButton.addEventListener('click', () => {
        moveSequenceStep(-1);
        renderSequenceUsage();
        renderPoseUsage();
      });
    }

    if (sequenceStepDownButton) {
      sequenceStepDownButton.addEventListener('click', () => {
        moveSequenceStep(1);
        renderSequenceUsage();
        renderPoseUsage();
      });
    }

    if (sequenceTargetType) {
      sequenceTargetType.addEventListener('change', () => {
        updateSequenceTargetOptions();
        updateSequenceStepFromEditor();
      });
    }

    if (sequenceTargetId) {
      sequenceTargetId.addEventListener('change', () => {
        updateSequenceStepFromEditor();
      });
    }

    if (sequencePoseDuration) {
      sequencePoseDuration.addEventListener('input', () => {
        updateSequenceStepFromEditor();
      });
    }

    if (sequencePoseEasing) {
      sequencePoseEasing.addEventListener('change', () => {
        updateSequenceStepFromEditor();
      });
    }

    if (sequenceAxisEasing) {
      sequenceAxisEasing.addEventListener('change', (event) => {
        const select = event.target.closest('select[data-sequence-axis]');
        if (!select) {
          return;
        }
        updateSequenceAxisEasing(select.dataset.sequenceAxis, select.value);
      });
    }
  };

  const clearEasingEditor = () => {
    if (!easingIdInput || !easingOrderInput || !easingDescriptionInput || !easingTypeSelect) {
      return;
    }
    easingIdInput.value = '';
    easingOrderInput.value = '';
    easingDescriptionInput.value = '';
    easingTypeSelect.value = 'warpcurve';
    easingTypeSelect.dispatchEvent(new Event('change', { bubbles: true }));
    applyEasingParams(easingTypeSelect.value, []);
    renderEasingGraphs();
    setEasingEditorLocked(false);
  };

  const applyImportedState = (payload) => {
    const next = payload && typeof payload === 'object' ? payload : null;
    if (!next) {
      throw new Error('Invalid payload');
    }
    eventState = {
      meta: next.meta || defaultState.meta,
      events: Array.isArray(next.events) ? next.events : [],
      easings: normalizeEasings(next.easings),
      servos: normalizeServos(next.servos),
      joints: normalizeJoints(next.joints),
      jointGroups: normalizeJointGroups(next.jointGroups),
      poses: normalizePoses(next.poses),
      sequences: normalizeSequences(next.sequences)
    };
    sortEvents();
    sortEasings();
    sortServos();
    sortJoints();
    sortJointGroups();
    sortPoses();
    sortSequences();
    persistEventState();
    selectedEventId = eventState.events[0]?.id || null;
    selectedEasingId = eventState.easings[0]?.id || null;
    selectedServoId = eventState.servos[0]?.id || null;
    selectedJointId = eventState.joints[0]?.id || null;
    selectedJointGroupId = eventState.jointGroups[0]?.id || null;
    selectedPoseId = eventState.poses[0]?.id || null;
    selectedSequenceId = eventState.sequences[0]?.id || null;
    renderEventList();
    renderEasingList();
    renderServoList();
    renderJointList();
    renderJointGroupList();
    renderPoseList();
    renderSequenceList();
    renderEventUsage();
    renderEasingUsage();
    renderSequenceUsage();
    renderPoseUsage();
    renderJointGroupUsage();
    renderJointUsage();
    renderPoseUsage();
    if (selectedEventId) {
      selectEventById(selectedEventId);
    } else {
      clearEventEditor();
    }
    if (selectedEasingId) {
      selectEasingById(selectedEasingId);
    } else {
      clearEasingEditor();
    }
    if (selectedJointId) {
      selectJointById(selectedJointId);
    } else {
      clearJointEditor();
    }
    if (selectedJointGroupId) {
      selectJointGroupById(selectedJointGroupId);
    } else {
      clearJointGroupEditor();
    }
    if (selectedPoseId) {
      selectPoseById(selectedPoseId);
    } else {
      clearPoseEditor();
    }
    if (selectedSequenceId) {
      selectSequenceById(selectedSequenceId);
    } else {
      clearSequenceEditor();
    }
    if (selectedServoId) {
      selectServoById(selectedServoId);
    } else {
      clearServoEditor();
    }
    updateRichJsonOutput();
  };

  const initProjectImportExport = () => {
    if (projectNewButton) {
      projectNewButton.addEventListener('click', () => {
        const confirmText = getTranslation('project.new.confirm');
        if (!window.confirm(confirmText)) {
          return;
        }
        applyImportedState(defaultState);
      });
    }

    if (projectSaveButton) {
      projectSaveButton.addEventListener('click', () => {
        const richJson = buildRichJson();
        const blob = new Blob([JSON.stringify(richJson, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'motionkit-richui.json';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(url);
      });
    }

    if (projectImportButton && projectImportInput) {
      projectImportButton.addEventListener('click', () => {
        projectImportInput.click();
      });

      projectImportInput.addEventListener('change', async (event) => {
        const file = event.target.files?.[0];
        if (!file) {
          return;
        }
        try {
          const text = await file.text();
          const parsed = JSON.parse(text);
          applyImportedState(parsed);
        } catch (error) {
          window.alert(getTranslation('project.import.invalid'));
        } finally {
          projectImportInput.value = '';
        }
      });
    }
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
    clearEventNumberError();
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

  const clearEventNumberError = () => {
    if (eventNumberError) {
      eventNumberError.hidden = true;
    }
    if (eventNumberInput) {
      eventNumberInput.classList.remove('is-error');
    }
  };

  const showEventNumberError = () => {
    if (eventNumberError) {
      eventNumberError.hidden = false;
    }
    if (eventNumberInput) {
      eventNumberInput.classList.add('is-error');
    }
  };

  const hasDuplicateId = (id, currentId) => {
    return eventState.events.some((item) => item.id === id && item.id !== currentId);
  };

  const hasDuplicateNumber = (number, currentId) => {
    return eventState.events.some((item) => item.number === number && item.id !== currentId);
  };

  const selectEventById = (eventId) => {
    const event = eventState.events.find((item) => item.id === eventId) || eventState.events[0];
    if (!event) {
      return;
    }
    selectedEventId = event.id;
    renderEventList();
    populateEventEditor(event);
    renderEventUsage();
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
    const maxOrder = eventState.events.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const maxNumber = eventState.events.reduce((max, item) => {
      const value = typeof item.number === 'number' ? item.number : max;
      return Math.max(max, value);
    }, 0);
    const event = {
      id,
      number: maxNumber + 10,
      displayOrder: maxOrder + 10,
      description: ''
    };
    eventState.events.push(event);
    selectedEventId = event.id;
    persistEventState();
    renderEventList();
    populateEventEditor(event);
    renderEventUsage();
    updatePoseTriggerOptions();
    updateSequenceTriggerOptions();
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

  const renameServoReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.joints.forEach((joint) => {
      (joint.servos || []).forEach((servo) => {
        if (servo.servoId === oldId) {
          servo.servoId = nextId;
        }
      });
    });
    if (selectedJointServoId === oldId) {
      selectedJointServoId = nextId;
    }
  };

  const renameJointReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.jointGroups.forEach((group) => {
      if (Array.isArray(group.jointIds)) {
        group.jointIds = group.jointIds.map((jointId) => (jointId === oldId ? nextId : jointId));
      }
    });
    eventState.poses.forEach((pose) => {
      (pose.jointTargets || []).forEach((target) => {
        if (target.jointId === oldId) {
          target.jointId = nextId;
        }
      });
    });
    eventState.sequences.forEach((sequence) => {
      (sequence.steps || []).forEach((step) => {
        if (!step.axisEasing || typeof step.axisEasing !== 'object') {
          return;
        }
        if (Object.prototype.hasOwnProperty.call(step.axisEasing, oldId)) {
          if (!Object.prototype.hasOwnProperty.call(step.axisEasing, nextId)) {
            step.axisEasing[nextId] = step.axisEasing[oldId];
          }
          delete step.axisEasing[oldId];
        }
      });
    });
    if (selectedJointGroupJointId === oldId) {
      selectedJointGroupJointId = nextId;
    }
    if (selectedPoseAxisId === oldId) {
      selectedPoseAxisId = nextId;
    }
  };

  const renameJointGroupReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.poses.forEach((pose) => {
      if (pose.groupId === oldId) {
        pose.groupId = nextId;
      }
    });
    if (poseGroupSelect?.value === oldId) {
      poseGroupSelect.value = nextId;
    }
  };

  const renamePoseReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.sequences.forEach((sequence) => {
      (sequence.steps || []).forEach((step) => {
        if (step.type === 'pose' && step.targetId === oldId) {
          step.targetId = nextId;
        }
      });
    });
    if (poseControlStart?.value === oldId) {
      poseControlStart.value = nextId;
    }
    if (sequenceControlStart?.value === oldId) {
      sequenceControlStart.value = nextId;
    }
    if (sequenceTargetType?.value === 'pose' && sequenceTargetId?.value === oldId) {
      sequenceTargetId.value = nextId;
    }
  };

  const renameSequenceReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.sequences.forEach((sequence) => {
      (sequence.steps || []).forEach((step) => {
        if (step.type === 'sequence' && step.targetId === oldId) {
          step.targetId = nextId;
        }
      });
    });
    if (sequenceTargetType?.value === 'sequence' && sequenceTargetId?.value === oldId) {
      sequenceTargetId.value = nextId;
    }
  };

  const renameEasingReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.sequences.forEach((sequence) => {
      (sequence.steps || []).forEach((step) => {
        if (step.type !== 'pose') {
          return;
        }
        if (step.easingId === oldId) {
          step.easingId = nextId;
        }
        if (step.axisEasing) {
          Object.entries(step.axisEasing).forEach(([axisId, easingId]) => {
            if (easingId === oldId) {
              step.axisEasing[axisId] = nextId;
            }
          });
        }
      });
    });
    if (poseControlEasing?.value === oldId) {
      poseControlEasing.value = nextId;
    }
    if (sequencePoseEasing?.value === oldId) {
      sequencePoseEasing.value = nextId;
    }
  };

  const renameEventReferences = (oldId, nextId) => {
    if (!oldId || !nextId || oldId === nextId) {
      return;
    }
    eventState.poses.forEach((pose) => {
      const triggers = pose.triggers || {};
      if (triggers.start === oldId) {
        triggers.start = nextId;
      }
      if (triggers.reached === oldId) {
        triggers.reached = nextId;
      }
      if (triggers.end === oldId) {
        triggers.end = nextId;
      }
      if (triggers.overrun === oldId) {
        triggers.overrun = nextId;
      }
      pose.triggers = triggers;
    });
    eventState.sequences.forEach((sequence) => {
      const triggers = sequence.triggers || {};
      if (triggers.start === oldId) {
        triggers.start = nextId;
      }
      if (triggers.end === oldId) {
        triggers.end = nextId;
      }
      sequence.triggers = triggers;
    });
    if (poseTriggerStart?.value === oldId) {
      poseTriggerStart.value = nextId;
    }
    if (poseTriggerReached?.value === oldId) {
      poseTriggerReached.value = nextId;
    }
    if (poseTriggerEnd?.value === oldId) {
      poseTriggerEnd.value = nextId;
    }
    if (poseTriggerOverrun?.value === oldId) {
      poseTriggerOverrun.value = nextId;
    }
    if (sequenceTriggerStart?.value === oldId) {
      sequenceTriggerStart.value = nextId;
    }
    if (sequenceTriggerEnd?.value === oldId) {
      sequenceTriggerEnd.value = nextId;
    }
  };

  const saveEvent = () => {
    if (!selectedEventId) {
      return;
    }
    const event = eventState.events.find((item) => item.id === selectedEventId);
    if (!event) {
      return;
    }
    const prevId = event.id;
    const nextId = (eventIdInput?.value || '').trim() || event.id;
    if (hasDuplicateId(nextId, event.id)) {
      showEventIdError();
      return;
    }
    if (prevId !== nextId) {
      renameEventReferences(prevId, nextId);
    }
    event.id = nextId;
    const nextNumber = clampUint16(eventNumberInput?.value);
    if (nextNumber === null) {
      return;
    }
    if (hasDuplicateNumber(nextNumber, event.id)) {
      showEventNumberError();
      return;
    }
    event.number = nextNumber ?? event.number ?? 0;
    const orderRaw = eventOrderInput?.value ?? '';
    event.displayOrder = orderRaw === '' ? null : parseNumber(orderRaw, event.displayOrder ?? null);
    event.description = (eventDescriptionInput?.value || '').trim();
    selectedEventId = event.id;
    clearEventIdError();
    clearEventNumberError();
    sortEvents();
    persistEventState();
    renderEventList();
    updatePoseTriggerOptions();
    updateSequenceTriggerOptions();
    renderEventUsage();
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
    const maxOrder = eventState.events.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.events.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const maxNumber = eventState.events.reduce((max, item) => {
      const value = typeof item.number === 'number' ? item.number : max;
      return Math.max(max, value);
    }, 0);
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      number: maxNumber + 10
    };
    eventState.events.push(copy);
    selectedEventId = id;
    sortEvents();
    persistEventState();
    renderEventList();
    populateEventEditor(copy);
    renderEventUsage();
    updatePoseTriggerOptions();
    updateSequenceTriggerOptions();
    updateRichJsonOutput();
  };

  const deleteEvent = () => {
    if (!selectedEventId) {
      return;
    }
    if (getEventUsageCount(selectedEventId) > 0) {
      window.alert(getTranslation('event.delete.inUse'));
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
      renderEventUsage();
      updateRichJsonOutput();
    }
    updatePoseTriggerOptions();
    updateSequenceTriggerOptions();
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

    if (eventNumberInput) {
      eventNumberInput.addEventListener('input', () => {
        clearEventNumberError();
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

  const setEasingEditorLocked = (isPreset) => {
    if (easingIdInput) {
      easingIdInput.disabled = isPreset;
    }
    if (easingTypeSelect) {
      easingTypeSelect.disabled = isPreset;
    }
    document.querySelectorAll('[data-easing-param]').forEach((input) => {
      input.disabled = isPreset;
    });
    const deleteButton = document.querySelector('#panel-easing .card-actions .btn.btn-ghost');
    if (deleteButton) {
      deleteButton.disabled = isPreset;
    }
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
    setEasingEditorLocked(easing.kind === 'preset');
  };

  const selectEasingById = (easingId) => {
    const easing = eventState.easings.find((item) => item.id === easingId) || eventState.easings[0];
    if (!easing) {
      return;
    }
    selectedEasingId = easing.id;
    renderEasingList();
    populateEasingEditor(easing);
    renderEasingUsage();
  };

  const ensureEasingSelection = () => {
    if (!selectedEasingId && eventState.easings.length > 0) {
      selectedEasingId = eventState.easings[0].id;
    }
  };

  const addEasing = () => {
    const base = 'easing_new';
    let index = eventState.easings.length + 1;
    let id = `${base}_${index}`;
    while (eventState.easings.some((item) => item.id === id)) {
      index += 1;
      id = `${base}_${index}`;
    }
    const type = easingTypeSelect?.value || 'warpcurve';
    const maxOrder = eventState.easings.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    const easing = {
      id,
      type,
      kind: 'custom',
      displayOrder: maxOrder + 10,
      description: '',
      params: getEasingParams(type)
    };
    eventState.easings.push(easing);
    selectedEasingId = easing.id;
    sortEasings();
    persistEventState();
    renderEasingList();
    populateEasingEditor(easing);
    updatePoseControlOptions();
    renderPoseControlAxisEasing();
    updateSequenceEasingOptions();
    renderSequenceAxisEasing();
    renderEasingUsage();
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
    const prevId = easing.id;
    const nextId = (easingIdInput?.value || '').trim() || easing.id;
    if (prevId !== nextId) {
      renameEasingReferences(prevId, nextId);
    }
    easing.id = nextId;
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
    updatePoseControlOptions();
    renderPoseControlAxisEasing();
    updateSequenceEasingOptions();
    renderSequenceAxisEasing();
    setEasingEditorLocked(easing.kind === 'preset');
    renderEasingUsage();
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
    const maxOrder = eventState.easings.reduce((max, item) => {
      const value = typeof item.displayOrder === 'number' ? item.displayOrder : max;
      return Math.max(max, value);
    }, 0);
    let index = 1;
    let id = `${source.id}_copy`;
    while (eventState.easings.some((item) => item.id === id)) {
      index += 1;
      id = `${source.id}_copy${index}`;
    }
    const copy = {
      ...source,
      id,
      displayOrder: maxOrder + 10,
      kind: source.kind === 'preset' ? 'custom' : source.kind
    };
    eventState.easings.push(copy);
    selectedEasingId = id;
    sortEasings();
    persistEventState();
    renderEasingList();
    populateEasingEditor(copy);
    updatePoseControlOptions();
    renderPoseControlAxisEasing();
    updateSequenceEasingOptions();
    renderSequenceAxisEasing();
    renderEasingUsage();
    updateRichJsonOutput();
  };

  const deleteEasing = () => {
    if (!selectedEasingId) {
      return;
    }
    if (getEasingUsageCount(selectedEasingId) > 0) {
      window.alert(getTranslation('easing.delete.inUse'));
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
    updatePoseControlOptions();
    renderPoseControlAxisEasing();
    updateSequenceEasingOptions();
    renderSequenceAxisEasing();
    renderEasingUsage();
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
  initFilterClearButtons();
  initEasingTypeToggle();
  initServoEditor();
  initJointEditor();
  initJointGroupEditor();
  initPoseEditor();
  initSequenceEditor();
  initEventEditor();
  initEasingEditor();
  initProjectImportExport();
  renderEasingGraphs();
  initServoTypeToggle();
  initServoPreviewAngle();
  initServoPreviewCards();
  const initialLanguage = detectLanguage();
  languageSelect.value = initialLanguage;
  applyTranslations(initialLanguage);
});
