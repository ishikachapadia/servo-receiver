radio.setGroup(55)
let lastS1 = 0
let lastS2 = 0

radio.onReceivedValue(function (name, value) {
    if (name == "s1") {
        if (value != lastS1) {
            pins.servoWritePin(AnalogPin.P1, value)
            music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
            lastS1 = value
        }
    } else if (name == "s2") {
        if (value != lastS2) {
            pins.servoWritePin(AnalogPin.P2, value)
            music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.OnceInBackground)
            lastS2 = value
        }
    }
})