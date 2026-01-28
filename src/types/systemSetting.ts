export interface GoogleAdwords {
  id: string;
  label: string;
}

export interface GoogleAnalytics {
  uaId: string;
  ga4Id: string;
}

export interface MetaPixel {
  pixelId: string;
  token: string;
}

export interface SnapchatPixel {
  id: string;
}

export interface TiktokPixel {
  id: string;
}

export interface XTracking {
  id: string;
}

export interface Omnisend {
  code: string;
}

export interface SystemSetting {
  tracking: {
    googleAdwords: GoogleAdwords;
    googleAnalytics: GoogleAnalytics;
    metaPixel: MetaPixel;
    snapchatPixel: SnapchatPixel;
    tiktokPixel: TiktokPixel;
    xTracking: XTracking;
    omnisend: Omnisend;
  };
}
