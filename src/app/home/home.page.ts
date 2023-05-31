import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  enabled: boolean = false;
  constructor() { }

  async toggle() {
    if (!this.enabled) {
      await PrivacyScreen.enable();
      this.enabled = true;
    } else {
      await PrivacyScreen.disable();
      this.enabled = false;
    }
  }
}
