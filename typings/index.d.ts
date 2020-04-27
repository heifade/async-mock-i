interface IProps {
    [key: string]: object;
}
export declare function asyncMock(props: IProps): {
    [key: string]: any;
};
/**
 * 延迟
 * @param millisecond 毫秒
 */
export declare function delay(millisecond: number): Promise<unknown>;
export {};
