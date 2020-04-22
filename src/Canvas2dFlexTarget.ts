import { FlexTarget } from "flexbox.js";

export class Canvas2dFlexTarget extends FlexTarget {
    public color: string = "white";

    public worldPx: number = 0;
    public worldPy: number = 0;

    onChangedLayout() {
        const x = this.getLayoutX();
        const y = this.getLayoutY();

        const parent = this.getParent();
        if (parent) {
            const p = parent as Canvas2dFlexTarget;
            this.worldPx = p.worldPx + x;
            this.worldPy = p.worldPy + y;
        } else {
            this.worldPx = x;
            this.worldPy = y;
        }
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.worldPx, this.worldPy, this.getLayoutW(), this.getLayoutH());

        const children = this.getChildren() as Canvas2dFlexTarget[];
        children.forEach((child) => child.draw(context));
    }
}
