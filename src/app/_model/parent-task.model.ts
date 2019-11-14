export class ParentTask {
    parentTaskId: String;
    parentTaskName: String;

    public constructor(init?: Partial<ParentTask>) {
        Object.assign(this, init);
    }
}
