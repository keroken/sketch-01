const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    context.fillStyle = 'black';

    const cx = width / 2;
    const cy = height / 2;

    const w = 10;
    const h = 100;

    let x, y;

    const num = 12;
    const radius = 300;

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(1, 2)

      context.beginPath();
      context.rect( -w / 2, -h / 2, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
