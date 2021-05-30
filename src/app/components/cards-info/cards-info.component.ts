import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Bio } from '../../models/bio.model';
import { Project } from '../../models/project.model';
import { JsonReaderService } from '../../services/json-reader.service';

@Component({
  selector: 'app-cards-info',
  templateUrl: './cards-info.component.html',
  styleUrls: ['./cards-info.component.css']
})
export class CardsInfoComponent implements OnInit {
  projects: Observable<Project[]> = EMPTY;

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit(): void {
    this.projects = this.jsonReader.getProjects();
  }
}
