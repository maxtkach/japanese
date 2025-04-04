import 'react';

declare namespace React {
  interface ReactNode {
    children?: ReactNode;
  }

  interface FormEvent<T = Element> {
    preventDefault(): void;
    target: T;
  }

  interface ChangeEvent<T = Element> {
    target: T;
    preventDefault(): void;
  }

  interface CSSProperties {
    [key: string]: any;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 