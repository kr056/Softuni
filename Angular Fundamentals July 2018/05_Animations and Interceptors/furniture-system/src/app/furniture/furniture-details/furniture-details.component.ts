import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  selectedFurniture: Observable<FurnitureModel>;
  id: string;
  
  constructor(private furnitureService: FurnitureService
    , private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.selectedFurniture = this.furnitureService.getDetails(this.id);
  }

}
