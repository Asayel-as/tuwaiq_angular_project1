import { Component } from '@angular/core';
import { FoodItem } from './food-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'my-angular-project';
  total = 0;
  qty = 0;
  foodmenu:FoodItem[] = [
    { id: 1, name: "دجاج", price: 30, description: "دجاج مشوي على الفحم", img: "/assets/cheken.jpeg" },
    { id: 2, name: "دجاج", price: 30, description: "دجاج شواية ", img: "/assets/cheken.jpeg" },
    { id: 3, name: "ايدام", price: 20, description: "ايدام خضار مشكل", img: "/assets/edam.jpeg" },
    { id: 4, name: "ايدام", price: 20, description: "ايدام  بالدجاج على الفرن", img: "/assets/edam.jpeg" }
  ];

  filteredFoodmenu:any;
  selectedValue:any;


  onSelect(event: any) {
    this.selectedValue = event.target.value;
    console.log("Selected Value:", this.selectedValue);
    this.filteredFoodmenu = this.foodmenu.filter(item => item.id == this.selectedValue);
    console.log(this.filteredFoodmenu)

  }
  

  sum(event: any, price: number) {
    const ischecked: boolean = event.target.checked;
    if (ischecked) {
      this.total = this.total + price;
      this.qty += 1;
    }
    else {
      this.total = this.total - price;
      this.qty -= 1;
    }
  }



}
