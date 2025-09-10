class Collisions extends ArcadePhysicsEngine {
    constructor() { super() }

    // this is a skeleton we do not need code because the run time already has code for it
     _tilemapCollisions(movingSprite: MovingSprite, tm: tiles.TileMap) {super.tilemapCollisions(movingSprite, tm)}
    
    _screenEdgeCollisions(movingSprite: MovingSprite, bounce: number, camera: scene.Camera) {}

    _spriteCollisions(movedSprites: MovingSprite[], handlers: scene.OverlapHandler[]) { }
}

namespace game {
    /**
     * this is similar to the original current scene but I added a new one because there are new objects in this function now
     */
   export function currentScene2() {
       return currentScene() as scene.Scene2
   }
}

namespace scene {
    export class Scene2 extends Scene{
        constructor() { 
            super(control.eventContext()) 
            this.collision = new Collisions()
        }

        collision: Collisions
    }
}
