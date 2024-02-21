export enum Priority {
    LOW,
    MEDIUM,
    HIGH
}

export class TodoItem {
    get priorityText() : string {
        switch(this.priority) {
            case Priority.LOW:
                return "Low";
            case Priority.MEDIUM:
                return "Medium";
            case Priority.HIGH:
                return "High";
            default:
                return "N/A";
        }
    }

    constructor(
        public text: string = '',
        public priority?: Priority,
        public id?: number
    ) {
    }
}