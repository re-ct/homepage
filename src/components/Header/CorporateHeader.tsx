'use client';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Image from 'next/image';
import logoRectImg from '../../../public/image/top/logo_rect.png';

const CorporateHeader = () => {
  return (
    <Toolbar sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }} component="h1">
      <Link href="/">
        <Image
          alt="RE:CT(レクト)"
          src={logoRectImg.src}
          width={120}
          height={34}
          priority={true}
        />
      </Link>
    </Toolbar>
  );
};

export default CorporateHeader;
