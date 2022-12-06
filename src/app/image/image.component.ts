import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input()
  imgSrc: string = 'assets/desert-national-park.jpg';

  @Input()
  altTxt?: string = 'Desert National Park';

  @Input()
  figCaptionTxt?: string =
    'Desert National Park, Kanoi, Rajasthan, India';

  @Input()
  imgOpacity?: number = 1;

  constructor() {}

  ngOnInit(): void {}
}