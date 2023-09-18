input.onButtonPressed(Button.A, function () {
    for (let jegy of jegyek) {
        gyujto = gyujto + jegy
    }
    atlag = gyujto / db
    basic.showNumber(atlag)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let atlag = 0
let db = 0
let jegyek: number[] = []
let gyujto = 0
gyujto = 0
jegyek = [
4,
4,
4,
5,
4,
4,
5,
5,
5,
5,
3
]
db = jegyek.length
basic.forever(function () {
	
})
