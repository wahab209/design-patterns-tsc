import {NotificationDecorator} from "./decorator";

export class Email extends NotificationDecorator {

    description = "Email notification decorator"

    sendEmail() {
        // Logic for sending emails
        console.log("Sending message to email address...")
    }

    send() {
        this.notifier?.send();
        this.sendEmail();
    }

}

export class WhatsApp extends NotificationDecorator {

    description = "Whatsapp notification decorator"

    private sendWhatsapp() {
        // Logic for sending whatsapp
        console.log("Sending message to whatsapp number...")
    }

    send() {
        this.notifier?.send();
        this.sendWhatsapp();
    }

}

export class Slack extends NotificationDecorator {

    description = "Slack notification decorator"

    private sendSlackMessage() {
        // Logic for sending slack messages
        console.log("Sending message to slack channel...")
    }

    send() {
        this.notifier?.send();
        this.sendSlackMessage();
    }

}