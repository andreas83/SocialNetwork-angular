import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Content } from '../content'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})
export class ContentComponent implements OnInit {

  contents: any
  constructor(private contentService: ContentService) {

  }

  ngOnInit() {
      this.contents=this.contentService.get("xxx");
  }

}
