import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./form/form.module').then((m) => m.FormPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'reset-password/:id/:token',
    loadChildren: () =>
      import('./reset-password/reset-password.module').then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'cover-letter-simple',
    loadChildren: () =>
      import(
        './components/cover-letter-simple/cover-letter-simple.module'
      ).then((m) => m.CoverLetterSimplePageModule),
  },
  {
    path: 'cover-letter-c',
    loadChildren: () =>
      import('./components/cover-letter-c/cover-letter-c.module').then(
        (m) => m.CoverLetterCPageModule
      ),
  },
  {
    path: 'cover-letter-premium1',
    loadChildren: () =>
      import(
        './components/cover-letter-premium1/cover-letter-premium1.module'
      ).then((m) => m.CoverLetterPremium1PageModule),
  },
  {
    path: 'template-screenshot',
    loadChildren: () =>
      import(
        './components/template-screenshot/template-screenshot.module'
      ).then((m) => m.TemplateScreenshotPageModule),
  },
  {
    path: 'cover-letter-premium2',
    loadChildren: () =>
      import(
        './components/cover-letter-premium2/cover-letter-premium2.module'
      ).then((m) => m.CoverLetterPremium2PageModule),
  },
  {
    path: 'cover-letter-premium3',
    loadChildren: () =>
      import(
        './components/cover-letter-premium3/cover-letter-premium3.module'
      ).then((m) => m.CoverLetterPremium3PageModule),
  },
  {
    path: 'cover-letter-premium4',
    loadChildren: () =>
      import(
        './components/cover-letter-premium4/cover-letter-premium4.module'
      ).then((m) => m.CoverLetterPremium4PageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
