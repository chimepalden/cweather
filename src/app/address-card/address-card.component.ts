import { Component, OnInit, Input } from '@angular/core';
import { Author} from './author.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('author') author: Author;

  constructor() {
   }

  ngOnInit() {
  }

}
