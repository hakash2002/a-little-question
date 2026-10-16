(function () {
  'use strict';

  var CONFIG = {
    name: 'Hakash',
    web3formsKey: '6d5e4dab-c01e-4f95-8961-9967bfe998fb',
    whatsappNumber: ''
  };

  var THEMES = {
    none: { ground: '#DCEEF0', ink: '#14302E', sub: '#3F5A58', accent: '#1F6F6A', accentInk: '#FFFFFF', card: '#F6FBFB', line: '#BCD4D2', chip: '#D2E7E5',
      sun: '#F6C177', sunBottom: '250px', sunOpacity: '1', sea: '#3E9C9A', sea2: '#2F8786', sea3: '#24706F', foam: '#F4FAF8', sand: '#EED9B6', sandMark: '#D9BF93', scheme: 'light', rock: '#6E7A78', rockLight: '#8E9A97', rockShade: '#525C5B' },
    sunrise: { ground: '#FCEBDB', ink: '#3A2418', sub: '#6A4E40', accent: '#B0502A', accentInk: '#FFFFFF', card: '#FFF8F1', line: '#E9D0BC', chip: '#F8DDC7',
      sun: '#F39A5B', sunBottom: '170px', sunOpacity: '1', sea: '#E0A98A', sea2: '#C98A74', sea3: '#A86F63', foam: '#FFF4EA', sand: '#F0D9BC', sandMark: '#DDBE98', scheme: 'light', rock: '#7A6258', rockLight: '#9A8074', rockShade: '#5C4840' },
    sunset: { ground: '#24182B', ink: '#FBEFE6', sub: '#CDBBC9', accent: '#F28C5E', accentInk: '#24182B', card: '#2F2137', line: '#4A3753', chip: '#43304B',
      sun: '#F28C5E', sunBottom: '160px', sunOpacity: '0', sea: '#5A3A5E', sea2: '#4A2F50', sea3: '#3B2541', foam: '#B98A9A', sand: '#6B4A55', sandMark: '#5A3C47', scheme: 'dark', rock: '#3A2833', rockLight: '#4C3644', rockShade: '#2A1C25' }
  };

  var BEACHES = [
    { id: 'thiruvanmiyur', name: 'Thiruvanmiyur Beach', area: '~6 km from Velachery', line: 'The closest one, a calm stretch where locals take quiet walks, with the Marundeeswarar temple close by.',
      sunrise: 'Barely 15 minutes on the bike, catch first light easily', sunset: 'Quiet sand, sea breeze, and short ride home' },
    { id: 'elliots', name: "Elliot's Beach", area: 'Besant Nagar · ~8 km', line: 'Cleaner and calmer than the city beaches, with the Karl Schmidt Memorial and cafés a short walk away.',
      sunrise: 'Quiet morning walk, then breakfast at a Besant Nagar café', sunset: 'Evening crowd, sea breeze, then dinner on the café strip' },
    { id: 'palavakkam', name: 'Palavakkam Beach', area: 'ECR · ~9 km', line: 'Just off ECR, with wide open sand and far fewer people than the city beaches.',
      sunrise: 'Practically empty at dawn, just us and the waves', sunset: 'Easy ride down ECR, then food along the road' },
    { id: 'neelankarai', name: 'Neelankarai Beach', area: 'ECR · ~10 km', rocky: true, line: 'Clean and quiet, with rock barriers running into the sea. We can sit out on the rocks and watch the waves.',
      sunrise: 'Sunrise from the rocks, waves right below us', sunset: 'The pink sky from the rocks, almost no crowd' },
    { id: 'covelong', name: 'Covelong Beach', area: 'Kovalam, ECR · ~30 km', rocky: true, line: 'The rockiest of the lot: big rocks by the fishing village with waves crashing on them. A longer ride, but worth it.',
      sunrise: 'Waves breaking on the rocks at first light', sunset: 'A long bike ride down ECR with the sea breeze' }
  ];

  var FLOWERS = [
    { id: 'malli', name: 'Jasmine', local: 'Malli', note: 'A fresh string for your hair. Smells like home.', color: '#FFFFFF', edge: '#D8D2C4', center: '#E9E2C8', times: ['sunrise', 'sunset'], beaches: ['neelankarai'] },
    { id: 'rose', name: 'Red roses', local: 'Roja', note: 'The classic. Hard to go wrong.', color: '#C8324B', edge: '#C8324B', center: '#8E1D33', times: ['sunset'], beaches: ['thiruvanmiyur'] },
    { id: 'kanakambaram', name: 'Firecracker flower', local: 'Kanakambaram', note: 'Bright orange, strung with jasmine.', color: '#F28A3C', edge: '#F28A3C', center: '#C25E1C', times: ['sunset'], beaches: ['palavakkam', 'covelong'] },
    { id: 'lotus', name: 'Lotus', local: 'Thamarai', note: 'Soft pink and calm, like early morning.', color: '#F2A7BF', edge: '#F2A7BF', center: '#F2C94C', times: ['sunrise'], beaches: ['neelankarai'] },
    { id: 'sampangi', name: 'Tuberose', local: 'Sampangi', note: 'White and very fragrant.', color: '#F7F3EA', edge: '#D8D2C4', center: '#C9D8A8', times: ['sunrise'], beaches: ['elliots'] },
    { id: 'sevanthi', name: 'Chrysanthemum', local: 'Sevanthi', note: 'Sunny yellow, cheerful and bright.', color: '#F5C842', edge: '#F5C842', center: '#C9921A', times: ['sunrise'], beaches: ['palavakkam', 'covelong'] },
    { id: 'marigold', name: 'Marigold', local: 'Saamanthi', note: 'Warm orange, the colour of golden hour.', color: '#F0A21C', edge: '#F0A21C', center: '#B86A0C', times: ['sunset'], beaches: [] },
    { id: 'orchid', name: 'Orchids', local: 'From a florist', note: 'Elegant purple stems that last for days.', color: '#B07CC6', edge: '#B07CC6', center: '#F2E3F7', times: ['sunset'], beaches: ['elliots'] }
  ];

  var RIDES = [
    { id: 'bike', label: 'Your bike sounds fun', summary: 'On my bike, helmet for you', closing: 'I’ll pick you up on my bike with your flowers, and have you home by ', closingNo: 'I’ll pick you up on my bike and have you home by ' },
    { id: 'cab', label: 'Let’s take a cab', summary: 'Cab, I’ll book it', closing: 'I’ll book us a cab, bring your flowers, and have you home by ', closingNo: 'I’ll book us a cab and have you home by ' },
    { id: 'meet', label: 'I’ll meet you there', summary: 'Meeting at the beach', closing: 'I’ll meet you there with your flowers, and make sure you’re home by ', closingNo: 'I’ll meet you there and make sure you’re home by ' }
  ];

  var STEP_LABELS = ['The question', 'Sky', 'Day', 'Beach', 'Flowers', 'Home by', 'Done'];

  var initialState = { step: 0, time: null, date: null, dateError: '', beach: null, picks: [], curfew: null, convince: false, convinced: false, ride: 'bike', noFlowers: false, toast: '', sendState: 'idle' };
  var state = Object.assign({}, initialState);

  var root = document.getElementById('app');

  /* ---------------- helpers ---------------- */
  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function fmtTime(v) {
    if (!v) return '';
    var parts = v.split(':').map(Number);
    var h = parts[0], m = parts[1];
    var ap = h >= 12 ? 'pm' : 'am';
    var h12 = h % 12 || 12;
    return h12 + ':' + String(m).padStart(2, '0') + ' ' + ap;
  }
  var WD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MO = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function pad(n) { return String(n).padStart(2, '0'); }
  function toIso(dt) { return dt.getFullYear() + '-' + pad(dt.getMonth() + 1) + '-' + pad(dt.getDate()); }
  function fromIso(iso) { var p = iso.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(dt, n) { var x = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()); x.setDate(x.getDate() + n); return x; }
  function isWeekend(dt) { return dt.getDay() === 0 || dt.getDay() === 6; }
  function longDate(iso) { if (!iso) return ''; var dt = fromIso(iso); return WD[dt.getDay()] + ', ' + dt.getDate() + ' ' + MO[dt.getMonth()]; }
  function shortDate(iso) { if (!iso) return ''; var dt = fromIso(iso); return WD[dt.getDay()].slice(0, 3) + ' ' + dt.getDate() + ' ' + MO[dt.getMonth()].slice(0, 3); }
  /* Weekdays only work in the evening (after 5 pm), so sunrise is weekend-only. */
  function dateAllowed(iso, time) {
    if (!iso) return false;
    var dt = fromIso(iso);
    var tomorrow = addDays(new Date(), 1);
    if (dt < tomorrow) return false;
    return time === 'sunset' || isWeekend(dt);
  }
  function dayOptions(time) {
    var out = [], start = addDays(new Date(), 1);
    for (var i = 0; out.length < (time === 'sunset' ? 14 : 8) && i < 60; i++) {
      var dt = addDays(start, i);
      if (time === 'sunset' || isWeekend(dt)) out.push(dt);
    }
    return out;
  }

  function setState(patch) {
    var prevStep = state.step, prevConvince = state.convince;
    state = Object.assign({}, state, patch);
    render();
    if (state.step !== prevStep || state.convince !== prevConvince) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      var focusTarget = root.querySelector('h1, h2');
      if (focusTarget) { focusTarget.setAttribute('tabindex', '-1'); focusTarget.focus({ preventScroll: true }); }
    }
  }

  /* ---------------- derived values ---------------- */
  function derive() {
    var s = state;
    var t = THEMES[s.time || 'none'];
    var beach = BEACHES.find(function (b) { return b.id === s.beach; });
    var timeLabel = s.time === 'sunset' ? 'Sunset' : 'Sunrise';
    var names = FLOWERS.filter(function (f) { return s.picks.indexOf(f.id) !== -1; })
      .map(function (f) { return f.name.toLowerCase().replace(/^./, function (c) { return c.toUpperCase(); }); });
    var bouquet = s.noFlowers ? 'No flowers, just the date'
      : (names.length > 1 ? names.slice(0, -1).join(', ') + ' & ' + names[names.length - 1] : (names[0] || ''));
    var ride0 = RIDES.find(function (r) { return r.id === s.ride; }) || RIDES[0];
    var rideClosing = s.noFlowers ? ride0.closingNo : ride0.closing;
    var bName = beach ? beach.name : '';
    var curfewLabel = fmtTime(s.curfew);
    var weekdayEvening = s.time === 'sunset' && s.date && !isWeekend(fromIso(s.date));
    var onDay = s.date ? ' on ' + longDate(s.date) : '';
    var closing = (s.time === 'sunset'
      ? 'Golden hour at ' + bName + onDay + '. '
      : 'Watching the sun come up at ' + bName + onDay + '. ') + rideClosing + (curfewLabel || 'your curfew') + '.';
    return {
      t: t, beach: beach, bName: bName, timeLabel: timeLabel, bouquet: bouquet,
      ride: ride0, curfewLabel: curfewLabel, closing: closing,
      dateLong: longDate(s.date), dateShort: shortDate(s.date),
      meetLine: weekdayEvening ? 'pickup after 5 pm' : (s.time === 'sunset' ? 'pickup at golden hour' : 'pickup before dawn')
    };
  }

  /* ---------------- views ---------------- */
  function sceneView(t) {
    return '' +
      '<div class="scene" aria-hidden="true">' +
        '<div class="sun"></div>' +
        '<svg viewBox="0 0 1440 230" preserveAspectRatio="none" width="100%" height="230">' +
          '<rect x="0" y="0" width="1440" height="230" fill="' + t.sea + '"></rect>' +
          '<rect x="0" y="0" width="1440" height="3" fill="' + t.foam + '" opacity="0.5"></rect>' +
          '<path d="M0 40 C60 30 120 30 180 40 S300 50 360 40 S480 30 540 40 S660 50 720 40 S840 30 900 40 S1020 50 1080 40 S1200 30 1260 40 S1380 50 1440 40 V230 H0 Z" fill="' + t.sea2 + '"></path>' +
          '<path d="M0 92 C70 80 140 80 210 92 S350 104 420 92 S560 80 630 92 S770 104 840 92 S980 80 1050 92 S1190 104 1260 92 S1400 80 1440 90 V230 H0 Z" fill="' + t.sea3 + '"></path>' +
          '<path d="M0 150 C120 128 260 132 400 146 S700 168 860 150 S1180 126 1440 146 V230 H0 Z" fill="' + t.foam + '"></path>' +
          '<path d="M0 162 C120 140 260 144 400 158 S700 180 860 162 S1180 138 1440 158 V230 H0 Z" fill="' + t.sand + '"></path>' +
          '<path d="M40 196 C50 160 80 140 120 142 C150 128 190 132 210 150 C240 140 280 150 290 172 C320 168 350 182 352 204 L40 204 Z" fill="' + t.rock + '"></path>' +
          '<path d="M120 142 C150 128 190 132 210 150 C190 160 160 162 130 170 C110 160 112 150 120 142 Z" fill="' + t.rockLight + '"></path>' +
          '<path d="M210 150 C240 140 280 150 290 172 C270 178 245 176 222 182 C216 170 212 160 210 150 Z" fill="' + t.rockShade + '"></path>' +
          '<path d="M300 196 C310 180 336 176 356 186 C372 182 392 190 394 206 L300 206 Z" fill="' + t.rockShade + '"></path>' +
          '<path d="M1080 104 C1094 86 1120 82 1140 92 C1160 84 1186 92 1192 110 L1080 112 Z" fill="' + t.rockShade + '"></path>' +
          '<path d="M1170 200 C1176 160 1206 132 1250 130 C1280 112 1330 118 1352 140 C1384 130 1420 144 1440 160 L1440 206 L1170 206 Z" fill="' + t.rock + '"></path>' +
          '<path d="M1250 130 C1280 112 1330 118 1352 140 C1330 150 1296 152 1262 160 C1244 150 1240 140 1250 130 Z" fill="' + t.rockLight + '"></path>' +
          '<path d="M1352 140 C1384 130 1420 144 1440 160 L1440 176 C1410 172 1384 168 1364 172 C1360 160 1356 150 1352 140 Z" fill="' + t.rockShade + '"></path>' +
          '<path d="M1120 204 C1128 188 1152 184 1170 194 L1176 206 L1120 206 Z" fill="' + t.rockShade + '"></path>' +
          '<path d="M60 150 c10 -6 20 -6 30 0 M1200 126 c10 -6 20 -6 30 0 M1400 130 c8 -5 16 -5 24 0" fill="none" stroke="' + t.foam + '" stroke-width="3" stroke-linecap="round" opacity="0.8"></path>' +
          '<path d="M1100 206 c6 -6 12 -6 18 0 M1130 214 c6 -6 12 -6 18 0 M240 200 c6 -6 12 -6 18 0" fill="none" stroke="' + t.sandMark + '" stroke-width="3" stroke-linecap="round"></path>' +
        '</svg>' +
      '</div>';
  }

  function headerView(t) {
    var pills = STEP_LABELS.map(function (label, i) {
      var cls = i === state.step ? 'current' : (i < state.step ? 'done' : '');
      var aria = i === state.step ? ' aria-current="step"' : '';
      return '<span class="step-pill ' + cls + '"' + aria + '>' + esc(label) + '</span>';
    }).join('');
    return '' +
      '<header class="header">' +
        '<div class="brand">' +
          '<svg width="32" height="32" viewBox="0 0 72 72" fill="none" stroke="' + t.accent + '" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M14 46a22 22 0 0 1 44 0"></path><path d="M36 12v6M15 21l4 4M57 21l-4 4"></path><path d="M6 58c5 0 5-4 10-4s5 4 10 4 5-4 10-4 5 4 10 4 5-4 10-4 5 4 10 4"></path></svg>' +
          '<span class="serif">A Chennai beach date</span>' +
        '</div>' +
        '<nav class="steps" aria-label="Progress">' + pills + '</nav>' +
      '</header>';
  }

  var BACK_ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"></path></svg>';

  function questionView() {
    var items = ['Sunrise or sunset', 'Which Chennai beach', 'The flowers I bring you'].map(function (txt, i) {
      return '<div class="pick-item"><span class="chip-num serif">' + (i + 1) + '</span><span>' + txt + '</span></div>';
    }).join('');
    return '' +
      '<div class="hero">' +
        '<div class="hero-copy">' +
          '<h1 class="h1 serif">Can I take you out to a beach?</h1>' +
          '<p class="lead">The Bay of Bengal, the sky doing something beautiful, and flowers you get to pick. You choose the details.</p>' +
          '<div class="row">' +
            '<button class="btn-primary" data-action="yes">Yes, let\'s plan it</button>' +
            '<button class="btn" data-action="maybe">Maybe… convince me</button>' +
          '</div>' +
        '</div>' +
        '<div class="card pick-list">' +
          '<p class="eyebrow">You\'ll get to pick</p>' + items +
        '</div>' +
      '</div>';
  }

  function pitchView() {
    var reasons = [
      ['It\'s my first date', 'I\'ve never done this before, so I\'m going all in to make it special for you.'],
      ['Snacks are on me', 'Filter coffee, sundal, roasted corn, ice cream. Whatever the beach has, it\'s my treat.'],
      ['Safe ride, on time', 'A helmet for you, a slow ride on my bike, and home before your curfew. Promise.'],
      ['Zero pressure', 'Just good company, the sea breeze, and maybe a few bad jokes from me.']
    ].map(function (r, i) {
      return '<div class="card reason"><span class="reason-num serif">0' + (i + 1) + '</span>' +
        '<span class="reason-title">' + esc(r[0]) + '</span><span class="reason-text">' + esc(r[1]) + '</span></div>';
    }).join('');
    return '' +
      '<div class="stack">' +
        '<div class="stack-sm">' +
          '<p class="eyebrow">Fair enough. Here\'s my pitch</p>' +
          '<h2 class="h2 serif">Four reasons to say yes</h2>' +
        '</div>' +
        '<div class="grid-reasons">' + reasons + '</div>' +
        '<div class="row">' +
          '<button class="btn-primary" data-action="yes">Okay, I\'m in</button>' +
          '<button class="btn" data-action="backToQuestion">Let me think</button>' +
        '</div>' +
      '</div>';
  }

  function skyView() {
    return '' +
      '<div class="stack">' +
        '<div class="stack-sm">' +
          '<p class="eyebrow muted">Yay! First things first</p>' +
          '<h2 class="h2 serif">Sunrise or sunset?</h2>' +
          '<p class="body">Pick the sky you want to watch together.</p>' +
        '</div>' +
        '<div class="grid-sky">' +
          '<button class="sky sky-sunrise" data-action="pickTime" data-id="sunrise">' +
            '<svg width="72" height="72" viewBox="0 0 48 48" fill="none" stroke="#B8532A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 34a14 14 0 0 1 28 0"></path><path d="M24 6v8M19 10l5-5 5 5M8 22l3 2M40 22l-3 2M4 34h40M10 41h28"></path></svg>' +
            '<span class="sky-text"><span class="sky-title serif">Sunrise</span>' +
            '<span class="sky-desc">Chennai faces east, so the sun comes up right out of the sea. Filter coffee, cool sand, and the beach almost to ourselves.</span></span>' +
          '</button>' +
          '<button class="sky sky-sunset" data-action="pickTime" data-id="sunset">' +
            '<svg width="72" height="72" viewBox="0 0 48 48" fill="none" stroke="#F4A06F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 34a14 14 0 0 1 28 0"></path><path d="M24 5v8M19 9l5 5 5-5M8 22l3 2M40 22l-3 2M4 34h40M10 41h28"></path></svg>' +
            '<span class="sky-text"><span class="sky-title serif">Sunset</span>' +
            '<span class="sky-desc">The sea breeze kicks in, the sky over the waves turns pink and gold, then a walk and dinner by the beach.</span></span>' +
          '</button>' +
        '</div>' +
      '</div>';
  }

  function dayView(d) {
    var sunrise = state.time !== 'sunset';
    var cards = dayOptions(state.time).map(function (dt) {
      var iso = toIso(dt);
      var wk = isWeekend(dt);
      var on = state.date === iso;
      return '' +
        '<button class="day' + (on ? ' selected' : '') + '" data-action="pickDay" data-id="' + iso + '" aria-pressed="' + on + '">' +
          '<span class="day-name serif">' + WD[dt.getDay()].slice(0, 3) + '</span>' +
          '<span class="day-date">' + dt.getDate() + ' ' + MO[dt.getMonth()].slice(0, 3) + '</span>' +
          '<span class="day-tag">' + (wk ? 'Weekend' : 'After 5 pm') + '</span>' +
        '</button>';
    }).join('');
    var max = toIso(addDays(new Date(), 90));
    var min = toIso(addDays(new Date(), 1));
    return '' +
      '<div class="stack" style="gap:28px">' +
        '<div class="stack-sm">' +
          '<p class="eyebrow">' + esc(d.timeLabel) + ' it is</p>' +
          '<h2 class="h2 serif">Which day works for you?</h2>' +
          '<p class="body">' + (sunrise
            ? 'Sunrise means an early start, so it\'s a weekend thing. Pick a Saturday or Sunday.'
            : 'Any weekend, or a weekday evening. On weekdays I\'ll pick you up after 5 pm, just in time for the sky.') + '</p>' +
        '</div>' +
        '<div class="grid-days">' + cards + '</div>' +
        '<div class="panel panel-curfew">' +
          '<div class="field">' +
            '<label for="date-pick">Or pick another date</label>' +
            '<input id="date-pick" class="time-input serif" type="date" min="' + min + '" max="' + max + '" value="' + esc(state.date || '') + '">' +
          '</div>' +
          '<p class="hint" aria-live="polite">' + esc(state.dateError || (state.date ? longDate(state.date) + '. Perfect.' : (sunrise ? 'Weekends only for sunrise.' : 'Weekday evenings or weekends.'))) + '</p>' +
          '<button class="btn-primary" data-action="confirmDay"' + (state.date ? '' : ' disabled') + ' style="margin-bottom:4px">That day works</button>' +
        '</div>' +
      '</div>';
  }

  function beachView(d) {
    var intro = state.time === 'sunset'
      ? 'Spots a bike ride from Velachery, where the evening breeze and the pink sky are worth it. The marked ones have rocks to sit on.'
      : 'Spots a bike ride from Velachery to watch the sun come up out of the Bay of Bengal. The marked ones have rocks to sit on.';
    var cards = BEACHES.map(function (b, i) {
      var tag = b.rocky
        ? '<span class="tag"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 19l4-7 3 3 4-8 7 12z"></path></svg>Rocks to sit on</span>'
        : '';
      return '' +
        '<button class="spot" data-action="pickBeach" data-id="' + esc(b.id) + '">' +
          '<span class="spot-top"><span class="chip-num serif">' + (i + 1) + '</span><span class="spot-area">' + esc(b.area) + '</span></span>' +
          '<span class="spot-body">' + tag +
            '<span class="spot-name serif">' + esc(b.name) + '</span>' +
            '<span class="spot-line">' + esc(b.line) + '</span>' +
          '</span>' +
          '<span class="spot-extra">' + esc(state.time === 'sunset' ? b.sunset : b.sunrise) + '</span>' +
        '</button>';
    }).join('');
    return '' +
      '<div class="stack">' +
        '<div class="stack-sm">' +
          '<p class="eyebrow">' + esc(d.timeLabel) + ' · ' + esc(d.dateShort) + '</p>' +
          '<h2 class="h2 serif">Which beach?</h2>' +
          '<p class="body">' + esc(intro) + '</p>' +
        '</div>' +
        '<div class="grid-spot">' + cards + '</div>' +
      '</div>';
  }

  function flowersView(d) {
    var picks = state.picks;
    var full = picks.length >= 3;
    var list = FLOWERS.map(function (f) {
      return Object.assign({}, f, {
        selected: picks.indexOf(f.id) !== -1,
        suggested: f.times.indexOf(state.time) !== -1 || f.beaches.indexOf(state.beach) !== -1
      });
    }).sort(function (a, b) { return (b.suggested ? 1 : 0) - (a.suggested ? 1 : 0); });

    var cards = list.map(function (f) {
      var cls = 'flower' + (f.selected ? ' selected' : '') + ((!f.selected && full) ? ' dim' : '');
      var check = f.selected
        ? '<span class="check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></span>'
        : '';
      var petals = [[17, 8], [26, 15], [22, 26], [12, 26], [8, 15]].map(function (p) {
        return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="6" fill="' + f.color + '" stroke="' + f.edge + '" stroke-width="1"></circle>';
      }).join('');
      return '' +
        '<button class="' + cls + '" data-action="toggleFlower" data-id="' + esc(f.id) + '" aria-pressed="' + (f.selected ? 'true' : 'false') + '">' +
          '<span class="flower-top">' +
            '<svg width="48" height="48" viewBox="0 0 34 34" aria-hidden="true">' + petals + '<circle cx="17" cy="17" r="4.5" fill="' + f.center + '"></circle></svg>' +
            check +
          '</span>' +
          '<span class="flower-names"><span class="flower-name">' + esc(f.name) + '</span><span class="flower-local">' + esc(f.local) + '</span></span>' +
          '<span class="flower-note">' + esc(f.note) + '</span>' +
          (f.suggested ? '<span class="suits">Suits your date</span>' : '') +
        '</button>';
    }).join('');

    return '' +
      '<div class="stack" style="gap:28px">' +
        '<div class="flowers-head">' +
          '<div class="stack-sm">' +
            '<p class="eyebrow">' + esc(d.timeLabel) + ' · ' + esc(d.bName) + '</p>' +
            '<h2 class="h2 serif">Pick your flowers</h2>' +
            '<p class="body">Choose up to three, all fresh from Chennai\'s flower markets. The marked ones suit your ' + esc(d.timeLabel.toLowerCase()) + ' at ' + esc(d.bName) + '.</p>' +
          '</div>' +
          '<div class="flowers-actions">' +
            '<span class="count" aria-live="polite">' + (picks.length === 0 ? 'Pick at least one' : picks.length + ' of 3 picked') + '</span>' +
            '<button class="btn" data-action="skipFlowers">No flowers, thanks</button>' +
            '<button class="btn-primary" data-action="finishFlowers"' + (picks.length === 0 ? ' disabled' : '') + '>That\'s my bouquet</button>' +
          '</div>' +
        '</div>' +
        '<div class="grid-flowers">' + cards + '</div>' +
      '</div>';
  }

  function homeByView(d) {
    var rides = RIDES.map(function (r) {
      var on = r.id === state.ride;
      return '<button class="ride-btn' + (on ? ' on' : '') + '" data-action="pickRide" data-id="' + r.id + '" aria-pressed="' + on + '">' + esc(r.label) + '</button>';
    }).join('');
    var hint = state.curfew
      ? 'Got it. I’ll plan the ride back so you’re home by ' + fmtTime(state.curfew) + '.'
      : 'Type or pick a time. I’ll plan everything around it.';
    return '' +
      '<div class="stack" style="gap:28px">' +
        '<div class="stack-sm">' +
          '<p class="eyebrow">' + esc(d.timeLabel) + ' · ' + esc(d.bName) + ' · ' + esc(d.bouquet) + '</p>' +
          '<h2 class="h2 serif">What time should I have you home?</h2>' +
          '<p class="body">Tell me your curfew and I\'ll plan the ride back so you\'re home on time, no rushing.</p>' +
        '</div>' +
        '<div class="panel panel-curfew">' +
          '<div class="field">' +
            '<label for="curfew-time">Home by</label>' +
            '<input id="curfew-time" class="time-input serif" type="time" value="' + esc(state.curfew || '') + '">' +
          '</div>' +
          '<p class="hint" aria-live="polite">' + esc(hint) + '</p>' +
        '</div>' +
        '<div class="panel panel-ride">' +
          '<div class="ride-info">' +
            '<span class="ride-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="17" r="3"></circle><circle cx="19" cy="17" r="3"></circle><path d="M5 17l4-7h6l4 7"></path><path d="M9 10l-1-3H6"></path><path d="M15 10l1-3h2"></path><path d="M12 10v4"></path></svg></span>' +
            '<span class="ride-text"><span class="ride-title">How should we get there?</span>' +
            '<span class="ride-sub">I\'m thinking my bike: a helmet for you, and I\'ll ride slow. Got a different idea?</span></span>' +
          '</div>' +
          '<div class="ride-options" role="group" aria-label="How we get there">' + rides + '</div>' +
          '<button class="btn-primary" data-action="confirm"' + (state.curfew ? '' : ' disabled') + '>Lock it in</button>' +
        '</div>' +
      '</div>';
  }

  function doneView(d) {
    var rows = [
      ['Day', d.dateLong],
      ['When', d.timeLabel + ' · ' + d.meetLine],
      ['Where', d.bName + ', ' + (d.beach ? d.beach.area : '')],
      ['Ride', d.ride.summary],
      ['Home by', d.curfewLabel],
      ['Her bouquet', d.bouquet]
    ].map(function (r) {
      return '<div class="summary-row"><span class="summary-key">' + esc(r[0]) + '</span><span class="summary-val">' + esc(r[1]) + '</span></div>';
    }).join('');
    return '' +
      '<div class="hero">' +
        '<div class="done-copy">' +
          '<h2 class="done-title serif">It\'s a <em>date.</em></h2>' +
          '<p class="lead">' + esc(d.closing) + '</p>' +
          '<div class="row">' +
            sendButton() +
            '<button class="btn" data-action="restart">Change something</button>' +
          '</div>' +
          '<p class="toast" aria-live="polite">' + esc(state.toast) + '</p>' +
          whatsappButton() +
        '</div>' +
        '<div class="card summary">' + rows + '</div>' +
      '</div>';
  }

  function sendButton() {
    var label = { idle: 'Send my answers to ' + CONFIG.name, sending: 'Sending…', sent: 'Sent ✓', failed: 'Try sending again' }[state.sendState];
    var off = state.sendState === 'sending' || state.sendState === 'sent';
    return '<button class="btn-primary" data-action="share"' + (off ? ' disabled' : '') + '>' + esc(label) + '</button>';
  }

  function whatsappButton() {
    var num = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
    if (!num || !CONFIG.web3formsKey) return '';
    return '<div><button class="btn" data-action="whatsapp">Or message ' + esc(CONFIG.name) + ' on WhatsApp</button></div>';
  }

  /* ---------------- render ---------------- */
  function render() {
    var d = derive();
    var t = d.t;
    var vars = Object.keys(t).map(function (k) { return '--' + k + ':' + t[k]; }).join(';');
    root.setAttribute('style', vars);
    document.documentElement.style.background = t.ground;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'theme-color'; document.head.appendChild(meta); }
    meta.content = t.ground;

    var body;
    if (state.step === 0) body = state.convince ? pitchView() : questionView();
    else if (state.step === 1) body = skyView();
    else if (state.step === 2) body = dayView(d);
    else if (state.step === 3) body = beachView(d);
    else if (state.step === 4) body = flowersView(d);
    else if (state.step === 5) body = homeByView(d);
    else body = doneView(d);

    var back = (state.step >= 1 && state.step <= 5)
      ? '<div><button class="btn-back" data-action="back">' + BACK_ICON + 'Back</button></div>'
      : '';

    root.innerHTML = sceneView(t) + headerView(t) + '<main class="main">' + back + body + '</main>';
  }

  /* ---------------- sending the answers ---------------- */
  function planText() {
    var d = derive();
    return 'Day: ' + d.dateLong + '\n' +
      'When: ' + d.timeLabel + ' (' + d.meetLine + ')\n' +
      'Where: ' + d.bName + ', ' + (d.beach ? d.beach.area : '') + '\n' +
      'Ride: ' + d.ride.summary + '\n' +
      'Home by: ' + d.curfewLabel + '\n' +
      'Flowers: ' + d.bouquet;
  }

  function openWhatsApp(text) {
    var num = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
    if (!num) return false;
    window.open('https://wa.me/' + num + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    return true;
  }

  function shareOrCopy(text) {
    if (navigator.share) {
      navigator.share({ title: 'My answers', text: text }).catch(function () {});
      return;
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text)
        .then(function () { setState({ toast: 'Copied. Paste it into a message to send it.' }); })
        .catch(function () { window.prompt('Copy your answers:', text); });
      return;
    }
    window.prompt('Copy your answers:', text);
  }

  function sendAnswers() {
    var text = planText();
    if (!CONFIG.web3formsKey) {
      if (!openWhatsApp(text)) shareOrCopy(text);
      return;
    }
    var d = derive();
    setState({ sendState: 'sending', toast: '' });
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: CONFIG.web3formsKey,
        subject: 'She answered ✨ ' + d.dateShort + ', ' + d.timeLabel.toLowerCase() + ' at ' + d.bName,
        from_name: 'Your little question',
        message: text + '\n\nNeeded convincing: ' + (state.convinced ? 'yes' : 'no') +
          '\nSent: ' + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        day: d.dateLong,
        sky: d.timeLabel,
        beach: d.bName,
        ride: d.ride.summary,
        home_by: d.curfewLabel,
        flowers: d.bouquet,
        needed_convincing: state.convinced ? 'yes' : 'no'
      })
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return r.ok && j.success !== false; }); })
      .then(function (ok) {
        if (ok) setState({ sendState: 'sent', toast: CONFIG.name + ' has your answers.' });
        else throw new Error('send failed');
      })
      .catch(function () {
        setState({ sendState: 'failed', toast: 'That didn’t go through. Check your connection and try again, or take a screenshot.' });
      });
  }

  /* ---------------- events ---------------- */
  root.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el || el.disabled) return;
    var id = el.getAttribute('data-id');
    switch (el.getAttribute('data-action')) {
      case 'yes': setState({ step: 1, convince: false }); break;
      case 'maybe': setState({ convince: true, convinced: true }); break;
      case 'backToQuestion': setState({ convince: false }); break;
      case 'back': setState({ step: Math.max(0, state.step - 1) }); break;
      case 'pickTime': setState({ time: id, step: 2, dateError: '', date: dateAllowed(state.date, id) ? state.date : null }); break;
      case 'pickDay': setState({ date: id, dateError: '', step: 3 }); break;
      case 'confirmDay': if (state.date) setState({ step: 3 }); break;
      case 'pickBeach': setState({ beach: id, step: 4 }); break;
      case 'toggleFlower':
        if (state.picks.indexOf(id) !== -1) setState({ picks: state.picks.filter(function (x) { return x !== id; }) });
        else if (state.picks.length < 3) setState({ picks: state.picks.concat(id), noFlowers: false });
        break;
      case 'skipFlowers': setState({ picks: [], noFlowers: true, step: 5 }); break;
      case 'finishFlowers': if (state.picks.length) setState({ step: 5, noFlowers: false }); break;
      case 'pickRide': setState({ ride: id }); break;
      case 'confirm': if (state.curfew) setState({ step: 6, toast: '', sendState: 'idle' }); break;
      case 'share': sendAnswers(); break;
      case 'whatsapp': openWhatsApp(planText()); break;
      case 'restart': setState({ step: 1, time: null, date: null, dateError: '', beach: null, picks: [], curfew: null, ride: 'bike', noFlowers: false, toast: '', sendState: 'idle' }); break;
    }
  });

  root.addEventListener('change', function (e) {
    if (e.target && e.target.id === 'date-pick') {
      var v = e.target.value;
      if (!v) { setState({ date: null, dateError: '' }); return; }
      if (dateAllowed(v, state.time)) setState({ date: v, dateError: '' });
      else if (fromIso(v) < addDays(new Date(), 1)) setState({ date: null, dateError: 'Pick a day from tomorrow onwards.' });
      else setState({ date: null, dateError: longDate(v) + ' is a weekday. Sunrise only works on a weekend, so try a Saturday or Sunday.' });
      return;
    }
    if (e.target && e.target.id === 'curfew-time') {
      setState({ curfew: e.target.value || null });
    }
  });

  render();
})();
