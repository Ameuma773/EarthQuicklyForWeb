window.onload = () => {
    document.getElementById('EEWInt').addEventListener('input', EEWOnChange);
    document.getElementById('QuakeInt').addEventListener('input', QuakeOnChange);
}

const EEWOnChange = (e) => {
    document.getElementById('EEWNowInt').innerText = document.getElementById('EEWInt').value + "秒";
}

const QuakeOnChange = (e) => {
    document.getElementById('QuakeNowInt').innerText = document.getElementById('QuakeInt').value + "秒";
}

function save() {
    localStorage.setItem('EEWInterval', document.getElementById('EEWInt').value);
    localStorage.setItem('QuakeInterval', document.getElementById('QuakeInt').value);
    var result = window.confirm("設定を保存しました。\nメイン画面に戻りますか？");

    if (result) {
        window.location.href = "index.html";
    }
}

function reset() {
    var result = window.confirm("設定をリセットしますか？");

    if (result) {
        localStorage.clear();
        alert("設定はリセットされました。");
    }
}