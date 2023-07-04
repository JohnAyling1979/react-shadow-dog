export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 700;
export const SPRITE_WIDTH = 575;
export const SPRITE_HEIGHT = 523;
export const BACKGROUND_WIDTH = 2400;

export const ANIMATION_MAP = {
  0: {
    frames: 5,
    stagger: 5,
    name: 'Idle',
    repeat: true,
  },
  1: {
    frames: 5,
    stagger: 5,
    name: 'Jump',
    repeat: true,
  },
  2: {
    frames: 5,
    stagger: 5,
    name: 'Fall',
    repeat: true,
  },
  3: {
    frames: 7,
    stagger: 5,
    name: 'Run',
    repeat: true,
  },
  4: {
    frames: 9,
    stagger: 5,
    name: 'Dizzy',
    repeat: false,
  },
  5: {
    frames: 3,
    stagger: 5,
    name: 'Sit',
    repeat: true,
  },
  6: {
    frames: 5,
    stagger: 5,
    name: 'Roll',
    repeat: true,
  },
  7: {
    frames: 6,
    stagger: 5,
    name: 'Bite',
    repeat: false,
  },
  8: {
    frames: 11,
    stagger: 5,
    name: 'KO',
    repeat: false,
  },
  9: {
    frames: 3,
    stagger: 5,
    name: 'Hit',
    repeat: false,
  },
}
