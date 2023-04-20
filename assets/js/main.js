function ededigeriyazma(num) {
    var arr = num;
    var eks = 0;
    var teklik;
    while (num > 0) {
        teklik = num % 10;
        num = (num - teklik ) / 10;
        eks = eks *10 + teklik;
    }
    if (eks == arr) {
        return "eded palinromdur"
    }
    return "deyil"
}
alert(ededigeriyazma(+prompt("dedi daxil edin")))