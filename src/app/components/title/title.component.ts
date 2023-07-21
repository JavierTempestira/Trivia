import { Component, Input } from "@angular/core";

@Component ({
  selector: 'mi-titulo',
  template: `<h1> {{texto}} </h1>`,
  styles: [`
  h1 {
    font-size: 30px;
  }
  `]
})

export class TitleComponent {

   @Input() texto: string = "";
}
