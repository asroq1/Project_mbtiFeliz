export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore
    window.gtag('event', eventName, eventParams);
  }
};