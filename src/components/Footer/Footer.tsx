'use client';
import SchoolFooter from './SchoolFooter';
import CorporateFooter from './CorporateFooter';
import CareerFooter from './CareerFooter';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  const isCareerPage = pathname.includes('/career');
  return (
    isSchoolPage ? (
        <SchoolFooter />
      ) : isCareerPage ? (
        <CareerFooter />
      ) : (
        <CorporateFooter />
      )
  )
};

export default Footer;
