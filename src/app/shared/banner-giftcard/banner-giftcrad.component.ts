import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-banner-giftcard',
    templateUrl: 'banner-giftcard.component.html',
    styleUrls: ['banner-giftcard.component.css']
})
export class BannerGiftCardComponent {
    @Output() showBanner = new EventEmitter<boolean>();
    bannerShowed: boolean = true;
    constructor() {
        this.showBanner.emit(true);
    }
    closeBanner() {
        this.showBanner.emit(false);
        this.bannerShowed = false
    }
}