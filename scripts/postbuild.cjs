const fs = require('fs');
const p = 'dist/index.html';
try {
  let s = fs.readFileSync(p, 'utf8');
  const t = new Date().toISOString();
  s = s.replace('</head>', `<!-- built: ${t} --></head>`);
  s = s.replace('</body>', `<div id="deploy-banner" style="position:fixed;bottom:8px;right:8px;padding:6px 8px;background:#0b74de;color:#fff;border-radius:6px;font-family:sans-serif;font-size:12px;z-index:9999">LIVE BUILD ${t}</div></body>`);
  fs.writeFileSync(p, s);
  fs.copyFileSync(p, 'dist/404.html');
  console.log('postbuild.cjs: injected banner and copied 404.html');
} catch (err) {
  console.error('postbuild.cjs error:', err.message);
  process.exit(1);
}
