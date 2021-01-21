import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { FlickrPhoto, FlickrService } from "../flickr.service";

@Component({
  selector: "app-image-search",
  templateUrl: "./image-search.component.html",
  styleUrls: ["./image-search.component.css"]
})
export class ImageSearchComponent implements OnInit {
  images = [];
  @Input() keyword: string;
  p : number;
  constructor(
    private flickrService: FlickrService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.images = [];
    this.flickrService
        .search_keyword("office")
        .toPromise()
        .then(result => {
          this.images = result;
        });
  }

  search(event: any) {

    this.keyword = this.keyword.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.images =  null;
      this.flickrService
        .search_keyword(this.keyword)
        .toPromise()
        .then(result => {
          this.images = result;
        });
    }
  }

  setImageId(image : FlickrPhoto)
  {
    this.flickrService.currentImage = image;
  }
}
