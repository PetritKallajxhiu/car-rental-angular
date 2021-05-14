import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car, CarServices} from '../../../services/carServices';
import {ActivatedRoute, Router} from '@angular/router';
import {Brand, BrandServices} from '../../../services/brandServices';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  carForm = new FormGroup({});

  brands: Brand[] = [];

  fuelTypes: string[] = ['Gasoline', 'Diesel', 'Electric'];


  constructor(private carService: CarServices, private router: Router, private http: HttpClient,
              private activeRoute: ActivatedRoute, private brandService: BrandServices) {
  }

  ngOnInit(): void {
    if (this.activeRoute.snapshot.params.id) {
      this.carService.getById(this.activeRoute.snapshot.params.id)
        .subscribe((car) => {
          this.carForm = this.createCarForm(car);
        });
    } else {
      this.carForm = this.createCarForm({} as Car);
    }
    this.brandService.getAll().subscribe(data => {
      this.brands = data;
    });
  }

  createCarForm(car: Car): FormGroup {
    return new FormGroup({
      id: new FormControl(car.id),
      name: new FormControl(car.name, Validators.required),
      passengers: new FormControl(car.passengers, [Validators.min(1), Validators.max(7)]),
      doors: new FormControl(car.doors, [Validators.min(2), Validators.max(6)]),
      engine: new FormControl(car.engine, Validators.required),
      fuelType: new FormControl(car.fuelType, Validators.required),
      photo: new FormControl(car.photo, Validators.required),
      price: new FormControl(car.price, Validators.min(1)),
      location: new FormControl(car.location, Validators.required),
      featured: new FormControl(car.featured),
      brandId: new FormControl(car.brandId, Validators.required)
    });
  }

  onSubmit(): void {
    this.carService.save(this.carForm.value)
      .subscribe(response => {
        return this.router.navigate(['/cars']);
      });
  }

  get f() {
    return this.carForm.controls;
  }

  onFileSelected(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.carForm.patchValue({
          fileSource: reader.result
        });
      };
    }
  }

}
