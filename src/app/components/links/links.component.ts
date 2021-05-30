import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Link } from '../../models/link.model';
import { JsonReaderService } from '../../services/json-reader.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  links: Observable<Link[]> = EMPTY;

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit(): void {
    this.links = this.jsonReader.getLinks();
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }
}
