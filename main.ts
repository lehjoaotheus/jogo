let p2 = 0
input.onPinPressed(TouchPin.P0, function () {
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
})
input.onPinPressed(TouchPin.P1, function () {
    p2 += 1
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # . . .
        # # . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
