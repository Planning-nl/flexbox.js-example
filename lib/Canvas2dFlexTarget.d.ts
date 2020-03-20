import FlexTarget from 'flexbox.js/dist/FlexTarget';
export default class Canvas2dFlexTarget extends FlexTarget {
    color: string;
    worldPx: number;
    worldPy: number;
    onChangedLayout(): void;
    draw(context: CanvasRenderingContext2D): void;
}
