import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private statusBar: StatusBar) {
    this.setStatusBarColor();
    this.trackNavigationUrl();
  }

  setStatusBarColor() {
    const styles = getComputedStyle(document.documentElement);
    const appPrimaryColor = styles.getPropertyValue('--ion-color-primary');
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString(appPrimaryColor);
    console.log({ appPrimaryColor });
  }

  trackNavigationUrl() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((x: any) => console.log({ navigatedTo: x.url }));
  }
}
