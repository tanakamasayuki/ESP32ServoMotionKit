document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      'app.meta.title': 'ESP32 Servo Motion Studio',
      'app.eyebrow': 'ESP32 Servo Motion Kit',
      'app.title': 'Motion Studio',
      'app.subtitle': 'Design servo, joint, pose, motion, and sequence layouts before syncing to hardware.',
      'app.tag.offline': 'Offline ready',
      'app.tag.webserial': 'WebSerial optional',
      'app.tag.layout': 'Layout preview',
      'device.title': 'Device Link',
      'device.status.disconnected': 'Disconnected',
      'device.status.connected': 'Connected',
      'device.status.connecting': 'Connecting...',
      'device.status.unsupported': 'WebSerial unsupported',
      'device.note': 'Edit everything without a device. Connect when you want to sync or preview moves.',
      'device.actions.connect': 'Connect',
      'device.actions.disconnect': 'Disconnect',
      'device.demo.label': 'Demo mode (no device needed)',
      'device.meta.port': 'Port',
      'device.meta.firmware': 'Firmware',
      'device.meta.sync': 'Last sync',
      'device.meta.mode': 'Mode',
      'device.mode.demo': 'Demo',
      'device.mode.live': 'Live',
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
      'tabs.pose': 'Pose',
      'tabs.pose.note': 'Pose library',
      'tabs.motion': 'Motion',
      'tabs.motion.note': 'Transitions & clips',
      'tabs.sequence': 'Sequence',
      'tabs.sequence.note': 'Steps & triggers',
      'common.import': 'Import',
      'common.save': 'Save',
      'servo.title': 'Servo Tuning',
      'servo.desc': 'Define PWM range, neutral, and safety limits per servo.',
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
      'joint.group.sync': 'Sync offsets',
      'joint.group.balance': 'Balance load',
      'joint.group.test': 'Test range',
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
      'motion.title': 'Motion Builder',
      'motion.desc': 'Arrange transitions between poses and apply easing.',
      'motion.card.timeline': 'Timeline',
      'motion.timeline.placeholder': 'Drop poses to create a flow.',
      'motion.timeline.add': 'Add segment',
      'motion.card.transition': 'Transition Settings',
      'motion.form.duration': 'Move duration (ms)',
      'motion.form.easing': 'Easing',
      'motion.form.easing.smooth': 'Smooth',
      'motion.form.easing.linear': 'Linear',
      'motion.form.easing.strong': 'Strong S-curve',
      'motion.form.hold': 'Hold (ms)',
      'motion.card.preview': 'Preview & Sync',
      'motion.preview.play': 'Play motion',
      'motion.preview.loop': 'Loop',
      'motion.preview.export': 'Export JSON',
      'sequence.title': 'Sequence Orchestration',
      'sequence.desc': 'Compose steps, triggers, and optional calls to reusable sequences.',
      'sequence.card.steps': 'Sequence Steps',
      'sequence.steps.step1': 'Step 1: p_home',
      'sequence.steps.step2': 'Step 2: p_wave',
      'sequence.steps.step3': 'Step 3: call seq_intro',
      'sequence.steps.inline': 'Inline on export',
      'sequence.steps.add': 'Add step',
      'sequence.card.rules': 'Loop & Trigger',
      'sequence.form.loop': 'Loop playback',
      'sequence.form.trigger': 'Trigger',
      'sequence.form.trigger.option.start': 'On sequence start',
      'sequence.form.trigger.option.end': 'On sequence end',
      'sequence.form.eventId': 'Event ID',
      'sequence.card.axis': 'Axis Easing',
      'sequence.axis.note': 'Override per axis when needed.',
      'sequence.axis.edit': 'Edit overrides'
    },
    ja: {
      'app.meta.title': 'ESP32 サーボモーションスタジオ',
      'app.eyebrow': 'ESP32 サーボモーションキット',
      'app.title': 'モーションスタジオ',
      'app.subtitle': 'サーボ/ジョイント/ポーズ/モーション/シーケンスの設定を、デバイス接続前に設計できます。',
      'app.tag.offline': 'オフライン編集',
      'app.tag.webserial': 'WebSerialは任意',
      'app.tag.layout': 'レイアウト確認',
      'device.title': 'デバイス接続',
      'device.status.disconnected': '未接続',
      'device.status.connected': '接続済み',
      'device.status.connecting': '接続中…',
      'device.status.unsupported': 'WebSerial 非対応',
      'device.note': '接続なしでも編集できます。同期やプレビュー時に接続してください。',
      'device.actions.connect': '接続',
      'device.actions.disconnect': '切断',
      'device.demo.label': 'デモモード（接続不要）',
      'device.meta.port': 'ポート',
      'device.meta.firmware': 'ファームウェア',
      'device.meta.sync': '最終同期',
      'device.meta.mode': 'モード',
      'device.mode.demo': 'デモ',
      'device.mode.live': 'ライブ',
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
      'tabs.pose': 'ポーズ',
      'tabs.pose.note': 'ポーズ一覧',
      'tabs.motion': 'モーション',
      'tabs.motion.note': '遷移/クリップ',
      'tabs.sequence': 'シーケンス',
      'tabs.sequence.note': 'ステップ/トリガー',
      'common.import': 'インポート',
      'common.save': '保存',
      'servo.title': 'サーボ調整',
      'servo.desc': 'サーボごとの PWM 範囲、ニュートラル、安全リミットを設定します。',
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
      'joint.group.sync': 'オフセット同期',
      'joint.group.balance': '負荷分散',
      'joint.group.test': 'レンジテスト',
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
      'motion.title': 'モーションビルダー',
      'motion.desc': 'ポーズ間の遷移を配置し、イージングを適用します。',
      'motion.card.timeline': 'タイムライン',
      'motion.timeline.placeholder': 'ポーズを配置して流れを作成します。',
      'motion.timeline.add': 'セグメント追加',
      'motion.card.transition': '遷移設定',
      'motion.form.duration': '移動時間 (ms)',
      'motion.form.easing': 'イージング',
      'motion.form.easing.smooth': 'スムーズ',
      'motion.form.easing.linear': 'リニア',
      'motion.form.easing.strong': '強め S カーブ',
      'motion.form.hold': 'ホールド (ms)',
      'motion.card.preview': 'プレビューと同期',
      'motion.preview.play': 'モーション再生',
      'motion.preview.loop': 'ループ',
      'motion.preview.export': 'JSON 書き出し',
      'sequence.title': 'シーケンス構成',
      'sequence.desc': 'ステップ、トリガー、再利用シーケンスの呼び出しを構成します。',
      'sequence.card.steps': 'シーケンスステップ',
      'sequence.steps.step1': 'ステップ 1: p_home',
      'sequence.steps.step2': 'ステップ 2: p_wave',
      'sequence.steps.step3': 'ステップ 3: seq_intro を呼び出し',
      'sequence.steps.inline': '書き出し時に展開',
      'sequence.steps.add': 'ステップ追加',
      'sequence.card.rules': 'ループとトリガー',
      'sequence.form.loop': 'ループ再生',
      'sequence.form.trigger': 'トリガー',
      'sequence.form.trigger.option.start': 'シーケンス開始時',
      'sequence.form.trigger.option.end': 'シーケンス終了時',
      'sequence.form.eventId': 'イベント ID',
      'sequence.card.axis': '軸別イージング',
      'sequence.axis.note': '必要に応じて軸ごとに上書きします。',
      'sequence.axis.edit': '上書きを編集'
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
  const demoToggle = document.getElementById('demo-toggle');
  const modeLabel = document.getElementById('mode-label');
  const portLabel = document.getElementById('port-label');
  const syncLabel = document.getElementById('sync-label');
  const languageSelect = document.getElementById('language-select');

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

  if (!state.supported) {
    state.status = 'unsupported';
  }

  initTabs();
  const initialLanguage = detectLanguage();
  languageSelect.value = initialLanguage;
  applyTranslations(initialLanguage);
});
