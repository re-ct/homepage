'use client';
import AppBar from '@mui/material/AppBar';
import { usePathname } from 'next/navigation';
import CorporateHeader from './CorporateHeader';
import DemandHeader from './DemandHeader';
import SchoolHeader from './SchoolHeader';

const Header = () => {
  const pathname = usePathname();
  const isSchoolPage = pathname.includes('/school');
  const isDemandPage = pathname.includes('/demand');

  return (
    <AppBar
      position="sticky"
      sx={{ top: 0, boxShadow: 'none', background: 'none' }}
    >
      {isSchoolPage ? (
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
