import { Component, input } from '@angular/core';

@Component({
    selector: 'app-fieldset',
    imports: [],
    templateUrl: './fieldset.component.html',
    styleUrl: './fieldset.component.scss'
})
export class FieldsetComponent {
    title = input('title');
}
