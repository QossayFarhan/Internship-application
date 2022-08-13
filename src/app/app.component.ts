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
      title: 'Folder',
      url: '/folder',
      icon: 'albums'
    },
    {
      title: 'Main',
      url: '/main',
      icon: 'albums'
    },
    {
      title: 'Add Student',
      url: '/add-student',
      icon: 'person'
    },
    {
      title: 'Edit Student',
      url: '/edit-student',
      icon: 'person'
    }
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
