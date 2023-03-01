import { Component } from '@angular/core';
import { products4 } from 'C:/pp/web/Lab4 — копия/Kaspi/src/app/products4';


@Component({
  selector: 'app-product-page4',
  templateUrl: './product-page4.component.html',
  styleUrls: ['./product-page4.component.css']
})
export class ProductPage4Component {
  products=[...products4]

  public share(link:string){
    window.location.href = link;
  }
  likeButtonClick(index:number) {
    this.products[index].numberOfLikes++;
  }
  deleteButton(index:number){
    this.products.splice(index,1)
  }

}