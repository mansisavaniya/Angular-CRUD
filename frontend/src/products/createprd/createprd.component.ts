import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-createprd',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './createprd.component.html',
  styleUrls: ['./createprd.component.css']
})
export class CreatePrdComponent {
  productForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) {
    this.productForm = this.fb.group({
      productid: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], 
      productname: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      // Check if product ID already exists
      this.productService.getProductById(productData.productid).subscribe(
        (existingProduct) => {
          if (existingProduct) {
            this.errorMessage = 'Product ID already exists! Choose a different ID.';
          }
        },
        (error) => {
          // If error status is 404, assume no product found
          if (error.status === 404) {
            this.productService.addProduct(productData).subscribe(() => {
              alert('Product added successfully!');
              this.router.navigate(['/']);
            });
          } else {
            console.error('Error checking product ID:', error);
          }
        }
      );
    }
  }
  navigateToList(){
    this.router.navigate(['']);
  }
}
