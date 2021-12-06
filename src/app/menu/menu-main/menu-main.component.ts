import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ele-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.css'],
})
export class MenuMainComponent implements OnInit {
  statusReceived: boolean = true;
  UrlIframe: string = '';
  @ViewChild('marcoIframe') iframe: ElementRef | any;
  @ViewChild('sidebar') sidebar: ElementRef | any;

  constructor(private ren2: Renderer2) {}

  ngOnInit(): void {}

  recibirEstado(status: any) {
    this.statusReceived = status;
  }

  recibirLink(link: string): void {
    console.log(link);
    const direccion = this.iframe.nativeElement;
    this.ren2.setAttribute(direccion, 'src', link);
  }
}
