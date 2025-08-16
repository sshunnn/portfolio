import React from 'react';
import styles from './styles.module.scss';

export type IconName = 
  | 'chevron-left'
  | 'chevron-right'
  | 'play'
  | 'pause'
  | 'arrow-left'
  | 'arrow-right'
  | 'close'
  | 'menu'
  | 'external-link'
  | 'github'
  | 'email'
  | 'phone'
  | 'location'
  | 'star'
  | 'info'
  | 'code';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

const iconPaths: Record<IconName, React.ReactNode> = {
  'chevron-left': (
    <path 
      d="M15 18L9 12L15 6" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'chevron-right': (
    <path 
      d="M9 18L15 12L9 6" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'play': (
    <path 
      d="M8 5V19L19 12L8 5Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="currentColor"
    />
  ),
  'pause': (
    <>
      <rect x="6" y="4" width="4" height="16" fill="currentColor" />
      <rect x="14" y="4" width="4" height="16" fill="currentColor" />
    </>
  ),
  'arrow-left': (
    <>
      <path 
        d="M19 12H5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 19L5 12L12 5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'arrow-right': (
    <>
      <path 
        d="M5 12H19" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 5L19 12L12 19" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'close': (
    <>
      <path 
        d="M18 6L6 18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6 6L18 18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'menu': (
    <>
      <path 
        d="M3 12H21" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M3 6H21" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M3 18H21" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'external-link': (
    <>
      <path 
        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M15 3H21V9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10 14L21 3" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'github': (
    <path 
      d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22 17.5 20.5 12 22V16M12 16C12 13.5 12 10.5 12 8C12 6.5 11.5 5 10 4.5C8.5 4 6.5 4 4.5 5.5C2.5 7 2 9 2 11C2 13 3 15 5 16C7 17 9 16.5 12 16Z"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  ),
  'email': (
    <>
      <path 
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="L22 6L12 13L2 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'phone': (
    <path 
      d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06715 2.16708 8.43928 2.48353C8.81141 2.79999 9.06398 3.23945 9.15999 3.72C9.33752 4.68007 9.62217 5.61273 10.01 6.5C10.1427 6.81402 10.183 7.15875 10.1259 7.49474C10.0688 7.83073 9.91573 8.14334 9.68999 8.39L8.68999 9.39C10.0935 11.9135 12.1665 13.9865 14.69 15.39L15.69 14.39C15.9367 14.1642 16.2493 14.0111 16.5853 13.954C16.9213 13.8969 17.266 13.9372 17.58 14.07C18.4673 14.4578 19.3999 14.7425 20.36 14.92C20.8449 15.0174 21.2877 15.2737 21.6048 15.6523C21.9219 16.0308 22.0904 16.5085 22.08 17V16.92H22Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  ),
  'location': (
    <>
      <path 
        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  'star': (
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="currentColor"
    />
  ),
  'info': (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M12 16v-4M12 8h.01"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'code': (
    <>
      <path 
        d="M16 18L22 12L16 6"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8 6L2 12L8 18"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
};

export default function Icon({ 
  name, 
  size = 20, 
  className = '',
  color,
  strokeWidth
}: IconProps) {
  const iconContent = iconPaths[name];

  if (!iconContent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.icon} ${className}`}
      style={{
        color,
        ...(strokeWidth !== undefined
          ? { '--stroke-width': strokeWidth }
          : {})
      } as React.CSSProperties}
    >
      {iconContent}
    </svg>
  );
}
