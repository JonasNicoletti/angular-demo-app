import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private DEFAULT_LANG = 'it';

  constructor(public translate: TranslateService) {

    translate.addLangs(['en', 'de', 'it']);
    translate.setDefaultLang(this.DEFAULT_LANG);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/it|de|en/) ? browserLang : this.DEFAULT_LANG);
  }
}
