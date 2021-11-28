import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private platform: Platform) {
    this.platform.ready().then(() => {
      if (platform.is('android')) {
        this.setStatusBarColor();
      }
      this.trackNavigationUrl();
    });
  }

  setStatusBarColor() {
    const styles = getComputedStyle(document.documentElement);
    const appPrimaryColor = styles.getPropertyValue('--ion-color-primary');
    console.log({ appPrimaryColor });
    StatusBar.setBackgroundColor({ color: appPrimaryColor.trim() });
    StatusBar.setOverlaysWebView({ overlay: true });

  }

  trackNavigationUrl() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((x: any) => console.log({ navigatedTo: x.url }));
  }
}
