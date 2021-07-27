import { Component } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  constructor(private contentService: ContentService) { }

}
