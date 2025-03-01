import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-listprds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listprds.component.html',
  styleUrls: ['./listprds.component.css']
})
export class ListPrdsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('📌 Raw Data Received from API:', data); // Debugging
        if (Array.isArray(data)) {
          this.products = data; // Assign only if data is an array
        } else {
          console.error('❌ Error: Expected array but got:', data);
          this.products = []; // Fallback to empty array
        }
      },
      (error) => {
        console.error('🚨 Error fetching products:', error);
      }
    );
  }


  deleteProduct(id: number | undefined) {
    if (id !== undefined) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.productService.deleteProduct(id).subscribe(() => {
          this.fetchProducts();
        });
      }
    } else {
      console.error('❌ Error: Product ID is undefined');
    }
  }

  editProduct(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['/products/edit', id]);
    } else {
      console.error('❌ Error: Product ID is undefined');
    }
  }

  navigateToCreate() {
    this.router.navigate(['/products/create']);
  }
}
