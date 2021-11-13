import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { logout } from 'src/app/state/user/user.actions';
import { IconsService } from './../../material/icons.service';

interface SidenavItem {
  value: string;
  icon: any;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  sidenavOpened: boolean = false;

  sidenavItems: SidenavItem[] = [
    {
      value: 'הזמנות',
      icon: this.icons.faStream
    },
    {
      value: 'הזמנה חדשה',
      icon: this.icons.faFileSignature,
    },
    {
      value: 'פרסומאים',
      icon: this.icons.faPodcast,
    },
    {
      value: 'לקוחות',
      icon: this.icons.faUsers,
    },
    {
      value: 'קריינים',
      icon: this.icons.faheadphones
    }
  ];

  constructor(
    private store: Store<AppState>,
    public icons: IconsService,
    private router: Router
  ) { }

  logout() {
    this.store.dispatch(logout())
    this.router.navigate(['']);
  }

}
