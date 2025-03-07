setTimeout(() => {
    alert("Hello, world! (from js)");
}, 700);

const fileInput = document.getElementById('fileInput');
const fileContent = document.getElementById('fileContent');
const txt = document.getElementById('txt');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        fileContent.textContent = reader.result;
    };
    txt.innerText = fileContent.textContent;
    reader.readAsText(file);
});
