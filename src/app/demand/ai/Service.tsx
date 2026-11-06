import Heading2 from '../components/Heading2';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';

type ServiceItem = {
  id: string;
  title: string;
  subTitle: string;
  detail: string;
};

const serviceData: ServiceItem[] = [
  {
    id: '1',
    title: 'AI導入コンサルティング',
    subTitle: '課題整理・導入計画・ツール選定',
    detail:
      '企業の業務課題をヒアリングし、AIを活用できる業務の洗い出しから、適切なツールの選定・導入計画まで支援します。',
  },
  {
    id: '2',
    title: 'AI業務効率化・自動化支援',
    subTitle: '既存業務の改善・ワークフロー構築',
    detail:
      'AIツールや外部サービスを組み合わせ、日常業務の効率化・自動化を実現します。',
  },
  {
    id: '3',
    title: 'AIを組み込んだシステム開発',
    subTitle: '新規開発・既存システムへの機能追加',
    detail:
      '企業ごとの課題に合わせて、AIを組み込んだWebシステムを設計・開発します。',
  },
  {
    id: '4',
    title: 'AI運用・定着支援',
    subTitle: '効果検証・継続的な改善',
    detail:
      'AI導入後の利用状況や効果を確認し、業務への定着と継続的な改善を支援します。',
  },
];

const sxStyles = {
  // development/Case.tsx と同じ「左に見出し・右にカード」の構成
  wrap: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    alignItems: 'flex-start',
    gap: 6,
    '@media screen and (max-width:835px)': {
      gridTemplateColumns: '1fr',
      gap: 4,
    },
    '@media screen and (max-width:450px)': {
      gap: 3,
    },
  },
  lead: {
    mt: 2,
    '@media screen and (max-width:450px)': {
      textAlign: 'center',
    },
  },
  list: {
    listStyle: 'none',
    borderBottom: `solid 1px ${commonSxStyles.color.border}`,
  },
  listItem: {
    borderTop: `solid 1px ${commonSxStyles.color.border}`,
    py: 3,
  },
  subTitle: {
    mt: 1,
    fontWeight: 'bold',
    color: commonSxStyles.color.primary,
  },
  text: {
    mt: 2,
  },
};

const Service = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        pt: 7,
        pb: 12,
        '@media screen and (max-width:450px)': {
          pb: 9,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '940px',
          width: '100%',
          mx: 'auto',
          px: 2.5,
        }}
      >
        <Box sx={sxStyles.wrap}>
          <Box>
            <Heading2
              subText="service"
              mainText="ご提供サービス"
              position="right"
            />
            <Typography
              sx={[sxStyles.lead, commonSxStyles.typography.normalText]}
            >
              企業の課題に合わせて、
              <br />
              必要な支援を組み合わせて提供します。
            </Typography>
          </Box>
          <Box component="ul" sx={sxStyles.list}>
            {serviceData.map((item) => (
              <Box component="li" key={item.id} sx={sxStyles.listItem}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={commonSxStyles.typography.heading3}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={[sxStyles.subTitle, commonSxStyles.typography.normalText]}
                >
                  {item.subTitle}
                </Typography>
                <Typography
                  sx={[sxStyles.text, commonSxStyles.typography.normalText]}
                >
                  {item.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Service;
