export declare type Color = 'green' | 'blue';
export declare class ButtonComponent {
    color: Color;
    text: string;
    icon: string;
    disabled: boolean;
    corners: boolean;
    height: number;
    defaultHeight: string;
    swallowIfDisabled(event: any): void;
}
