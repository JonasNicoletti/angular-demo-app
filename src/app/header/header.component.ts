import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) {
    const user_lang_preference = this.getUserLangPref();

    translate.addLangs(['en', 'de', 'it']);
    translate.setDefaultLang(user_lang_preference);

    translate.use(user_lang_preference);
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('user-lang', lang);
  }

  getUserLangPref(): string {

    const localStorageLang = localStorage.getItem('user-lang');
    if (localStorageLang) return localStorageLang;

    const browserLang = this.translate.getBrowserLang();
    if (browserLang) return browserLang;

    return 'en';
  }

}
