import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
    private observer!: IntersectionObserver
    constructor(private renderer: Renderer2, private el: ElementRef) {}
    ngAfterViewInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'animated');
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                this.renderer.addClass(this.el.nativeElement, 'visible');
                this.observer.disconnect();
            }
        }, {
            threshold: 0.1,
        });
        this.observer.observe(this.el.nativeElement);
    }
    ngOnDestroy(): void {
        this.observer.disconnect();
    }
}