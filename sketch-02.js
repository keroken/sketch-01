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

    const x = 0;
    const y = 0;
    const w = 100;
    const h = 10;

    const num = 12;

    for (let i = 0; i < num; i++) {
      const slice = degToRad(360 / num);
      const angle = slice * i;

      context.save();
      context.translate(width / 2, height / 2);
      context.rotate(angle);

      context.beginPath();
      context.rect( -w / 2, -h / 2, w, h);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
