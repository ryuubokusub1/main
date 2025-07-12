function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

async function loadMenu() {
  try {
    const res = await fetch('menu.html');
    if (!res.ok) throw new Error('読み込み失敗');
    const html = await res.text();
    document.getElementById("menu-content").innerHTML = html;
  } catch (e) {
    document.getElementById("menu-content").innerHTML = 'メニューを読み込めませんでした。';
  }
}

async function loadBanner() {
  try {
    const res = await fetch('banner.txt');
    if (!res.ok) throw new Error('読み込み失敗');
    const html = await res.text();
    document.getElementById("banner").innerHTML = html;
  } catch (e) {
    document.getElementById("banner").innerHTML = '<pre>バナー読み込み失敗</pre>';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadMenu();
  loadBanner();
});
