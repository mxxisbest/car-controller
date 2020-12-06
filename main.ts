function L1 () {
    serial.writeString("$" + index_X + index_Y + "," + X + Y + "#")
    serial.writeLine("")
}
function L2 () {
    serial.writeString("$" + index_X + index_Y + "," + X + "+" + Y + "#")
    serial.writeLine("")
}
function L3 () {
    serial.writeString("$" + index_X + index_Y + "," + "+" + X + Y + "#")
    serial.writeLine("")
}
function L4 () {
    serial.writeString("$" + index_X + index_Y + "," + "+" + X + "+" + Y + "#")
    serial.writeLine("")
}
let Y = 0
let X = 0
let index_Y = 0
let index_X = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P2) * -1 + 512
    Y = pins.analogReadPin(AnalogPin.P1) * -1 + 512
    if (Math.abs(X) < 10) {
        index_X = 2
    } else if (Math.abs(X) < 100) {
        index_X = 3
    } else if (Math.abs(X) < 1000) {
        index_X = 4
    }
    if (Math.abs(Y) < 10) {
        index_Y = 2
    } else if (Math.abs(Y) < 100) {
        index_Y = 3
    } else if (Math.abs(Y) < 1000) {
        index_Y = 4
    }
    if (X < 0 && Y < 0) {
        radio.sendString("$" + index_X + index_Y + "," + X + Y + "#")
    } else if (X < 0 && Y >= 0) {
        radio.sendString("$" + index_X + index_Y + "," + X + "+" + Y + "#")
    } else if (X >= 0 && Y < 0) {
        radio.sendString("$" + index_X + index_Y + "," + "+" + X + Y + "#")
    } else if (X >= 0 && Y >= 0) {
        radio.sendString("$" + index_X + index_Y + "," + "+" + X + "+" + Y + "#")
    }
})
basic.forever(function () {
    if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendNumber(1)
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendNumber(2)
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendNumber(3)
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(0)
    }
})
