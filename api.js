const btnSend = document.getElementById('send');

btnSend.addEventListener('click', (e) => {
    if(fileContent.textContent.length == 0) {
        alert("ファイルが選択されていないか、無効なファイルです。");
        return;
    }
    alert(fileContent.textContent);
});
