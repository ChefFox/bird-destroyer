controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    barf = sprites.createProjectileFromSprite(assets.image`barf`, bird, 0, -140)
    barf.startEffect(effects.coolRadial, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
})
let barf: Sprite = null
let bird: Sprite = null
let meds = [
sprites.skillmap.potion0,
sprites.skillmap.potion1,
sprites.skillmap.potion2,
sprites.skillmap.potion3,
sprites.skillmap.potion4,
sprites.skillmap.potion13
]
bird = sprites.create(sprites.skillmap.pigeonIcon, SpriteKind.Player)
bird.setStayInScreen(true)
bird.bottom = 120
controller.moveSprite(bird, 100, 100)
info.setLife(3)
effects.clouds.startScreenEffect()
game.onUpdateInterval(500, function () {
    barf = sprites.createProjectileFromSide(meds[randint(0, meds.length - 1)], 0, 75)
    barf.setKind(SpriteKind.Enemy)
    barf.x = randint(10, 150)
})
