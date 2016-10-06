import { Component } from '@angular/core';

@Component({
  selector: 'supre-buttons',
  template: require('./buttons.component.html'),
  styles: [require('./buttons.component.css')]
})
export class ButtonsComponent {
  title = 'app works!';
}
