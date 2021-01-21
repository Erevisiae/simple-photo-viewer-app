import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FlickrPhoto, FlickrService } from "../flickr.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-image-details",
  templateUrl: "./image-details.component.html",
  styleUrls: ["./image-details.component.css"]
})
export class ImageDetailsComponent implements OnInit {
  photoDetails: FlickrPhoto;
  constructor(
    public flickrService: FlickrService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    if(this.flickrService.currentImage == null)
    {
      this.router.navigate(['/search']);
    }
    this.photoDetails = this.flickrService.currentImage;
  }

  back()
  {
   this.location.back();
  }
}
