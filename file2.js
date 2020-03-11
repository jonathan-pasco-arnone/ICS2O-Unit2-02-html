function change() {
    var str = "Hello, World!";
    var result = str.fontcolor("tomato");
    var after = result.fontsize (7);
    document.getElementById("special").innerHTML = after;
    document.getElementById("special").style.font = "italic bold 20px arial,serif";}