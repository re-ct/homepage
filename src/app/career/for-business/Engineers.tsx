'use client';
import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import FadeInOnView from '../../../components/FadeInOnView';
import useMediaQuery from '@mui/material/useMediaQuery';

export type TechCategory = {
  title: string;
  skills: string[];
  styles: {
    backgroundColor: string;
    color: string;
  };
};

const techCategories: TechCategory[] = [
  {
    title: 'バックエンドエンジニア',
    skills: ['Go', 'Ruby on Rails', 'Python', 'PHP', 'Java', 'Symfony'],
    styles: {
      backgroundColor: '#EFF7FF',
      color: '#00298A',
    },
  },
  {
    title: 'フロントエンドエンジニア',
    skills: ['JavaScript', 'React', 'Next.js', 'Vue.js', 'TypeScript'],
    styles: {
      backgroundColor: '#FFEDFE',
      color: '#390094',
    },
  },
  {
    title: 'インフラエンジニア',
    skills: ['AWS', 'Google Cloud', 'Pulumi', 'Terraform'],
    styles: {
      backgroundColor: '#E8FDDA',
      color: '#02401F',
    },
  },
];
const sxStyles = {
  wrap: {
    width: '100%',
    backgroundColor: commonSxStyles.color.white,
    paddingBlock: '80px 110px',
  },
  contentArea: {
    maxWidth: '932px',
    px: '16px',
    mx: 'auto',
    '@media screen and (max-width:768px)': {
      maxWidth: '100%',
    },
  },
  categoryBlock: {
    marginTop: '48px',
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    columnGap: '16px',
    backgroundColor: commonSxStyles.color.white,
    boxShadow: '0 0 4px rgba(0,0,0,0.25)',
    borderRadius: '8px',
    p: '24px',
    '&:not(:first-of-type)': {
      marginTop: '24px',
    },
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '20px',
    },
  },
  categoryTitle: {
    fontWeight: 'bold',
    marginTop: '4px',
  },
  heading2: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    '@media screen and (max-width:768px)': {
      fontSize: '20px',
    },
  },
  headingText: {
    marginTop: '12px',
    textAlign: 'center',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    listStyle: 'none',
    p: 0,
    m: 0,
    width: '100%',
  },
  listItem: {
    borderRadius: '4px',
    p: '4px 12px',
    backgroundColor: '#EFF7FF',
    color: '#000',
  },
  techName: {
    fontWeight: 'bold',
    textAlign: 'center',
    wordBreak: 'break-word',
  },
};

const Engineers = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  return (
    <Box sx={sxStyles.wrap}>
      <FadeInOnView>
        <Box sx={sxStyles.contentArea}>
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading2, commonSxStyles.typography.heading2]}
          >
            主なご紹介対象
          </Typography>
          <Typography
            sx={[sxStyles.headingText, commonSxStyles.typography.normalText]}
          >
            Web開発の技術スタックを持つ{isSmallScreen && <br />}
            エンジニアを中心に母集団を形成しています。
          </Typography>
          {techCategories.map((category, catIndex) => (
            <Box key={catIndex} sx={sxStyles.categoryBlock}>
              <Typography
                variant="h2"
                sx={[
                  sxStyles.categoryTitle,
                  commonSxStyles.typography.largeText,
                ]}
              >
                {category.title}
              </Typography>
              <Box component="ul" sx={sxStyles.list}>
                {category.skills.map((skill, skillIndex) => (
                  <Box
                    component="li"
                    key={skillIndex}
                    sx={[sxStyles.listItem, category.styles]}
                  >
                    <Typography
                      sx={[
                        sxStyles.techName,
                        commonSxStyles.typography.normalText,
                      ]}
                    >
                      {skill}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </FadeInOnView>
    </Box>
  );
};

export default Engineers;
