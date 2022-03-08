let kecerahan_cahaya = 0
basic.forever(function () {
    // baca kecerahan cahaya
    kecerahan_cahaya = input.lightLevel()
    // sekiranya kecerahan cahaya kurang 500
    // P0 guna sensor pergerakan
    if (kecerahan_cahaya < 50 && input.pinIsPressed(TouchPin.P0)) {
        // output ke lampu luar 
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showString("hati2 berjalan masa gelap")
        basic.pause(2000)
    }
    // output ke lampu luar 
    pins.digitalWritePin(DigitalPin.P1, 0)
})
