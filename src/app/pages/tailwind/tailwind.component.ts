import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetComponent } from '../../components/fieldset/fieldset.component';

@Component({
    selector: 'app-tailwind',
    imports: [CommonModule, InputTextModule, DatePickerModule, FieldsetComponent],
    templateUrl: './tailwind.component.html',
    styleUrl: './tailwind.component.scss'
})
export class TailwindComponent {}
