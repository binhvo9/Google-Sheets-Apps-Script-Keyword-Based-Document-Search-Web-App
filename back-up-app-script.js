function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function searchDocuments(searchQuery) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var results = [];
  
  for (var i = 1; i < data.length; i++) {
    var content = data[i][3]; // Cột thứ 4 (cột từ khoá)
    
    if (content && content.toString().toLowerCase().includes(searchQuery.toLowerCase())) {
      results.push(data[i][2]); // Push content (cột thứ 3 là nội dung)
    }
  }
  
  return results;  // Trả về kết quả cho giao diện người dùng
}
