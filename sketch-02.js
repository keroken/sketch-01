const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const x = 0;
    const y = 0;
    const w = 300;
    const h = 300;

    context.save();

    context.translate(width / 2, height / 2);
    context.rotate(0.3);

    context.beginPath();
    context.rect( -w / 2, -h / 2, w, h);
    context.fill();

    context.restore();
  };
};

canvasSketch(sketch, settings);
