// Interactive self-assessment: reads the questions from the data file and scores them live.
(function () {
  var root = document.querySelector('[data-self-assess]');
  if (!root) return;
  var src = root.getAttribute('data-src');
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
  var OPTS = [['Yes', 'Yes'], ['Partly', 'Partly'], ['No', 'No'], ['NA', 'Not applicable']];
  var KEY = 'clinicx-self-assessment-v1';

  fetch(src).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(build).catch(function () {
    root.textContent = 'The interactive checklist could not be loaded. Use the printable checklist in the downloads below.';
  });

  function build(data) {
    root.className = 'sa';
    root.textContent = '';
    var answers = {};
    try { answers = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { answers = {}; }
    var save = function () { try { localStorage.setItem(KEY, JSON.stringify(answers)); } catch (e) { /* storage may be blocked */ } };

    var tools = el('div', 'tools');
    var bBase = el('button', '', 'Load the Clinic X baseline (7 Dec 2026)'); bBase.type = 'button';
    var bClear = el('button', '', 'Clear my answers'); bClear.type = 'button';
    tools.appendChild(bBase); tools.appendChild(bClear);
    root.appendChild(tools);
    root.appendChild(el('p', 'note', 'Your answers stay in this browser. Nothing is sent anywhere.'));

    var radios = {}, notes = {};
    data.modules.forEach(function (m) {
      var fs = el('fieldset'); fs.appendChild(el('legend', '', m.module + '. ' + m.title));
      m.questions.forEach(function (q) {
        var d = el('div', 'q');
        d.appendChild(el('p', 'qt', q.id + '  ' + q.question));
        d.appendChild(el('p', 'ev', 'Evidence: ' + q.evidence));
        var o = el('div', 'opts'); o.setAttribute('role', 'radiogroup'); o.setAttribute('aria-label', q.id + ' ' + q.question);
        OPTS.forEach(function (op) {
          var l = el('label'); var i = document.createElement('input'); i.type = 'radio'; i.name = 'q' + q.id; i.value = op[0];
          i.addEventListener('change', function () { answers[q.id] = op[0]; save(); update(); });
          (radios[q.id] = radios[q.id] || []).push(i);
          l.appendChild(i); l.appendChild(document.createTextNode(op[1])); o.appendChild(l);
        });
        d.appendChild(o);
        var n = el('p', 'note'); notes[q.id] = n; d.appendChild(n);
        fs.appendChild(d);
      });
      root.appendChild(fs);
    });

    var score = el('div', 'score'); score.setAttribute('aria-live', 'polite');
    var big = el('div'); var bar = el('div', 'bar'); var fill = el('span'); bar.appendChild(fill);
    score.appendChild(big); score.appendChild(bar);
    root.appendChild(score);
    var detail = el('div', 'detail'); detail.appendChild(el('h3', '', 'What the score means'));
    var band = el('p'); var areas = el('div', 'areas');
    detail.appendChild(band); detail.appendChild(areas);
    root.appendChild(detail);

    function pick(id) { return answers[id] || ''; }
    function update() {
      var got = 0, max = 0, answered = 0, total = 0;
      areas.textContent = '';
      data.modules.forEach(function (m) {
        var g = 0, x = 0;
        m.questions.forEach(function (q) {
          total++; var a = pick(q.id);
          (radios[q.id] || []).forEach(function (r) { r.checked = r.value === a; });
          if (!a) return; answered++;
          if (a === 'NA') return;
          x += 2; g += data.points[a];
        });
        got += g; max += x;
        areas.appendChild(el('div', '', m.module + '. ' + m.title + ': ' + g + '/' + x));
      });
      var pct = max ? Math.round((got * 100) / max) : 0;
      big.textContent = '';
      var s = el('strong', '', got + ' / ' + max + (max ? '  (' + pct + '%)' : '')); big.appendChild(s);
      big.appendChild(document.createTextNode('   ' + answered + ' of ' + total + ' questions answered'));
      fill.style.width = pct + '%';
      band.textContent = '';
      if (answered === total && max) {
        var b = pct < 40 ? data.bands[0] : (pct <= 70 ? data.bands[1] : data.bands[2]);
        band.appendChild(el('strong', '', b[0] + ': ')); band.appendChild(document.createTextNode(b[1] + '. Where to start: ' + b[2] + '.'));
      } else { band.textContent = 'Answer every question to see what the score means.'; }
    }
    bBase.addEventListener('click', function () {
      var base = data.clinicXBaseline.answers;
      Object.keys(base).forEach(function (id) { answers[id] = base[id].answer === 'Not applicable' ? 'NA' : base[id].answer; if (notes[id]) notes[id].textContent = 'Clinic X: ' + base[id].note; });
      save(); update();
    });
    bClear.addEventListener('click', function () { answers = {}; Object.keys(notes).forEach(function (k) { notes[k].textContent = ''; }); save(); update(); });
    update();
  }
})();
