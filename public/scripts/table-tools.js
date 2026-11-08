// Adds search, filters, CSV export and an optional "cover the answers" mode
// to the table that comes just before a <div data-table-tools> marker.
(function () {
  function findTable(box) {
    var el = box.previousElementSibling, steps = 0;
    while (el && steps < 8) {
      if (el.tagName === 'TABLE') return el;
      if (/^H[1-6]$/.test(el.tagName)) return null;
      var t = el.querySelector && el.querySelector('table');
      if (t) return t;
      el = el.previousElementSibling; steps++;
    }
    return null;
  }
  var txt = function (n) { return (n.textContent || '').replace(/\s+/g, ' ').trim(); };

  function setup(box) {
    var table = findTable(box);
    if (!table || !table.tBodies.length) { box.remove(); return; }
    var heads = Array.prototype.map.call(table.querySelectorAll('thead th'), txt);
    var rows = Array.prototype.slice.call(table.tBodies[0].rows);
    var quiz = box.getAttribute('data-mode') === 'quiz';
    var bar = box;
    bar.className = 'table-tools';

    var search = document.createElement('input');
    search.type = 'search'; search.placeholder = 'Search this table'; search.setAttribute('aria-label', 'Search this table');
    bar.appendChild(search);

    var selects = [];
    if (rows.length >= 5) {
      heads.forEach(function (h, i) {
        if (i === 0 || !h) return;
        var vals = {};
        rows.forEach(function (r) { var c = r.cells[i]; if (c) { var v = txt(c); if (v) vals[v] = 1; } });
        var keys = Object.keys(vals);
        if (keys.length >= 2 && keys.length <= 8 && keys.every(function (k) { return k.length <= 40; })) {
          var s = document.createElement('select');
          s.setAttribute('aria-label', 'Filter by ' + h);
          var o = document.createElement('option'); o.value = ''; o.textContent = h + ': all'; s.appendChild(o);
          keys.sort().forEach(function (k) { var op = document.createElement('option'); op.value = k; op.textContent = k; s.appendChild(op); });
          bar.appendChild(s); selects.push([i, s]);
        }
      });
    }

    var count = document.createElement('span'); count.className = 'count'; count.setAttribute('aria-live', 'polite');

    function apply() {
      var q = search.value.toLowerCase(), shown = 0;
      rows.forEach(function (r) {
        var ok = !q || txt(r).toLowerCase().indexOf(q) !== -1;
        selects.forEach(function (p) { if (ok && p[1].value && txt(r.cells[p[0]]) !== p[1].value) ok = false; });
        r.classList.toggle('tt-hidden', !ok);
        if (ok) shown++;
      });
      count.textContent = shown + ' of ' + rows.length + ' rows';
    }
    search.addEventListener('input', apply);
    selects.forEach(function (p) { p[1].addEventListener('change', apply); });

    var reset = document.createElement('button'); reset.type = 'button'; reset.textContent = 'Reset';
    reset.addEventListener('click', function () { search.value = ''; selects.forEach(function (p) { p[1].value = ''; }); apply(); });
    bar.appendChild(reset);

    var csv = document.createElement('button'); csv.type = 'button'; csv.textContent = 'Download CSV';
    csv.addEventListener('click', function () {
      var esc = function (s) { return '"' + s.replace(/"/g, '""') + '"'; };
      var lines = [heads.map(esc).join(',')];
      rows.forEach(function (r) { if (!r.classList.contains('tt-hidden')) lines.push(Array.prototype.map.call(r.cells, function (c) { return esc(txt(c)); }).join(',')); });
      var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'table.csv';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    bar.appendChild(csv);

    if (quiz) {
      var last = heads.length - 1;
      var covered = true;
      var setCover = function (on) {
        covered = on;
        rows.forEach(function (r) { var c = r.cells[last]; if (c) { c.classList.toggle('tt-covered', on); c.setAttribute('title', on ? 'Click to reveal' : ''); } });
        tog.textContent = on ? 'Reveal all answers' : 'Cover the answers';
      };
      var tog = document.createElement('button'); tog.type = 'button';
      tog.addEventListener('click', function () { setCover(!covered); });
      bar.appendChild(tog);
      rows.forEach(function (r) { var c = r.cells[last]; if (c) c.addEventListener('click', function () { if (covered) c.classList.toggle('tt-covered'); }); });
      var hint = document.createElement('span'); hint.textContent = 'Quiz mode: read the scenario, decide, then click the last column.';
      bar.appendChild(hint);
      setCover(true);
    }
    bar.appendChild(count);
    apply();
  }
  // Accessibility: wide tables scroll sideways, so keyboard users must be able to focus them;
  // checklist boxes from the Markdown need a name.
  function a11y() {
    document.querySelectorAll('.sl-markdown-content table').forEach(function (t) {
      if (t.scrollWidth > t.clientWidth + 1) {
        t.setAttribute('tabindex', '0'); t.setAttribute('role', 'region');
        var cap = t.querySelector('th'); t.setAttribute('aria-label', 'Table' + (cap ? ' starting with ' + (cap.textContent || '').trim() : '') + ', scrolls sideways');
      }
    });
    document.querySelectorAll('.task-list-item input[type="checkbox"]').forEach(function (c) {
      if (!c.getAttribute('aria-label')) c.setAttribute('aria-label', (c.parentElement.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 120) || 'Checklist item');
    });
  }
  function init() { document.querySelectorAll('[data-table-tools]').forEach(setup); a11y(); window.addEventListener('resize', a11y); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
