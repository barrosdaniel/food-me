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
                    <ion-button color="primary" fill="outline">Support</ion-button>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="about-page">
                    <ion-button color="primary" fill="outline">About
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
      `;
    }
}

customElements.define('about-page', AboutPage);