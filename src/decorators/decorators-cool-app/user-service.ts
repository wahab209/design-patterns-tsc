import {Notify} from "./notify";

export class MyCoolAppUserService {
    notifier: Notify;

    // Some other properties e.g userRepository
    //

    constructor(notifier: Notify) {
        this.notifier = notifier;
    }

    registerUser() {
        // Do some user registration stuffs
        // Send notification to user about registration status
        this.notifier.send();
    }
}