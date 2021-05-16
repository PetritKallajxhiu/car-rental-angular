import {Component, OnInit} from '@angular/core';
import {Banner, BannerService} from '../../services/bannerServices';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners: Banner[] = [];

  constructor(private bannerService: BannerService) {
  }

  ngOnInit(): void {
    this.updateBanners();
  }

  updateBanners(): void {
    this.bannerService.getAll().subscribe(response => {
      this.banners = response;
    });
  }

  onDeleteBanner(id: number): void {
    const shouldDelete = confirm('Are you sure you want to delete it?');
    console.log(shouldDelete);
    if (shouldDelete) {
      this.bannerService.delete(id).subscribe(response => {
        this.updateBanners();
      });
    }
  }
}
