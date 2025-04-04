declare module 'next/font/google' {
  export function Inter(options: any): any;
  export function Noto_Serif_JP(options: any): any;
}

declare module 'next/navigation' {
  export function usePathname(): string;
}

declare module 'next/image' {
  import { ReactElement } from 'react';
  
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    style?: React.CSSProperties;
    priority?: boolean;
  }
  
  export default function Image(props: ImageProps): ReactElement;
}

declare module 'next/link' {
  import { ReactElement, ReactNode } from 'react';
  
  interface LinkProps {
    href: string;
    className?: string;
    children: ReactNode;
  }
  
  export default function Link(props: LinkProps): ReactElement;
} 