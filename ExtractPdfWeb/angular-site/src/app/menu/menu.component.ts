import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  isSelected:boolean = false;

  constructor() { }




  isOpen(){
    if(this.isSelected === true) { 
      this.isSelected = false;
    } 
    else { 
      this.isSelected = true;
    }
    console.log(this.isSelected);  
  }


  ngOnInit() {
  }

}
