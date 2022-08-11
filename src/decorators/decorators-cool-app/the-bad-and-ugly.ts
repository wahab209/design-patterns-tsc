import {Notify} from "./notify";

class SMSNotifier extends Notify {
    description = "Sends only sms"
    send() {
        // Code to send sms
    }
}

class EmailNotifier extends Notify {
    description = "Sends only email"
    send() {
        // Code to send email
    }
}

class WhatsappNotifier extends Notify {
    description = "Sends message to whatsapp"
    send() {
        // Code to send whatsapp
    }
}

class WhatsappSlackNotifier extends WhatsappNotifier {

    description = "Sends whatsapp and slack"

    private sendToSlack() {
        // Code to send slack message
    }

    send() {
        this.sendToSlack();
        super.send();
    }

}

class WhatsappEmailNotifier extends EmailNotifier {
}

