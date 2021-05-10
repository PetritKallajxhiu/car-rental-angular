import {Component, OnInit} from '@angular/core';
import {Brand, BrandServices} from '../../services/brandServices';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandServices) {
  }

  ngOnInit(): void {
    this.updateBrands();
  }

  updateBrands(): void {
    this.brandService.getAll().subscribe(response => {
      this.brands = response;
    });
  }

  onDeleteBrand(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.brandService.delete(id).subscribe(response => {
        this.updateBrands();
      });
    }
  }

}
