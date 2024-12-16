'use client';
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

type TBreadCrumbProps = {
  titles?: string[];
};

const sxStyles = {
  wrap: {
    textAlign: 'center',
    mx: 'auto',
    maxWidth: '800px',
    width: '100%',
    '& > nav': {
      overflowX: 'scroll',
      margin: 0,
    },
    '& > nav > ol': {
      flexWrap: 'nowrap',
      width: 'max-content',
      padding: '24px',
    },
  },
};

const BreadcrumbNavigation: React.FC<TBreadCrumbProps> = ({
  titles,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <Box component="section" sx={sxStyles.wrap}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ my: 2, mx: 2 }}>
        <Link key="link-home" underline="hover" color="inherit" href="/">
          株式会社レクト
        </Link>
        ;
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}/`;
          const title = titles ? titles[index] : link;
          return pathNames.length - 1 === index ? (
            <Typography key={`link-${index}`} color="text.primary">
              {title}
            </Typography>
          ) : (
            <Link
              key={`link-${index}`}
              underline="hover"
              color="inherit"
              href={href}
            >
              {title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbNavigation;
