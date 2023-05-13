import { IStageConfig } from "./BetterCreatorEvn";

export class BetterCreator {
    public stage: any = null; //舞台的节点
    /**
     * 初始化引擎。使用引擎需要先初始化引擎，否则可能会报错。
     */
    static init(stageConfig?: IStageConfig): Promise<void> {}
    /**
     * @param width
     * @param height
     */
    static init(width: number, height: number) {}
    /**@private Render 类的引用。*/
    static render: any;
}
