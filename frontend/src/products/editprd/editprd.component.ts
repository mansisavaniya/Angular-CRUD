import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editprd',
  templateUrl: './editprd.component.html',
  styleUrls: ['./editprd.component.css'],
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule] 
})
export class EditprdComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productForm = this.fb.group({
      productid: [{ value: '', disabled: true }, Validators.required],
      productname: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required]
    });

    if (this.productId) {
      this.loadProduct();
    }
  }

  loadProduct(): void {
    this.productService.getProductById(this.productId).subscribe(
      (response: any) => {
        if (response.success) {
          this.productForm.patchValue(response.product);
        } else {
          this.errorMessage = 'Product not found!';
        }
      },
      (error) => {
        this.errorMessage = 'Error fetching product details';
        console.error('Error:', error);
      }
    );
  }

  updateProduct(): void {
    if (this.productForm.invalid) return;
    
    const updatedProduct = this.productForm.getRawValue();
    this.productService.updateProduct(this.productId, updatedProduct).subscribe(
      (response: any) => {
        if (response.success) {
          alert('Product updated successfully!');
          this.router.navigate(['/']);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error) => {
        this.errorMessage = 'Failed to update product';
        console.error('Update Error:', error);
      }
    );
  }
  navigateToList(){
    this.router.navigate(['']);
  }
}
