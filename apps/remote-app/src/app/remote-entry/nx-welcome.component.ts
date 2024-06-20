import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  template: `
    <div *transloco="let t">
      <h1>{{ t('remote.remoteTest') }}</h1>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor(private translocoService: TranslocoService) {}
  ngOnInit(): void {
    //Missing translation!
    this.translocoService
      .selectTranslate('remote.remoteTest')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
