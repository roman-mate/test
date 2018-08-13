import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',

})
export class BookComponent implements OnInit {

  id: number;
  constructor(private activateRoute: ActivatedRoute){ 
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {  
  }

  

}
