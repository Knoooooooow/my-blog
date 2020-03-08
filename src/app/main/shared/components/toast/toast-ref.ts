import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
    constructor(private readonly overlay: OverlayRef) {
        console.log('new');
        
    }

    close() {
        this.overlay.dispose();
    }

    isVisible() {
        return this.overlay && this.overlay.overlayElement;
    }

    getPosition() {
        return this.overlay.overlayElement.getBoundingClientRect()
    }
}