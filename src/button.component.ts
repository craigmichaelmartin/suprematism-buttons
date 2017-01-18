import { Component, Input } from '@angular/core';

export type Color = 'green' | 'blue';

@Component({
  selector: 'supre-button',
  template: require('./button.component.html'),
  styles: [require('./button.component.css')]
})
export class ButtonComponent {

  @Input() color: Color = 'green';
  @Input() text: string;
  @Input() icon: string;
  @Input() disabled: boolean;
  @Input() corners: boolean;
  @Input() height: number;
  defaultHeight = '36px';

  swallowIfDisabled(event) {
    if (this.disabled) {
      event.stopPropagation();
    }
  }

}
