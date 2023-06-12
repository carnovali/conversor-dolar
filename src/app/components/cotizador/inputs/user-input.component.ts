import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  @Input() currency!: string;
  @Output() onChange: EventEmitter<number>;
  public value!: number;

  constructor() {
    this.onChange = new EventEmitter();
    this.value = 1.0;
  }

  public onInput(inputValue: number) {
    const value = inputValue;
    this.value = inputValue;
    if (value > 0 && value < 9999999999) {
      this.onChange.emit(value);
    }
  }
}
