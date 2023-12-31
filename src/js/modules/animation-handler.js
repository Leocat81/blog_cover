import anime from 'animejs';
import { ctx, cW, cH } from './canvas-config';

class AnimationHandler {
    constructor() {
        this.animations = [];
    }

    add(animation) {
        this.animations.push(animation);
    }

    remove(animation) {
        const index = this.animations.indexOf(animation);
        if (index > -1) {
            this.animations.splice(index, 1);
        }
    }

    init() {
        anime({
            duration: Infinity,
            update: () => {
                ctx.clearRect(0, 0, cW, cH);
                this.animations.forEach(animation => {
                    animation.animatables.forEach(animatable => {
                        console.log(animatable);
                        animatable.target.draw();
                    });
                });
            },
        });
    }
}

const animationHandler = new AnimationHandler();
animationHandler.init();
export { animationHandler };
