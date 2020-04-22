import { Canvas2dFlexTarget } from "./Canvas2dFlexTarget";

export function example(context: CanvasRenderingContext2D) {
    const root = new Canvas2dFlexTarget();
    root.flex.enabled = true;
    root.flex.direction = "row";
    root.flex.wrap = true;
    root.flex.alignItems = "center";
    root.w = 800;

    for (let i = 0; i < 10000; i++) {
        const newItem = new Canvas2dFlexTarget();
        newItem.w = Math.random() * 10;
        newItem.h = Math.random() * 10;
        newItem.color = getRandomColor();
        root.addChild(newItem);
    }

    let direction = true;
    const loop = () => {
        context.clearRect(0, 0, 800, 800)

        root.w = (root.w as number) - (direction ? 1 : -1);

        if (root.w < 100) {
            direction = false;
        }
        if (root.w > 900) {
            direction = true;
        }

        root.update();
        root.draw(context);
        requestAnimationFrame(loop);
    };

    loop();
}

const colors = [
    "#e6194b",
    "#3cb44b",
    "#ffe119",
    "#4363d8",
    "#f58231",
    "#911eb4",
    "#46f0f0",
    "#f032e6",
    "#bcf60c",
    "#fabebe",
    "#008080",
    "#e6beff",
    "#9a6324",
    "#fffac8",
    "#800000",
    "#aaffc3",
    "#808000",
    "#ffd8b1",
    "#000075",
    "#808080",
    "#ffffff",
    "#000000",
];

function getRandomColor() {
    return colors[Math.floor(colors.length * Math.random())];
}

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 800;
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
if (context) {
    example(context);
} else {
    console.log("Canvas2d not supported");
}
