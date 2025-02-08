import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Empty } from './empty/empty';
import { TailwindComponent } from './tailwind/tailwind.component';

export const pagesRoutes: Routes = [
    {
        path: 'tailwind',
        component: TailwindComponent
    }
];

// export default [
//     { path: 'documentation', component: Documentation },
//     { path: 'tailwind', component: TailwindComponent },
//     { path: 'empty', component: Empty },
//     { path: '**', redirectTo: '/notfound' }
// ] as Routes;
