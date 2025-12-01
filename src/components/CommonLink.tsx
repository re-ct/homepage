import React from 'react';
import Link from 'next/link';

export const CommonLink: React.FC<{
  link: {
    href: string;
    external: boolean;
    newTab?: boolean;
  };
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ link, style,children }) => {

  const useAnchorTag = link.external || link.newTab;
  let target = undefined;
  let rel = undefined;

  if (link.external) {
    target = "_blank";
    rel = "noopener noreferrer";
  } else if (link.newTab) {
    target = "_blank";
    rel = undefined;
  }

  if (useAnchorTag) {
    return (
      <a 
        href={link.href} 
        target={target} 
        rel={rel} 
        style={style}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={link.href} style={style}>
        {children}
      </Link>
    );
  }
};