// The game's .ini tweak files: [Section] headers, "Key = value  # comment" lines. Edits keep every
// other line (comments, blank lines, the file's CRLF or LF) exactly as it was.
const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');

export function parseIni(text) {
  const nl = /\r\n/.test(text) ? '\r\n' : '\n';
  const lines = text.split(/\r?\n/), out = { nl, lines, entries: [] };
  let sec = '';
  lines.forEach((line, i) => {
    const h = /^\s*\[([^\]]+)\]/.exec(line);
    if (h) { sec = h[1].trim(); out.entries.push({ kind: 'section', sec, line: i }); return; }
    const m = /^(\s*)([^#;=\s][^=#;]*?)(\s*=\s*)([^#;\r\n]*?)(\s*(?:[#;].*)?)$/.exec(line);
    if (m) out.entries.push({ kind: 'key', sec, key: m[2], value: m[4], line: i, parts: m });
  });
  return out;
}
// value of [sec] key (the last one wins, like a later line overriding an earlier one)
export function iniGet(ini, sec, key) {
  let v; for (const e of ini.entries) if (e.kind === 'key' && norm(e.sec) === norm(sec) && norm(e.key) === norm(key)) v = e.value.trim();
  return v;
}
// set values: changes = [[sec, key, value]]; replaces the key's line in place, or adds it to the
// end of its section (adding the section at the end of the file if it isn't there)
export function iniSet(text, changes) {
  let ini = parseIni(text);
  for (const [sec, key, value] of changes) {
    const hits = ini.entries.filter((e) => e.kind === 'key' && norm(e.sec) === norm(sec) && norm(e.key) === norm(key));
    const lines = ini.lines.slice();
    if (hits.length) {
      for (const e of hits) { const p = e.parts; lines[e.line] = p[1] + p[2] + p[3] + value + p[5]; }
    } else {
      const secs = ini.entries.filter((e) => e.kind === 'section' && norm(e.sec) === norm(sec));
      if (secs.length) {
        const s = secs[secs.length - 1];
        // after the section's last key line
        let at = s.line;
        for (const e of ini.entries) if (e.line > s.line && e.kind === 'key' && e.sec === s.sec && !ini.entries.some((x) => x.kind === 'section' && x.line > s.line && x.line < e.line)) at = e.line;
        lines.splice(at + 1, 0, `${key} = ${value}`);
      } else {
        while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
        lines.push('', `[${sec}]`, '', `${key} = ${value}`, '');
      }
    }
    ini = parseIni(lines.join(ini.nl));
  }
  return ini.lines.join(ini.nl);
}
