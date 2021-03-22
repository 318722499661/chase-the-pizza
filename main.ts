sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.startCountdown(60)
    Pizza.setPosition(randint(10, 160), randint(10, 120))
    info.changeScoreBy(1)
})
let Pizza: Sprite = null
scene.setBackgroundColor(9)
let SmileGuy = sprites.create(assets.image`Smile guy`, SpriteKind.Player)
controller.moveSprite(SmileGuy)
Pizza = sprites.create(assets.image`Pizza`, SpriteKind.Food)
