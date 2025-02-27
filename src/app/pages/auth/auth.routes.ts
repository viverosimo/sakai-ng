import { Routes } from '@angular/router';
import { Access } from './access';
import { Login } from './login';
import { Error } from './error';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';

export default [
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: 'login', component: Login },
    { path: 'subscribe', component: EmailSubscribeComponent }
] as Routes;
