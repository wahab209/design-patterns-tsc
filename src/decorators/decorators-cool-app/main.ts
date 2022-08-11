import {Email, Slack, WhatsApp} from "./the-good";
import {Notify} from "./notify";
import {MyCoolAppUserService} from "./user-service";

function createMyCoolApp() {
    // We need a user service in our app
    // But the user service needs a notifier

    // Let's setup the notifier
    let notifier: Notify;

    // Decorate it with Email
    notifier = new Email();

    // Decorate it with whatsapp
    notifier = new WhatsApp(notifier);

    // Decorate it with slack
    notifier = new Slack(notifier);


    // We can decorate with as much notification extensions as we want


    const userService = new MyCoolAppUserService(notifier);
    userService.registerUser()

}

createMyCoolApp();