import { Component, OnInit } from '@angular/core';
import { Bio } from '../../models/bio.model';
import { JsonReaderService } from '../../services/json-reader.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
  bio!: Bio;

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit(): void {
    this.jsonReader.getBio().subscribe(res => this.bio = res);
  }
}
