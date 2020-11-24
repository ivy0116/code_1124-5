input.onButtonPressed(Button.A, function () {
    A.set(LedSpriteProperty.Direction, 180)
    A.move(1)
})
input.onButtonPressed(Button.B, function () {
    B.set(LedSpriteProperty.X, 180)
    B.move(1)
})
let B: game.LedSprite = null
let A: game.LedSprite = null
A = game.createSprite(0, 2)
B = game.createSprite(4, 2)
basic.forever(function () {
    if (A.isTouching(B)) {
        game.addScore(100)
        game.gameOver()
    }
})
