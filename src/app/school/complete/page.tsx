'use client';
import '../../globals.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

const Complete = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location.href =
        'https://www.kaihipay.jp/forms?form_code=2290891890827256';
    }, 3 * 1000);
  }, []);
  return (
    <main>
      <Box
        component="section"
        sx={{ position: 'relative', textAlign: 'center' }}
      >
        <Container sx={{ mt: 8 }}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: 22, fontWeight: 700 }}
          >
            体験授業のご興味をお持ちいただきありがとうございます！
          </Typography>
          <p>
            申し込みを行うための外部サイトへ遷移しますので、少々お待ちください。
          </p>
          <p>
            3秒後に遷移します。 <br />
            自動的に遷移しない場合は
            <Link
              style={{ color: '#0000ff' }}
              href="https://www.kaihipay.jp/forms?form_code=2290891890827256"
            >
              こちら
            </Link>
            をクリックしてください。
          </p>
        </Container>
      </Box>
    </main>
  );
};

export default Complete;
