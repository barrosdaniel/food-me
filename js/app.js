class SplashScreen extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="splashscreen__content">
            <ion-img src="/img/logo-200-no-background.png" alt="FoodMe logo">
            </ion-img>
            <ion-button color="secondary" size="large"
                class="splashscreen__button--login">Log in</ion-button>
            <ion-button color="secondary" size="large" fill="outline"
                class="splashscreen__button--register">Register</ion-button>
            <div class="splashscreen__links">
                <ion-nav-link router-direction="forward"
                    component="support-page">
                    <ion-button color="text" fill="outline">Support</ion-button>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="about-page">
                    <ion-button color="text" fill="outline">About
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
                <ion-button color="secondary">Send Message</ion-button>
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





        </ion-content>
      `;
    }
}

customElements.define('support-page', SupportPage);