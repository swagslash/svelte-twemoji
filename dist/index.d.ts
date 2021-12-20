import { ParseCallback, ParseObject } from 'twemoji';
declare type TwemojiHow = Partial<ParseObject> | ParseCallback;
export declare function twemoji(node: HTMLElement, how?: TwemojiHow): {
    update(): void;
};
export {};
