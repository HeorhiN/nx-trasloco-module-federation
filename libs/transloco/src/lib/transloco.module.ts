import { HttpClientModule } from '@angular/common/http';
import { isDevMode, ModuleWithProviders, NgModule } from '@angular/core';
import {
  provideTransloco,
  TranslocoConfig,
  TranslocoModule,
} from '@jsverse/transloco';
import { TranslocoHttpLoader } from './transloco.loader';
@NgModule({
  imports: [HttpClientModule],
  exports: [TranslocoModule],
})
export class TranslocoRootModule {
  static forRoot(
    config: Partial<TranslocoConfig>
  ): ModuleWithProviders<TranslocoRootModule> {
    return {
      ngModule: TranslocoRootModule,
      providers: [
        provideTransloco({
          config: {
            availableLangs: config?.availableLangs ?? ['en', 'es'],
            defaultLang: config?.defaultLang ?? 'en',
            reRenderOnLangChange: config?.reRenderOnLangChange ?? true,
            prodMode: !isDevMode(),
          },
          loader: TranslocoHttpLoader,
        }),
      ],
    };
  }
}
