namespace SpriteKind {
    export const Asteroide = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        8 8 8 . . . 8 8 . . . . . . . . 
        8 . 8 . . . 8 8 . . . . . . 8 . 
        8 8 8 . . . 8 . 8 . . 8 . 8 8 . 
        8 8 8 8 . 8 8 8 8 . . 8 8 8 8 . 
        8 . . 8 8 8 . . 8 8 8 8 8 8 8 . 
        8 8 8 8 8 . . . . 8 . . . . . . 
        . . . . . . . . . 8 8 . . . . . 
        . . . . 8 8 8 . 8 8 8 . . . . . 
        . . . 8 8 . 8 8 8 . 8 . . . . . 
        . . . 8 . . . 8 . . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    AsteroidAsteroid.setVelocity(0, 50)
    mySprite2.setVelocity(0, 50)
})
let projectile2: Sprite = null
let mySprite2: Sprite = null
let AsteroidAsteroid: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . . . d . . . . . . . . 
    . . . . . . 8 d 8 . . . . . . . 
    . . . . . 8 8 . 8 8 . . . . . . 
    . . . . 8 8 . . . 8 8 8 . . . . 
    . . 8 8 8 . . . . . . 8 8 . . . 
    . 8 8 . . . . . . . . . 8 . . . 
    8 8 . . . . . . . . . . 8 8 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
AsteroidAsteroid = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . f f c c c c . . . . . . 
    . . . f f f c a a c . . . . . . 
    . . f f a a c a a a c . . . . . 
    . . f f a a c a a a c . . . . . 
    . . f f a a c c c c c . . . . . 
    . . f a a f a a a c c . . . . . 
    . . . a a f c a a c c . . . . . 
    . . . . . f c c c c . . . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Asteroide)
AsteroidAsteroid.setPosition(66, 3)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . f f c c c c . . . . . . 
    . . . f f f c a a c . . . . . . 
    . . f f a a c a a a c . . . . . 
    . . f f a a c a a a c . . . . . 
    . . f f a a c c c c c . . . . . 
    . . f a a f a a a c c . . . . . 
    . . . a a f c a a c c . . . . . 
    . . . . . f c c c c . . . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Asteroide)
