import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bio } from '../models/bio.model';
import { Link } from '../models/link.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {
  private readonly linksURL = 'assets/json/links.json';
  private readonly bioURL = 'assets/json/bio.json';
  private readonly projectsURL = 'assets/json/projects.json';

  constructor(private httpClient: HttpClient) {
  }

  getLinks(): Observable<Link[]> {
    return this.httpClient.get<Link[]>(this.linksURL);
  }

  getBio(): Observable<Bio> {
    return this.httpClient.get<Bio>(this.bioURL);
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectsURL);
  }
}
