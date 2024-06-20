import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  template: `
    <div *transloco="let t">
      <h1>{{ t('title') }}</h1>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
