import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-categorie-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './categorie-list.component.html',
  styleUrl: './categorie-list.component.scss'
})
export class CategorieListComponent implements OnInit{
  @Input() categoryList!: string[];
  form: FormGroup;

  constructor(protected productService: ProductService, private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: ['']
    });
  }
  ngOnInit(): void {
    this.form.get('selectedOption')?.valueChanges.subscribe();
  }
}
