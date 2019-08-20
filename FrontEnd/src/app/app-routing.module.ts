import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// custom
import { paths } from '@app/app-paths';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: paths.aboutUs, loadChildren: '@app/modules/about-us/about-us.module#AboutUsModule', data: { title: paths.aboutUsData } },
  { path: paths.accountSettings, loadChildren: '@app/modules/account-settings/account-settings.module#AccountSettingsModule', data: { title: paths.accountSettingsData } },
  { path: paths.careers, loadChildren: '@app/modules/careers/careers.module#CareersModule', data: { title: paths.careersData } },
  { path: paths.contactUs, loadChildren: '@app/modules/contact-us/contact-us.module#ContactUsModule', data: { title: paths.contactUsData } },
  { path: paths.cookies, loadChildren: '@app/modules/cookies/cookies.module#CookiesModule', data: { title: paths.cookiesData } },
  { path: paths.createAccount, loadChildren: '@app/modules/create-account/create-account.module#CreateAccountModule', data: { title: paths.createAccountData } },
  { path: paths.home, pathMatch: 'full', loadChildren: '@app/modules/home/home.module#HomeModule', data: { title: paths.homeData } },
  { path: paths.login, loadChildren: '@app/modules/login/login.module#LoginModule', data: { title: paths.loginData } },
  { path: paths.massicot, loadChildren: '@app/modules/massicot/massicot.module#MassicotModule', data: { title: paths.massicotData } },
  { path: paths.minium, loadChildren: '@app/modules/minium/minium.module#MiniumModule', data: { title: paths.miniumData } },
  { path: paths.news, loadChildren: '@app/modules/news/news.module#NewsModule', data: { title: paths.newsData } },
  { path: paths.ocher, loadChildren: '@app/modules/ocher/ocher.module#OcherModule', data: { title: paths.ocherData } },
  { path: paths.orpiment, loadChildren: '@app/modules/orpiment/orpiment.module#OrpimentModule', data: { title: paths.orpimentData } },
  { path: paths.ourStory, loadChildren: '@app/modules/our-story/our-story.module#OurStoryModule', data: { title: paths.ourStoryData } },
  { path: paths.privacy, loadChildren: '@app/modules/privacy/privacy.module#PrivacyModule', data: { title: paths.privacyData } },
  { path: paths.shop, loadChildren: '@app/modules/shop/shop.module#ShopModule', data: { title: paths.shopData } },
  { path: paths.sinopia, loadChildren: '@app/modules/sinopia/sinopia.module#SinopiaModule', data: { title: paths.sinopiaData } },
  { path: paths.support, loadChildren: '@app/modules/support/support.module#SupportModule', data: { title: paths.supportData } },
  { path: paths.terms, loadChildren: '@app/modules/terms/terms.module#TermsModule', data: { title: paths.termsData } },
  { path: paths.theTeam, loadChildren: '@app/modules/the-team/the-team.module#TheTeamModule', data: { title: paths.theTeamData } },

  // 404
  { path: paths.notFound, component: NotFoundComponent, data: { title: paths.notFoundData } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
