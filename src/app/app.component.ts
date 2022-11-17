import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslationService} from './modules/i18n';
// language list
import {locale as enLang} from './modules/i18n/vocabs/en';
import {locale as frLang} from './modules/i18n/vocabs/fr';

@Component({
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private translationService: TranslationService) {
    this.translationService.loadTranslations(
      enLang,
      frLang
    )
  }
}
