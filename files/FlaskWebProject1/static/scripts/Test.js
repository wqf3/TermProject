$("#b").click(function () {
    //alert($("#test2").val());
});

var choice1ByColumn = true;
var Row = new Array();
var Column = new Array();

/*
$("#choice1Type").click(function () {
    var rowLength = $("#dataTable1 tr").length;
    var columnLength = $("#dataTable1 tr td").length / rowLength;
    if (choice1ByColumn == false) {
        $("#choice1Type").text("按列选择");
        choice1ByColumn = true
        for (var i = 0; i < rowLength; i++) {
            if (Row[i]) {
                for (var j = 0; j < columnLength; j++) {
                    var td = $("#dataTable1").find("tr:eq(" + i + ") td:eq(" + j + ")");
                    td.removeClass("tbl-styleChosen");
                }
                Row[i] = false;
            }
        }
    }
    else {
        $("#choice1Type").text("按行选择");
        choice1ByColumn = false;
        for (var j = 0; j < columnLength; j++) {
            if (Column[j]) {
                for (var i = 0; i < rowLength; i++) {
                    var td = $("#dataTable1").find("tr:eq(" + i + ") td:eq(" + j + ")");
                    td.removeClass("tbl-styleChosen");
                }
                Column[j] = false;
            }
        }
    }
})
*/

$('#dataTable1 tr td').click(
    function () {
        var rowLength = $("#dataTable1 tr").length;
        var columnLength = $("#dataTable1 tr td").length / rowLength;
        var table = $(this).parent().parent();
        var rowI = table.find("tr").index($(this).parent()[0]);
        var columnI = $(this).index();
        if (choice1ByColumn) {
            for (var i = 1; i < rowLength; i++) {
                var td = $("#dataTable1").find("tr:eq(" + i + ") td:eq(" + columnI + ")");
                if (Column[columnI] === true) {
                    td.removeClass("tbl-styleChosen");
                }
                else {
                    if (columnI > 0) {
                        td.addClass("tbl-styleChosen");
                    }
                }
            }
            Column[columnI] = !Column[columnI];
        }
        else {
            for (var i = 1; i < columnLength; i++) {
                var td = $("#dataTable1").find("tr:eq(" + rowI + ") td:eq(" + i + ")");
                if (Row[rowI] === true) {
                    td.removeClass("tbl-styleChosen");
                }
                else {
                    if (rowI > 0) {
                        td.addClass("tbl-styleChosen");
                    }
                }
            }
            Row[rowI] = !Row[rowI];
        }
    }
);

$("#choice1Submit").click(
    function () {
        var rowLength = $("#dataTable1 tr").length;
        var columnLength = $("#dataTable1 tr td").length / rowLength;
        var hasChosen = false;
        var testJson = '{"year":["2010年","2012年","2014年","2016年","2018年"],"title":[';
        for (var j = 1; j < columnLength; j++) {
            if (Column[j]) {
                var td = $("#dataTable1").find("tr:eq(" + 0 + ") td:eq(" + j + ")");
                testJson += '"';
                testJson += td.text().substring(2, td.text().length - 2);
                testJson += '"';
                testJson += ',';
            }
        }
        testJson = testJson.substring(0, testJson.length - 1);
        testJson += '],';
        testJson += '"data":[';
        //var testJson = '{"data":['

        if (!choice1ByColumn) {
            for (var i = 1; i < rowLength; i++) {
                if (Row[i]) {
                    hasChosen = true;
                    var testColumn = '[';
                    for (var j = 1; j < columnLength; j++) {
                        var td = $("#dataTable1").find("tr:eq(" + i + ") td:eq(" + j + ")");
                        testColumn += '"';
                        testColumn += td.text().substring(2, td.text().length - 2);
                        testColumn += '"';
                        testColumn += ',';
                    }
                    testColumn = testColumn.substring(0, testColumn.length - 1);
                    testColumn += '],';
                    testJson += testColumn;
                }
            }
        }
        else {
            for (var j = 1; j < columnLength; j++) {
                if (Column[j]) {
                    hasChosen = true;
                    var testRow = '['
                    for (var i = 1; i < rowLength; i++) {
                        var td = $("#dataTable1").find("tr:eq(" + i + ") td:eq(" + j + ")");
                        testRow += '"';
                        testRow += td.text().substring(2, td.text().length - 2);
                        testRow += '"';
                        testRow += ',';
                    }
                    testRow = testRow.substring(0, testRow.length - 1);
                    testRow += '],';
                    testJson += testRow;
                }
            }
        }
        testJson = testJson.substring(0, testJson.length - 1);
        testJson += ']}';
        var Form = document.forms['send'];
        if (hasChosen) {
            Form.jsonval.value = testJson;
            Form.submit();
        }
        else {
            alert('暖暖地，为什么不选！选！选！');
        }
    }
)