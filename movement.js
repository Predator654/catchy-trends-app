function tileSwap() {
    if (document.getElementById("tile1").style.backgroundColor === "red") {
        document.getElementById("tile1").style.backgroundColor = "cadetblue";
        document.getElementById("tile1:hover").style.backgroundColor = "#194F55";
    } else {
        document.getElementById("tile1").style.backgroundColor = "red";
    }
}
