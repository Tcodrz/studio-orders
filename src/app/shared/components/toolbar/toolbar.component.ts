import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { AppState } from 'src/app/state';
import { logout } from 'src/app/state/user/user.actions';
import { User } from '../../../state/api-interface/user.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() user!: User;
  items: MenuItem[] = [
    {
      label: 'הזמנות',
      items: [
        {
          label: 'הוספה',
          icon: 'pi pi-fw pi-plus'
        },
        {
          label: 'כל ההזמנות',
          icon: 'pi pi-fw pi-calendar'
        }
      ]
    },
    {
      label: 'לקוחות',
      items: [
        {
          label: 'הוספה',
          icon: 'pi pi-fw pi-plus'
        },
        {
          label: 'כל הלקוחות',
          icon: 'pi pi-fw pi-users'
        }
      ]
    },
    {
      label: 'פרסומאים',
      items: [
        {
          label: 'הוספה',
          icon: 'pi pi-fw pi-plus'
        },
        {
          label: 'כל הפרסומאים',
          icon: 'pi pi-fw pi-user-plus'
        }
      ]
    },
    {
      label: 'ספקים',
      items: [
        {
          label: 'הוספה',
          icon: 'pi pi-fw pi-plus'
        },
        {
          label: 'כל הספקים',
          icon: 'pi pi-fw pi-list'
        }
      ]
    }
  ];

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }
  logout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
