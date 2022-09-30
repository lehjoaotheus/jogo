let TAYLOR_SWIFT = false
let p2 = 0
let p1 = 0
input.onPinPressed(TouchPin.P0, function () {
    TAYLOR_SWIFT = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("let´s play girl")
    basic.pause(randint(1000, 5000))
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (TAYLOR_SWIFT == false) {
        TAYLOR_SWIFT = true
        p2 += 1
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . # # #
            . . # # #
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (TAYLOR_SWIFT == false) {
        TAYLOR_SWIFT = true
        p1 += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
        basic.pause(2000)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (p1 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(200)
        }
        basic.showString("player 1 - WIN")
        p1 = 0
        p2 = 0
    } else if (p2 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # . # .
                # . # . #
                # . . . #
                . # . # .
                . . # . .
                `)
            basic.pause(200)
        }
        basic.showString("player 2 - WIN")
    } else {
        p2 = 0
        p1 = 0
    }
})
