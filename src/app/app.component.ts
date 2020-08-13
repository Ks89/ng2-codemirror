import { Component, OnInit } from '@angular/core';

export const codemirrorTs: any = {
  lineNumbers: true,
  readOnly: true,
  theme: 'monokai',
  mode: {
    name: 'javascript', typescript: true
  },
  // force codemirror's height https://codemirror.net/demo/resize.html
  viewportMargin: Infinity
};

export const codemirrorHtml: any = {
  lineNumbers: true,
  readOnly: true,
  theme: 'monokai',
  mode: {
    name: 'htmlmixed'
  },
  // force codemirror's height https://codemirror.net/demo/resize.html
  viewportMargin: Infinity
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  configHtml: any = codemirrorHtml;

  codeHtml: string | undefined;

  ngOnInit(): void {
    this.codeHtml = `
<p>hello</p>
<div>
  <p>something inside a div to show that codemirror for angular is really working!</p>
</div>
`;
  }
}
