import { Component, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import  { languages, highlight }from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
    selector: 'prism, [prism]',
    template: '<ng-content></ng-content>',
    styles: [`:host.dark { background: #333; color: #FFF;}`]
})
export class PrismComponent implements OnChanges, AfterViewInit {
    @Input() code: string;
    @Input() language = 'typescript';

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.updateCode();
    }

    ngAfterViewInit() {
        this.updateCode();
    }

    updateCode() {
        const code = (this.code || this.el.nativeElement.innerText)
        const grammar = languages[this.language];
        const html = highlight(code, grammar, this.language);
        this.el.nativeElement.innerHTML = html;
    }
}