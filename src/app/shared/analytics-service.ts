import { Injectable } from "@angular/core";

declare var createAnalytics: (analyticsTrackingId: string) => void;

@Injectable({providedIn: 'root'})
export class AnalyticsService {
  init() {
    const analyticsTrackingId = 'G-MCGW7DCVFF';
    createAnalytics(analyticsTrackingId);
  }
}