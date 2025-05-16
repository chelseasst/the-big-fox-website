import { Component, Input, OnInit } from '@angular/core';
import { itemDetails } from 'src/app/types/itemDetails';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit{
  @Input('item') item!: itemDetails;
  ngOnInit(){
    console.log('Item',this.item)
  }
}
