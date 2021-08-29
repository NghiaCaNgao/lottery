export default class GameControl {
  labels = [];
  colors = [
    "#D2F1E4",
    "#E7DEEA",
    "#FBCAEF",
    "#FA98D0",
    "#F865B0",
    "#E637BF",
    "#EF4EB8",
    "#E637BF"
  ];

  textRadius = 200;
  circleRadius = 300;

  constructor(element, { labels }) {
    this.element = element.getContext("2d");
    this.labels = labels;
  }

  get getData() {
    return {
      element: this.element,
      colors: this.color,
      labels: this.labels,
      textRadius: this.textRadius,
      circleRadius: this.circleRadius
    };
  }

  drawPiece(index) {
    const ctx = this.element;
    // Cal
    const number = this.labels.length;
    const baseAngle = (2 * Math.PI) / number;
    const aStart = index * baseAngle;
    const aEnd = (index + 1) * baseAngle;
    const baseLine = aStart + baseAngle / 2;

    // Draw
    ctx.beginPath();
    ctx.arc(0, 0, this.circleRadius, aStart, aEnd);
    ctx.lineTo(0, 0);
    ctx.fillStyle = this.colors[index];
    ctx.fill();
    ctx.closePath();

    // Fill label
    ctx.rotate(baseLine);
    ctx.fillStyle = "white";
    ctx.fillText(this.labels[index], this.textRadius, 0);
    ctx.rotate(-baseLine);
  }

  draw() {
    // Setup
    if (this.element) {
      const ctx = this.element;
      ctx.clearRect(0, 0, 600, 600);
      ctx.translate(300, 300);
      ctx.font = "20px Arial";
      ctx.textBaseline = "middle";

      // Draw
      this.labels.forEach((element, index) => {
        this.drawPiece(index);
      });

      // Deco
      ctx.beginPath();
      ctx.arc(0, 0, 100, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    }
  }
}
