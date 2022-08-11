import {Notify} from "./notify";

export abstract class NotificationDecorator extends Notify{
    notifier?: Notify;
    constructor();
    constructor(notifier: Notify);
    constructor(notifier?: Notify) {
        super();
        this.notifier = notifier;
    }
}