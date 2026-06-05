'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';
import kvPcImg1 from '../../public/image/top/fv_1_pc.webp';
import kvPcImg2 from '../../public/image/top/fv_2_pc.webp';
import kvPcImg3 from '../../public/image/top/fv_3_pc.webp';
import kvSpImg1 from '../../public/image/top/fv_1_sp.webp';
import kvSpImg2 from '../../public/image/top/fv_2_sp.webp';
import kvSpImg3 from '../../public/image/top/fv_3_sp.webp';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export type KvSlide = {
  alt: string;
  src: StaticImageData | string;
  width: number;
  height: number;
};

// 画像を追加したら配列にスライドを登録してください（PC / SP で別々に設定）
export const KV_PC_SLIDES: KvSlide[] = [
  { src: kvPcImg1, alt: 'スライド1', width: 3127, height: 1277 },
  { src: kvPcImg2, alt: 'スライド2', width: 3127, height: 1277 },
  { src: kvPcImg3, alt: 'スライド3', width: 3127, height: 1277 },
];

export const KV_SP_SLIDES: KvSlide[] = [
  { src: kvSpImg1, alt: 'スライド1', width: 878, height: 1319 },
  { src: kvSpImg2, alt: 'スライド2', width: 878, height: 1319 },
  { src: kvSpImg3, alt: 'スライド3', width: 878, height: 1319 },
];

const SLIDE_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 1000;
const SLIDE_ZOOM_SCALE = 1.08;
const SLIDE_ZOOM_DURATION_MS = SLIDE_INTERVAL_MS + FADE_DURATION_MS * 2;

const getSlideAspectRatio = (slides: KvSlide[]) => {
  const baseSlide = slides[0] ?? KV_PC_SLIDES[0];
  return `${baseSlide.width} / ${baseSlide.height}`;
};

const sxStyles = {
  pcWrap: {
    textAlign: 'center',
    overflow: 'hidden',
    '@media screen and (max-width:800px)': {
      display: 'none',
    },
  },
  spWrap: {
    display: 'none',
    '@media screen and (max-width:800px)': {
      display: 'block',
    },
  },
  section: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    '@keyframes kvSlideZoom': {
      from: {
        transform: 'scale(1)',
      },
      to: {
        transform: `scale(${SLIDE_ZOOM_SCALE})`,
      },
    },
    '@keyframes kvCopyLineRise': {
      from: {
        opacity: 0,
        transform: 'translateY(100%)',
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
  sectionAspectRatio: (slides: KvSlide[]) => ({
    aspectRatio: getSlideAspectRatio(slides),
  }),
  slideEmpty: {
    position: 'absolute',
    inset: 0,
    backgroundColor: '#f5f5f5',
  },
  slide: {
    position: 'absolute',
    inset: 0,
    transform: 'scale(1)',
    transformOrigin: 'center center',
    transition: `opacity ${FADE_DURATION_MS}ms ease-in-out`,
    willChange: 'opacity, transform',
    '& img': {
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
  slideActive: {
    opacity: 1,
    pointerEvents: 'auto',
    animation: `kvSlideZoom ${SLIDE_ZOOM_DURATION_MS}ms linear forwards`,
  },
  slideLeaving: {
    opacity: 0,
    pointerEvents: 'none',
    animation: `kvSlideZoom ${SLIDE_ZOOM_DURATION_MS}ms linear forwards`,
  },
  slideInactive: {
    opacity: 0,
    pointerEvents: 'none',
    animation: 'none',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: '335px',
    pointerEvents: 'none',
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 100%)',
  },
  copyWrap: {
    position: 'absolute',
    left: '50%',
    bottom: '100px',
    zIndex: 10,
    pointerEvents: 'none',
    width: '100%',
    maxWidth: '1372px',
    px: '16px',
    transform: 'translateX(-50%)',
    '@media screen and (max-width:800px)': {
      px: '16px',
    },
  },
  textBlock: {
    textAlign: 'left',
    color: '#fff',
    m: 0,
  },
  line1: {
    fontSize: '31px',
    fontWeight: 700,
    lineHeight: 1.4,
    fontFeatureSettings: '"palt"',
    letterSpacing: '0.03em',
    overflow: 'hidden',
    '@media screen and (max-width:800px)': {
      fontSize: '18px',
    },
  },
  line2: {
    fontSize: '68px',
    fontWeight: 700,
    lineHeight: 1.2,
    mt: 0.5,
    fontFeatureSettings: '"palt"',
    letterSpacing: '0.03em',
    overflow: 'hidden',
    '@media screen and (max-width:800px)': {
      fontSize: '43px',
      mt: '6px',
    },
  },
  line3: {
    fontFamily: lato.style.fontFamily,
    fontSize: '19px',
    fontWeight: 400,
    lineHeight: 1.2,
    mt: 1,
    fontFeatureSettings: '"palt"',
    letterSpacing: '0.03em',
    overflow: 'hidden',
    '@media screen and (max-width:800px)': {
      fontSize: '14px',
      mt: '14px',
    },
  },
  copyLineText: {
    display: 'inline-block',
    opacity: 0,
    transform: 'translateY(100%)',
    animation: 'kvCopyLineRise 1.05s cubic-bezier(0.22, 1, 0.36, 1) forwards',
    willChange: 'opacity, transform',
  },
  copyLineText1: {
    animationDelay: '0.35s',
  },
  copyLineText2: {
    animationDelay: '0.75s',
  },
  copyLineText2SpSecond: {
    animationDelay: '1.1s',
  },
  copyLineText3: {
    animationDelay: '1.1s',
    '@media screen and (max-width:800px)': {
      animationDelay: '1.45s',
    },
  },
  copyLineMask: {
    display: 'inline-block',
    overflow: 'hidden',
  },
  pcOnlyLine: {
    '@media screen and (max-width:800px)': {
      display: 'none',
    },
  },
  spOnlyLine: {
    display: 'none',
    '@media screen and (max-width:800px)': {
      display: 'block',
    },
  },
};

const KvMainCopy = () => {
  return (
    <Box sx={sxStyles.copyWrap}>
      <Box component="h1" sx={sxStyles.textBlock}>
        <Typography component="p" sx={sxStyles.line1}>
          <Box
            component="span"
            sx={[sxStyles.copyLineText, sxStyles.copyLineText1]}
          >
            社会のコミュニケーションを
          </Box>
        </Typography>
        <Typography component="p" sx={sxStyles.line2}>
          <Box
            component="span"
            sx={[
              sxStyles.copyLineText,
              sxStyles.copyLineText2,
              sxStyles.pcOnlyLine,
            ]}
          >
            ITの力でもっと活発に
          </Box>
          <Box
            component="span"
            sx={[sxStyles.copyLineMask, sxStyles.spOnlyLine]}
          >
            <Box
              component="span"
              sx={[sxStyles.copyLineText, sxStyles.copyLineText2]}
            >
              ITの力で
            </Box>
          </Box>
          <Box
            component="span"
            sx={[sxStyles.copyLineMask, sxStyles.spOnlyLine]}
          >
            <Box
              component="span"
              sx={[sxStyles.copyLineText, sxStyles.copyLineText2SpSecond]}
            >
              もっと活発に
            </Box>
          </Box>
        </Typography>
        <Typography component="p" sx={sxStyles.line3}>
          <Box
            component="span"
            sx={[sxStyles.copyLineText, sxStyles.copyLineText3]}
          >
            RE:Communication Technology
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

type KvSlideshowProps = {
  slides: KvSlide[];
  priority?: boolean;
};

const KvSlideshow = ({ slides, priority = false }: KvSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const hasMultipleSlides = slides.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;

    const timer = setTimeout(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearTimeout(timer);
  }, [currentIndex, hasMultipleSlides, slides.length]);

  useEffect(() => {
    if (previousIndex === null) return;

    const timer = setTimeout(() => {
      setPreviousIndex(null);
    }, FADE_DURATION_MS);

    return () => clearTimeout(timer);
  }, [previousIndex]);

  if (slides.length === 0) {
    return <Box aria-hidden sx={sxStyles.slideEmpty} />;
  }

  return (
    <>
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const isLeaving = index === previousIndex && !isActive;
        let slideStateStyle = sxStyles.slideInactive;
        const src = typeof slide.src === 'string' ? slide.src : slide.src.src;

        if (isLeaving) {
          slideStateStyle = sxStyles.slideLeaving;
        }

        if (isActive) {
          slideStateStyle = sxStyles.slideActive;
        }

        return (
          <Box key={index} sx={[sxStyles.slide, slideStateStyle]}>
            <Image
              alt={slide.alt}
              src={src}
              fill
              sizes="100vw"
              priority={priority && index === 0}
            />
          </Box>
        );
      })}
    </>
  );
};

type KvSectionProps = {
  slides: KvSlide[];
  priority?: boolean;
};

const KvSection = ({ slides, priority = false }: KvSectionProps) => {
  return (
    <Box sx={[sxStyles.section, sxStyles.sectionAspectRatio(slides)]}>
      <KvSlideshow slides={slides} priority={priority} />
      <Box aria-hidden sx={sxStyles.gradientOverlay} />
      <KvMainCopy />
    </Box>
  );
};

const Kv = () => {
  return (
    <>
      <Box sx={sxStyles.pcWrap}>
        <KvSection slides={KV_PC_SLIDES} />
      </Box>
      <Box sx={sxStyles.spWrap}>
        <KvSection slides={KV_SP_SLIDES} priority />
      </Box>
    </>
  );
};

export default Kv;
