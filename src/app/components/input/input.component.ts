import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-input-component',
    templateUrl: 'input.component.html',
    styleUrls: ['input.component.scss']
})
export class InputComponent implements OnInit {

    @Input() public control: FormControl = new FormControl('', Validators.minLength(3));
    @Input() public label: string = '';
    @Input() public placeholder: string = '';
    @Input() public icon: string = '';

    @Output() private valueChange = new EventEmitter<string>();

    constructor() {}

    public ngOnInit(): void {
        this.control.valueChanges.subscribe((value) => {
            this.valueChange.emit(value);
        });
    }

    public resetControl(inputRef: HTMLInputElement): void {
        this.control.setValue('');
        inputRef.focus();
    }
}
