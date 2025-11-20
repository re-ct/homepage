'use client';
import AppBar from '@mui/material/AppBar';
import { usePathname } from 'next/navigation';
import CorporateHeader from './CorporateHeader';
import DemandHeader from './DemandHeader';
import SchoolHeader from './SchoolHeader';
import SchoolFcHeader from './SchoolFcHeader';

const Header = () => {
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  const isDemandPage = pathname.includes('/demand');
  const isSchoolFcPage = pathname.includes('/school/fc');
  return (
    <AppBar
      position="sticky"
      sx={{ top: 0, boxShadow: 'none', background: 'none' }}
    >
      {isSchoolFcPage ? (
        <SchoolFcHeader />
      ) : isSchoolPage ? (
        <SchoolHeader />
      ) : isDemandPage ? (
        <DemandHeader />
      ) : (
        <CorporateHeader />
      )}
    </AppBar>
  );
};

export default Header;
