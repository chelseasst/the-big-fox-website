import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-banner-giftcard',
    templateUrl: 'banner-giftcard.component.html',
    styleUrls: ['banner-giftcard.component.css']
})
export class BannerGiftCardComponent implements OnInit{
    @Output() showBanner = new EventEmitter<boolean>();
    bannerShowed: boolean = true;
    constructor() {}
    ngOnInit(): void {
        this.showBanner.emit(true);
    }
    closeBanner() {
        this.showBanner.emit(false);
        this.bannerShowed = false
    }
}