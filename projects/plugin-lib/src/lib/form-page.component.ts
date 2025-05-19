// lib/form-page.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  form: FormGroup;
  entries: { id: number; name: string; lastName: string; age: number }[] = [];
  private idCounter = 1;

  constructor(private fb: FormBuilder) {
    console.log('[FormPageComponent] constructor called');
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  addEntry() {
    if (this.form.valid) {
      this.entries.push({
        id: this.idCounter++,
        name: this.form.value.name,
        lastName: this.form.value.lastName,
        age: Number(this.form.value.age)
      });
      this.form.reset();
    }
  }

  removeEntry(id: number) {
    this.entries = this.entries.filter(entry => entry.id !== id);
  }
}
