//号内ランダムリンク
function In(){
    var k=Math.floor(Math.random() * 50) + 1;
    var c= k + ".html";
    location.href=(c);
}

//号際ランダムリンク
function Out(){
    var fol=Math.floor(Math.random() * 6) + 4;
    var k=Math.floor(Math.random() * 50) + 1;
    var l= "../" + fol + "/" + k + ".html";
    location.href=(l);
}