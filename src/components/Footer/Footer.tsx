'use client';
import SchoolFooter from './SchoolFooter';
import CorporateFooter from './CorporateFooter';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  return isSchoolPage ? <SchoolFooter /> : <CorporateFooter />;
};

export default Footer;
