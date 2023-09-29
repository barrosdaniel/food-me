class SplashScreen extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="splashscreen__content">
            <ion-img src="/img/logo-300-no-background.png" alt="FoodMe logo">
            </ion-img>
            <ion-nav-link router-direction="forward" component="login-page">
                <ion-button color="secondary" size="large"
                    class="splashscreen__button--login">Log in</ion-button>
            </ion-nav-link>
            <ion-nav-link router-direction="forward" component="register-page">
                <ion-button color="secondary" size="large" fill="outline"
                    class="splashscreen__button--register">Register</ion-button>
            </ion-nav-link>
            <div class="splashscreen__links">
                <ion-nav-link router-direction="forward"
                    component="support-page">
                    <ion-button color="text" fill="outline" size="small">Support</ion-button>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="about-page">
                    <ion-button color="text" fill="outline" size="small">About
                    </ion-button>
                </ion-nav-link>
            </div>
        </div>
      `;
    }
}

customElements.define('splash-screen', SplashScreen);

class AboutPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>About</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>FoodMe</ion-card-title>
                </ion-card-header>
                <ion-card-content>Version 0.1.0</ion-card-content>
            </ion-card>
        </ion-content>
      `;
    }
}

customElements.define('about-page', AboutPage);

class SupportPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Support</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <h4><ion-text>WEBSITE</ion-text></h4>
            <a href="https://foodme.com" class="ion-margin-bottom">
                <ion-text color="text">www.foodme.net.au</ion-text>
            </a>
            <h4 class="ion-no-margin ion-margin-top"><ion-text>MESSAGE US</ion-text></h4>
            <ion-list>
                <ion-item>
                    <ion-input label="Name" label-placement="stacked" placeholder="Enter name"></ion-input>
                </ion-item>
                <ion-item>
                <ion-input type="email" label="Email" label-placement="stacked" placeholder="Enter email address"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input label="Phone Number" label-placement="stacked" placeholder="Enter phone number"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-textarea label="Message" label-placement="stacked" placeholder="Enter message" rows="4"></ion-textarea>
                </ion-item>
            </ion-list>
            <ion-row class="ion-justify-content-center">
                <ion-button color="secondary" id="open-modal" expand="block">Send Message</ion-button>
            </ion-row>
            <h4><ion-text>CALL US</ion-text></h4>
            <a href="https://foodme.com" class="ion-margin-bottom">
                <ion-text color="text">13 12 34</ion-text>
            </a>
            <h4><ion-text>CONNECT</ion-text></h4>
            <ion-row>
                <a href="https://www.facebook.com" class="ion-margin-end"><ion-icon name="logo-facebook" color="primary" size="large"></ion-icon></a>
                <a href="https://www.twitter.com" class="ion-margin-end"><ion-icon name="logo-twitter" color="primary" size="large"></ion-icon></a>
                <a href="https://www.instagram.com" class="ion-margin-end"><ion-icon name="logo-instagram" color="primary" size="large"></ion-icon></a>
                <a href="https://www.pinterest.com" class="ion-margin-end"><ion-icon name="logo-pinterest" color="primary" size="large"></ion-icon></a>
            </ion-row>

            <ion-modal trigger="open-modal" id="message-sent-modal">
                <ion-header>
                    <ion-toolbar>
                        <ion-title>Message Sent</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <ion-text><h3>Thank you for your message!</h3></ion-text>
                    <p>We will get back to you as soon as possible.</p>
                    <ion-button color="secondary" onclick="document.querySelector('#message-sent-modal').dismiss()">Close</ion-button>
                </ion-content>
            </ion-modal>
        </ion-content>
      `;
    }
}

customElements.define('support-page', SupportPage);

class RegisterPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Register</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-input label="Name" label-placement="stacked" placeholder="Enter name"></ion-input>
                </ion-item>
                <ion-item>
                <ion-input type="email" label="Email" label-placement="stacked" placeholder="Enter email address"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input type="password" label="Password" label-placement="stacked" placeholder="Enter password">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-checkbox label-placement="end">I agree to the terms and conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-checkbox>
                </ion-item>
            </ion-list>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-button color="secondary" id="open-modal" expand="block" size="large">Register</ion-button>
            </ion-row>

            <ion-modal trigger="open-modal" id="account-created-modal">
                <ion-header>
                    <ion-toolbar>
                        <ion-title>Account Created</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <ion-text><h3>Your new FoodMe account has been created!</h3></ion-text>
                    <ion-button color="secondary" onclick="document.querySelector('#account-created-modal').dismiss()">Close</ion-button>
                </ion-content>
            </ion-modal>
        </ion-content>
      `;
    }
}

customElements.define('register-page', RegisterPage);

class LoginPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-title>Login</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-input type="email" label="Email" label-placement="stacked" placeholder="Enter email address"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input type="password" label="Password" label-placement="stacked" placeholder="Enter password">
                    </ion-input>
                </ion-item>
            </ion-list>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-nav-link router-direction="forward" component="menu-page">
                    <ion-button color="secondary" expand="block" size="large">Login</ion-button>
                </ion-nav-link>
            </ion-row>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-nav-link router-direction="forward" component="recover-page">
                    <ion-button color="primary" expand="block" fill="outline">Recover Password</ion-button>
                </ion-nav-link>
            </ion-row>
        </ion-content>
      `;
    }
}

customElements.define('login-page', LoginPage);


class RecoverPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Recover Password</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-item>
                    <ion-input type="email" label="Email" label-placement="stacked" placeholder="Enter email address"></ion-input>
                </ion-item>
            </ion-list>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-button color="secondary" id="open-modal" expand="block" size="large">Send Recovery Email</ion-button>
            </ion-row>

            <ion-modal trigger="open-modal" id="recovery-sent-modal">
                <ion-header>
                    <ion-toolbar>
                        <ion-title>Email sent</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <ion-text><h3>Password recovery email sent successfully.</h3></ion-text>
                    <ion-text><p>Please allow up to 15 minutes for the email to arrive at your mailbox. Remember to check your spam/junk folder.</p></ion-text>
                    <ion-button color="secondary" onclick="document.querySelector('#recovery-sent-modal').dismiss()">Close</ion-button>
                </ion-content>
            </ion-modal>
        </ion-content>
      `;
    }
}

customElements.define('recover-page', RecoverPage);

// Menu page
class MenuPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-title>Menu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list lines="full">
                <ion-item class="menu-list-item">
                    <ion-icon name="search" color="primary"></ion-icon>
                    <ion-text class="ion-margin-start"><h5>Search Meals</h5></ion-text>
                    <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                </ion-item>
                <ion-item class="menu-list-item">
                    <ion-icon name="pizza" color="primary"></ion-icon>
                    <ion-text class="ion-margin-start"><h5>My Offered Meals</h5></ion-text>
                    <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                </ion-item>
                <ion-item class="menu-list-item">
                    <ion-icon name="person" color="primary"></ion-icon>
                    <ion-text class="ion-margin-start"><h5>My Account</h5></ion-text>
                    <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                </ion-item>
                <ion-item class="menu-list-item">
                    <ion-icon name="mail" color="primary"></ion-icon>
                    <ion-text class="ion-margin-start"><h5>Support</h5></ion-text>
                    <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                </ion-item>
                <ion-item class="menu-list-item">
                    <ion-icon name="build" color="primary"></ion-icon>
                    <ion-text class="ion-margin-start"><h5>About</h5></ion-text>
                    <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                </ion-item>
            </ion-list>
        </ion-content>
      `;
    }
}

customElements.define('menu-page', MenuPage);