var text = ["porno hd", " porno hd", "t porno hd", "nt porno hd", "int porno hd", "aint porno hd", "saint porno hd", "lsaint porno hd", "llsaint porno hd", "illsaint porno hd","rillsaint porno hd", "krillsaint porno hd", "krillsain porno hd","krillsai porno hd","krillsa porno hd","krills porno hd","krill porno hd","kiril porno hd","kiri porno hd","kir porno hd","ki porno hd", "k porno hd", " porno hd", "porno hd"];
var counter = 0;
var inst = setInterval(change, 300);

function change() {
    document.title = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
    }
}