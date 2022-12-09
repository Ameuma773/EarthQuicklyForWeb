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

    let elements = document.getElementsByName('q1');
    let len = elements.length;
    let Value = '';

    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            Value = elements.item(i).value;
        }
    }

    localStorage.setItem('Quake_Mode', Value);
    
    elements = document.getElementsByName('q2');
    len = elements.length;
    Value = '';

    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            Value = elements.item(i).value;
        }
    }

    localStorage.setItem('KyoshinMonitor_Use', Value);

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