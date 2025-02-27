import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { InputText } from 'primeng/inputtext';
import { FieldsetComponent } from '../../components/fieldset/fieldset.component';
import { FooterButtonsComponent } from '../../components/footer-buttons/footer-buttons.component';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { Select } from 'primeng/select';
@Component({
    selector: 'app-tailwind',
    imports: [CommonModule, InputText, DatePicker, FieldsetComponent, FooterButtonsComponent, Toast, Select],
    templateUrl: './tailwind.component.html',
    styleUrl: './tailwind.component.scss',
    providers: [MessageService]
})
export class TailwindComponent implements OnInit {
    messageService = inject(MessageService);

    countries = [
        { label: 'USA', value: 'usa' },
        { label: 'Canada', value: 'canada' },
        { label: 'UK', value: 'uk' }
    ];

    ngOnInit() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }
}
