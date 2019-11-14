export class Task {
    taskId: String;
    name: String;
    parentTaskId: String;
    parentTask: String;
    priority: Number;
    startdate: Date;
    endDate: Date;

    // For creation of instance with partial fields
    public constructor(init?: Partial<Task>) {
        Object.assign(this, init);
    }

}
