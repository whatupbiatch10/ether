

var element = $("#widget"); // global variable
    var getCanvas; // global variable

    html2canvas(element, {
             onrendered: function (canvas) {
                    $("#copyDiv").append(canvas);
                    getCanvas = canvas;
                 }
      });