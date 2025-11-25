'use client';
import SchoolFooter from './SchoolFooter';
import CorporateFooter from './CorporateFooter';
import { usePathname } from 'next/navigation';
import { ListItem, ListItemText, Box } from '@mui/material';
import Link from 'next/link';

export type LinkItem = {
  text: string;
  href?: string;
  nested?: boolean;
  external?: boolean;
};

type FooterLinkItemProps = {
  link: LinkItem;
  index: number;
  sxStyles: any;
};

export const FooterLinkItem = ({
  link,
  index,
  sxStyles,
}: FooterLinkItemProps) => {
  const itemStyles = {
    ...sxStyles.linksItem,
    ...(link.nested && {
      paddingLeft: '16px',
      listStyleType: 'disc',
    }),
  };

  const LinkContent = () => {
    if (!link.href) {
      return <ListItemText primary={link.text} />;
    }
    if (link.external) {
      return (
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.text}
        </a>
      );
    }
    return <Link href={link.href}>{link.text}</Link>;
  };
  return (
    <ListItem key={index} sx={itemStyles}>
      <LinkContent />
    </ListItem>
  );
};

const Footer = () => {
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  return isSchoolPage ? <SchoolFooter /> : <CorporateFooter />;
};

export default Footer;
