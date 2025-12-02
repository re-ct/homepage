'use client';
import Toolbar from '@mui/material/Toolbar';
import { CommonLink } from '../CommonLink';
import Image from 'next/image';
import logoRectImg from '../../../public/image/top/logo_rect.png';

const CorporateHeader = () => {
  return (
    <Toolbar sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }} component="h1">
      <CommonLink
        link={{
          href: '/',
          external: false,
        }}
      >
        <Image
          alt="RE:CT(レクト)"
          src={logoRectImg.src}
          width={120}
          height={34}
          priority={true}
        />
      </CommonLink>
    </Toolbar>
  );
};

export default CorporateHeader;
