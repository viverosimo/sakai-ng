import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-footer-buttons',
    imports: [ButtonModule],
    templateUrl: './footer-buttons.component.html',
    styleUrl: './footer-buttons.component.scss'
})
export class FooterButtonsComponent {
    saveButtonTitle = input('Αποθήκευση');
    cancelButtonTitle = input('Ακύρωση');
}
