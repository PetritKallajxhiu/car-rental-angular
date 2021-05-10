import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Brand, BrandServices} from '../../../services/brandServices';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-brand-manage',
  templateUrl: './brand-manage.component.html',
  styleUrls: ['./brand-manage.component.css']
})
export class BrandManageComponent implements OnInit {

  brandForm = new FormGroup({});

  constructor(private brandService: BrandServices, private router: Router,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.brandService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((brand) => {
          this.brandForm = this.createBrandForm(brand);
        });
    } else {
      this.brandForm = this.createBrandForm({} as Brand);
    }
  }

  createBrandForm(brand: Brand): FormGroup {
    return new FormGroup({
      id: new FormControl(brand.id),
      name: new FormControl(brand.name, Validators.required)
    });
  }

  onSubmit(): void {
    this.brandService.save(this.brandForm.value)
      .subscribe(response => {
        return this.router.navigate(['/brands']);
      });
  }
}
