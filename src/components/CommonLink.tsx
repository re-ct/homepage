import React from 'react';
import Link from 'next/link';

export const CommonLink: React.FC<{
  link: {
    href: string;
    text: string;
    external: boolean;
  };
  style: React.CSSProperties;
}> = ({ link, style }) => {
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" style={style}>
      {link.text}
    </a>
  ) : (
    <Link href={link.href} style={style}>
      {link.text}
    </Link>
  );
};
