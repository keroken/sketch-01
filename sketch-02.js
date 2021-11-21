const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width / 2;
    const cy = height / 2;

    const w = 10;
    const h = 100;

    let x, y;

    const num = 12;
    const radius = 300;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(1, 3), 1)

      context.beginPath();
      context.rect( -w / 2, -h / 2, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
