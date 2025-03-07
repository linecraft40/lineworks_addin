const fileInput = document.getElementById('fileInput');
const fileContent = document.getElementById('fileContent');
const sizeLimit = 1024 * 1024 * 1;　// 制限サイズ 1MB

// ファイル選択イベント定義
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    if(file.size > sizeLimit){
        throw new Exception("ファイルサイズが1MBを超えています。");
    }

    // ファイル読込時イベント定義
    reader.onload = () => {
        // テキストを保持する
        fileContent.textContent = reader.result;
    };

    // ファイル読込
    reader.readAsText(file);
});

