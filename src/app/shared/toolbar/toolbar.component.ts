import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Input() sidenavToggleIcon: any;
  @Input() logoutIcon: any;
  @Output() logout: EventEmitter<void> = new EventEmitter()
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter();

  @ViewChild('sideNavMenu') sideNavMenu: ElementRef = new ElementRef(document.getElementById('sideNavBtn'));

  animateButton(element: MatButton) {

    element._elementRef.nativeElement.classList.add('animate');
    setTimeout(() => {
      element._elementRef.nativeElement.classList.remove('animate');

    }, 1000);

  }

}
