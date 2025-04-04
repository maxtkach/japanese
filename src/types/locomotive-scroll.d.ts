declare module 'locomotive-scroll' {
  export interface DeviceOptions {
    smooth?: boolean;
    breakpoint?: number;
    [key: string]: any;
  }

  export interface LocomotiveScrollOptions {
    el?: HTMLElement;
    name?: string;
    offset?: number;
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    scrollFromAnywhere?: boolean;
    reloadOnContextChange?: boolean;
    resetNativeScroll?: boolean;
    tablet?: DeviceOptions;
    smartphone?: DeviceOptions;
    lerp?: number;
    gestureDirection?: string;
    infinite?: boolean;
    [key: string]: any;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    on(event: string, func: (args?: any) => void): void;
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | number | HTMLElement, options?: { offset?: number; callback?: () => void; duration?: number; [key: string]: any }): void;
  }
} 