const readCsv = (filePath) =>{
    var csvData = new Array();
	var data = new XMLHttpRequest();	
	data.open("GET", filePath, false); //true:非同期,false:同期
    data.send(null);

	var LF = String.fromCharCode(10); //改行コード
	var lines = data.responseText.split(LF);
	for (var i = 0; i < lines.length;++i) {
		var cells = lines[i].split(",");
		if(cells.length != 1) {
			csvData.push(cells);
		}
	}
	return csvData;
}

export default readCsv;