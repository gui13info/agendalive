import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { live } from './../../../shared/model/live.model';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: live[] =[];
  livesNext: live[] =[];

  constructor(
    public liveService: LiveService
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.liveService.getLivesWithFlag('previous').subscribe(dados => {
      this.livesPrevious = dados.content;
    });

    this.liveService.getLivesWithFlag('next').subscribe(dados => {
      this.livesNext = dados.content;
    });
  }

}
