import '../../globals.css';
import Box from '@mui/material/Box';
import { SeminarData } from '../../../lib/const/Seminar';
import { notFound } from 'next/navigation';
import BreadcrumbsNavigation from '../../BreadcrumbsNavigation';
import { seminarTitle } from '@/lib/const/BreadCrumbTitle';
import Typography from '@mui/material/Typography';
import { CommonLink } from '../../../components/CommonLink';

interface SeminarDetailsPageProps {
  params: Promise<{
    seminarSlug: string;
  }>;
}

export async function generateStaticParams() {
  return SeminarData.map((item) => ({
    seminarSlug: String(item.id),
  }));
}

export async function generateMetadata({ params }: SeminarDetailsPageProps) {
  const { seminarSlug } = await params;
  const item = SeminarData.find((item) => String(item.id) === seminarSlug);

  if (!item) {
    return { title: 'セミナーが見つかりません' };
  }

  return { title: `${item.name} | 株式会社` };
}

const sxStyles = {
  heading: {
    fontSize: '38px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '32px',
      px: '20px',
    },
  },
  text: {
    fontSize: '14px',
    mt: '8px',
    '@media screen and (max-width:768px)': {
      px: '20px',
    },
  },
  wrap: {
    mt: '52px',
    h3: {
      fontWeight: 'bold',
      paddingLeft: '12px',
      borderLeft: 'solid 4px #00298A',
    },
  },
  otherTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1.6',
    maxWidth: '940px',
    mx: 'auto',
    px: '20px',
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1.6',
    marginTop: '16px',
  },
  form: {
    iframe: {
      width: '100%',
      border: 'none',
      minHeight: '1500px',
    },
  },
  other: {
    pb: '100px',
  },
  listWrap: {
    maxWidth: '940px',
    mx: 'auto',
    px: '20px',
    '@media screen and (max-width:768px)': {
      overflowX: 'scroll',
      px: '0',
    },
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    listStyle: 'none',
    gap: '62px 10px',
    mt: 3,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: 'repeat(3,90%)',
    },
    '>li': {
      '>a': {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '&:hover': {
          '> .btn-container': {
            backgroundColor: '#00298A',
            color: '#fff',
          },
        },
      },
      '&:first-child': {
        '@media screen and (max-width:768px)': {
          pl: '20px',
        },
      },
    },
  },
  button: {
    color: '#00298A',
    border: 'solid 1px #00298A',
    borderRadius: '50px',
    padding: '8px 20px',
    width: 'fit-content',
    fontSize: '12px',
    fontWeight: 'bold',
    mt: '18px',
    columnGap: '8px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease-out',
    '.arrow-icon': {
      fontSize: '14px',
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    mt: 2,
  },
  section: {
    maxWidth: '940px',
    mx: 'auto',
    px: '20px',
    pt: '70px',
    pb: '100px',
    '@media screen and (max-width:768px)': {
      px: 0,
    },
  },
  details: {
    fontSize: '14px',
    mt: '20px',
  },
  category: {
    color: '#00298A',
    mt: '24px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  timeLabel: {
    paddingInline: '10px',
    fontSize: '14px',
    width: 'fit-content',
  },
  tag: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '12px',
    color: '#00298A',
    '>p': {
      fontSize: '14px',
      marginTop: 0,
    },
  },
  content: {
    mt: 5,
  },
  information: {
    mt: '20px',
  },
  informationWrap: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    columnGap: '12px',
    paddingBlock: '16px',
    borderBottom: 'solid 1px #969696',
  },
  speaker: {
    display: 'grid',
    gridTemplateColumns: '44px 1fr',
    columnGap: '12px',
    mt: '20px',
    alignItems: 'center',
    img: {
      maxWidth: '100%',
    },
  },
  speakerAffiliation: {
    fontSize: '12px',
  },
  speakerName: {
    fontSize: '14px',
  },
  note: {
    mt: '12px',
    paddingLeft: '1em',
    lineHeight: '1.6',
  },
  date: {
    marginTop: '12px',
    marginBottom: '8px',
    fontSize: '14px',
  },
  otherLabel: {
    backgroundColor: '#EFF7FF',
    color: '#00298A',
    position: 'absolute',
    top: '4px',
    left: '4px',
    paddingInline: '8px',
    fontSize: '12px',
  },
};

const SeminarDetailsPage = async ({ params }: SeminarDetailsPageProps) => {
  const now = new Date();
  const { seminarSlug } = await params;
  const item = SeminarData.find((item) => String(item.id) === seminarSlug);

  if (!item) {
    return notFound();
  }

  const currentBreadcrumbs = [...seminarTitle, item.name];

  const otherItems = SeminarData.filter(
    (other) => String(other.id) !== seminarSlug && other.dateTime > now,
  ).slice(0, 3);
  const isPast = item.dateTime < now;
  return (
    <main>
      <Box component="section" sx={sxStyles.section}>
        <Typography variant="h1" sx={sxStyles.heading}>
          セミナー
        </Typography>
        <Typography sx={sxStyles.text}>
          参加をご希望の方は、お申し込みフォームからお問い合わせください。
        </Typography>
        <Box sx={sxStyles.wrap}>
          <Typography
            sx={{
              ...sxStyles.timeLabel,
              backgroundColor: isPast ? '#ECECEC' : '#EFF7FF',
              color: isPast ? '#545454' : '#00298A',
            }}
          >
            {isPast ? '開催終了' : '受付中'}
          </Typography>
          <Typography variant="h2" sx={sxStyles.name}>
            {item.name}
          </Typography>
          <img
            src={`../../../image/download/${item.thumbnail}`}
            alt=""
            width="1500"
            height="900"
            style={{
              width: '100%',
              height: 'auto',
              marginTop: '20px',
            }}
          />
          <Box sx={sxStyles.details}>
            {typeof item.details === 'string' ? (
              <Typography>{item.details || item.description}</Typography>
            ) : (
              item.details
            )}
          </Box>
          <Box sx={sxStyles.content}>
            <Typography component="h3">セミナー概要</Typography>
            <Box component="dl" sx={sxStyles.information}>
              <Box component="div" sx={sxStyles.informationWrap}>
                <Typography component="dt">開催日時</Typography>
                <Typography component="dd">
                  {item.dateTime.toLocaleString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  〜
                </Typography>
              </Box>
              <Box component="div" sx={sxStyles.informationWrap}>
                <Typography component="dt">場所</Typography>
                <Typography component="dd">{item.location}</Typography>
              </Box>
              <Box component="div" sx={sxStyles.informationWrap}>
                <Typography component="dt">定員</Typography>
                <Typography component="dd"></Typography>
              </Box>
              <Box component="div" sx={sxStyles.informationWrap}>
                <Typography component="dt">参加費</Typography>
                <Typography component="dd">{item.fee}円</Typography>
              </Box>
              <Box component="div" sx={sxStyles.informationWrap}>
                <Typography component="dt">カテゴリ</Typography>
                <Typography component="dd">
                  <Box sx={sxStyles.tag}>
                    {item.categories.map((cat, index) => (
                      <Typography key={index} sx={sxStyles.category}>
                        # {cat}
                      </Typography>
                    ))}
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={sxStyles.wrap}>
            <Typography component="h3">登壇者</Typography>
            {item.speakers.map((speaker, index) => {
              const imageSrc = speaker.icon
                ? `../../../image/seminar/${speaker.icon}.webp`
                : `../../../image/seminar/no-icon.webp`;
              return (
                <Box key={index} sx={sxStyles.speaker}>
                  <Box
                    component="img"
                    src={imageSrc}
                    alt={speaker.name}
                    width="60"
                    height="60"
                  />
                  <Box>
                    <Typography sx={sxStyles.speakerName}>
                      {speaker.name}
                    </Typography>
                    <Typography sx={sxStyles.speakerAffiliation}>
                      {speaker.affiliation}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={sxStyles.wrap}>
            <Typography component="h3">注意事項</Typography>
            <Box component="ul" sx={sxStyles.note}>
              <Typography component="li">
                講演内容、時間、登壇者は、予告なく変更になる場合がございます。あらかじめご了承ください。
              </Typography>
              <Typography component="li">
                反社会的勢力に該当する方、およびその関係者の方のご参加はお断りいたします。
              </Typography>
              <Typography component="li">
                本セミナーの目的と異なる、他参加者への過度な勧誘や営業行為は固くお断りいたします。発見次第、ご退場いただく場合がございます。
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {otherItems.length > 0 && (
        <Box sx={sxStyles.other}>
          <Typography variant="h2" sx={sxStyles.otherTitle}>
            その他のセミナー
          </Typography>
          <Box sx={sxStyles.listWrap}>
            <Box component="ul" sx={sxStyles.list}>
              {otherItems.map((other) => (
                <Box component="li" key={other.id}>
                  <CommonLink
                    link={{
                      href: `/seminar/${other.id}`,
                      external: false,
                    }}
                  >
                    <Typography sx={sxStyles.otherLabel}>受付中</Typography>
                    <img
                      src={`../../../image/download/${other.thumbnail}`}
                      alt=""
                      style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '500/300',
                        objectFit: 'cover',
                      }}
                    />
                    <Typography sx={sxStyles.title}>{other.name}</Typography>
                    <Typography sx={sxStyles.date}>
                      {other.dateTime.toLocaleString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}{' '}
                      〜
                    </Typography>
                    <Box sx={sxStyles.tag}>
                      {other.categories.map((cat, index) => (
                        <Typography key={index} sx={sxStyles.category}>
                          # {cat}
                        </Typography>
                      ))}
                    </Box>
                  </CommonLink>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      )}
      <BreadcrumbsNavigation titles={currentBreadcrumbs} />
    </main>
  );
};

export default SeminarDetailsPage;
