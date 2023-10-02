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
                <ion-nav-link router-direction="forward" component="search-page">
                    <ion-item class="menu-list-item">
                        <ion-icon name="search" color="primary"></ion-icon>
                        <ion-text class="ion-margin-start"><h5>Search Meals</h5></ion-text>
                        <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                    </ion-item>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="my-meals-page">
                    <ion-item class="menu-list-item">
                        <ion-icon name="pizza" color="primary"></ion-icon>
                        <ion-text class="ion-margin-start"><h5>My Offered Meals</h5></ion-text>
                        <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                    </ion-item>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="account-page">
                    <ion-item class="menu-list-item">
                        <ion-icon name="person" color="primary"></ion-icon>
                        <ion-text class="ion-margin-start"><h5>My Account</h5></ion-text>
                        <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                    </ion-item>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="support-page">
                    <ion-item class="menu-list-item">
                        <ion-icon name="mail" color="primary"></ion-icon>
                        <ion-text class="ion-margin-start"><h5>Support</h5></ion-text>
                        <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                    </ion-item>
                </ion-nav-link>
                <ion-nav-link router-direction="forward" component="about-page">
                    <ion-item class="menu-list-item">
                        <ion-icon name="build" color="primary"></ion-icon>
                        <ion-text class="ion-margin-start"><h5>About</h5></ion-text>
                        <ion-icon name="chevron-forward" color="primary" class="end-of-line"></ion-icon>
                    </ion-item>
                </ion-nav-link>
            </ion-list>
        </ion-content>
      `;
    }
}

customElements.define('menu-page', MenuPage);

class AccountPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>My Account</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>User Since</ion-card-title>
                </ion-card-header>
                <ion-card-content>13/08/2023</ion-card-content>
            </ion-card>
            <ion-list>
                <ion-item>
                    <ion-input label="Name" label-placement="stacked" placeholder="John Doe"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input type="email" label="Email" label-placement="stacked" placeholder="john.doe@example.com.au"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-input type="password" label="Password" label-placement="stacked" placeholder="********">
                    </ion-input>
                </ion-item>
            </ion-list>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-button color="secondary" id="open-modal" expand="block" size="large">Save Changes</ion-button>
            </ion-row>

            <ion-modal trigger="open-modal" id="recovery-sent-modal">
                <ion-header>
                    <ion-toolbar>
                        <ion-title>Changes saved</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content class="ion-padding">
                    <ion-text><h5>Changes saved successfully.</h5></ion-text>
                    <ion-button color="secondary" onclick="document.querySelector('#recovery-sent-modal').dismiss()">Close</ion-button>
                </ion-content>
            </ion-modal>
        </ion-content>
      `;
    }
}

customElements.define('account-page', AccountPage);

class SearchPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Search Meals</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list>
                <ion-item>
                    <ion-select label="Select your meal" placeholder="Meal">
                    <ion-select-option value="breakfast">Breakfast</ion-select-option>
                    <ion-select-option value="lunch">Lunch</ion-select-option>
                    <ion-select-option value="tea">Tea</ion-select-option>
                    <ion-select-option value="dinner">Dinner</ion-select-option>
                    <ion-select-option value="any-meal">Any Meal</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-select label="Select the cuisine" placeholder="Cuisine">
                    <ion-select-option value="european">European</ion-select-option>
                    <ion-select-option value="chinese">Chinese</ion-select-option>
                    <ion-select-option value="indian">Indian</ion-select-option>
                    <ion-select-option value="mediterranean">Mediterranean</ion-select-option>
                    <ion-select-option value="japanese">Japanese</ion-select-option>
                    <ion-select-option value="mexican">Mexican</ion-select-option>
                    <ion-select-option value="other">Other</ion-select-option>
                    <ion-select-option value="any-cuisine">Any Cuisine</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-select label="Select the max distance" placeholder="Distance">
                    <ion-select-option value="5km">Within 5 Km</ion-select-option>
                    <ion-select-option value="10km">Within 10 Km</ion-select-option>
                    <ion-select-option value="20km">Within 20 Km</ion-select-option>
                    <ion-select-option value="any-distance">Any Distance</ion-select-option>
                    </ion-select>
                </ion-item>
            </ion-list>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-nav-link router-direction="forward" component="search-results-page">
                    <ion-button color="secondary" size="large" expand="block">Search Meals</ion-button>
                </ion-nav-link>
            </ion-row>
        </ion-content>
      `;
    }
}

customElements.define('search-page', SearchPage);

class SearchResultsPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Matching Meals</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-text><h5>Lunch meals<br>
                                Any cuisine<br>
                                Within 5Km</h5></ion-text>
                </ion-card-header>
                <ion-card-content>
                    <ion-nav-link router-direction="forward" component="meal-details-page">
                    <ion-list>
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Lunchbox meal image" src="/img/lunchbox_200.jpg" />
                            </ion-thumbnail>
                            <ion-label>Lunchbox</ion-label>
                            <ion-text slot="end" color="secondary">
                                <p>$5<br>Eglinton</p>
                            </ion-text>
                        </ion-item>
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Pasta meal image" src="/img/pasta_200.jpg" />
                            </ion-thumbnail>
                            <ion-label>Pasta</ion-label>
                            <ion-text slot="end" color="secondary">
                                <p>$7.50<br>Alkimos</p>
                            </ion-text>
                        </ion-item>
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Sandwich meal image" src="/img/sandwich_200.jpg" />
                            </ion-thumbnail>
                            <ion-label>Sandwich</ion-label>
                            <ion-text slot="end" color="secondary">
                                <p>$6<br>Jindalee</p>
                            </ion-text>
                        </ion-item>
                    </ion-list>
                    </ion-nav-link>
                </ion-card-content>
            </ion-card>
        </ion-content>
      `;
    }
}

customElements.define('search-results-page', SearchResultsPage);

class MealDetailsPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Meal Details</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <img alt="Image of sandwich meal" src="/img/sandwich_400.jpg" />
                <ion-card-header>
                    <ion-card-title>Sandwich</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    Savor a delightful sandwich meal with layers of savory ham, crisp lettuce, juicy tomatoes, and creamy mayo nestled between fresh slices of artisanal bread.
                    <p>Price: $6</p>
                    <p>Location: Jindalee</p>
                    <p>Prepared: yesterday, 18:00</p>
                    <p>Call cook: <a href="tel:0400 000 000">0400 000 000</a></p>
                </ion-card-content>
            </ion-card>
        </ion-content>
      `;
    }
}

customElements.define('meal-details-page', MealDetailsPage);

class MyMealsPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>My Offered Meals</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-text><h5>Current Offers</h5></ion-text>
                </ion-card-header>
                <ion-card-content>
                    <ion-list>
                    <ion-nav-link router-direction="forward" component="edit-meal-details-page">
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img alt="Sandwich meal image" src="/img/sandwich_200.jpg" />
                            </ion-thumbnail>
                            <ion-label>Sandwich</ion-label>
                            <ion-text slot="end"><p>Yesterday</p></ion-text>
                        </ion-item>
                    </ion-nav-link>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-card color="medium">
                <ion-card-header>
                    <ion-text><h5>Closed Offers</h5></ion-text>
                </ion-card-header>
                <ion-card-content>
                    <ion-list class="ion-no-padding">
                        <ion-item color="medium">
                            <ion-thumbnail slot="start">
                                <img alt="Lunchbox meal image" src="/img/lunchbox_200.jpg" />
                            </ion-thumbnail>
                            <ion-label>Lunchbox</ion-label>
                            <ion-text slot="end"><p>Last week</p></ion-text>
                        </ion-item>
                    </ion-list>
                </ion-card-content>
            </ion-card>
            <ion-row class="ion-justify-content-center ion-margin-top">
                <ion-nav-link router-direction="forward" component="add-meal-offer-page">
                    <ion-button color="secondary" size="large" expand="block">+ Add New Meal Offer</ion-button>
                </ion-nav-link>
            </ion-row>
        </ion-content>
      `;
    }
}

customElements.define('my-meals-page', MyMealsPage);

class EditMealDetailsPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Edit Meal Offer</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            Edit Meal Offer Page
        </ion-content>
      `;
    }
}

customElements.define('edit-meal-details-page', EditMealDetailsPage);

class AddMealOfferPage extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Add Meal Offer</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            Add Meal Offer Page
        </ion-content>
      `;
    }
}

customElements.define('add-meal-offer-page', AddMealOfferPage);