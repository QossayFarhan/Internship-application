import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle = 'main';
  public appPages = [
    {
      title: 'Add Job',
      url: '/add-job',
      icon: 'add'
    },
    {
      title: 'Job List',
      url: '/job-list',
      icon: 'albums'
    },
    {
      title: 'Applications List',
      url: '/validate-application',
      icon: 'albums'
    },
    {
      title: 'Log out',
      url: '/log-in',
      icon: 'log-out'
    },
    // {
    //   title: 'Student Job List',
    //   url: '/student-job-list',
    //   icon: 'albums'
    // }
  ];
  
  
    constructor(
      private platform: Platform,
      private statusBar: StatusBar,
      private splashScreen: SplashScreen,
    ) {
      this.initializeApp();
    }
    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }
  }
