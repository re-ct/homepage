'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { CheckCircle } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactNode } from 'react';

interface CourseDetailProps {
  course: {
    id: number;
    name: {
      category: string;
      level: string;
    };
    thumbnail: string;
    summary: string;
    details: string;
    target: string | ReactNode;
    sessionCount: string;
    duration: string;
    price: {
      tuition: number;
      materials: number;
      admission: number;
    };
    schedule: {
      dayOfWeeks: string[];
      times: string[];
    };
  };
}

const sxStyles = {
  heading1: {
    fontSize: '22px',
    backgroundImage:
      'repeating-linear-gradient( 90deg, #F5F5F5 , #F5F5F5 1px, transparent 1px, transparent 16px),repeating-linear-gradient( 0deg, #F5F5F5 , #F5F5F5 1px, #fff 1px, #fff 16px)',
    pt: 5,
    pb: 3,
    color: '#24285B',
  },
  heading2: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#24285B',
    position: 'relative',
    display: 'inline-block',
    px: '1em',
    '&:before, &:after': {
      position: 'absolute',
      content: "''",
      width: '4px',
      height: '100%',
      borderTop: '#24285B solid 1px',
      borderBottom: '#24285B solid 1px',
      top: 0,
    },
    '&:before': {
      left: 0,
      borderLeft: '#24285B solid 1px',
    },
    '&:after': {
      right: 0,
      borderRight: '#24285B solid 1px',
    },
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
  },
  detail: {
    fontSize: 14,
    textAlign: 'center',
  },
  item: {
    mt: 4,
    borderBottom: 'solid 1px #E0E0E0',
    pb: 4,
  },
  price: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  annotation: {
    fontSize: 12,
    textAlign: 'center',
  },
  dayOfWeek: {
    mt: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 3,
    py: 0,
    gap: 1,
  },
  dayOfWeekListOn: {
    fontSize: '14px',
    aspectRatio: 1,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '36px',
    maxHeight: '36px',
    border: 'solid 1px #24285B',
    color: '#24285B',
    fontWeight: 'bold',
  },
  dayOfWeekListOff: {
    fontSize: '14px',
    aspectRatio: 1,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '36px',
    maxHeight: '36px',
    border: 'solid 1px #9CA3AF',
    color: '#9CA3AF',
  },
  time: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '1.7',
  },
  itemContent: {
    mt: 3,
  },
  note: {
    p: 2,
    backgroundColor: '#EDF2FC',
    fontSize: '12px',
    gap: 0.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#24285B',
    '& > svg': {
      width: '18px',
    },
  },
  wrap: {
    pb: 10,
    mt: 2,
    px: 3,
    mx: 'auto',
    width: '100%',
    maxWidth: '800px',
  },
};

const allDayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

const Item = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box sx={sxStyles.item}>
      <Typography variant="h2" sx={sxStyles.heading2}>
        {title}
      </Typography>
      <Box sx={sxStyles.itemContent}>{children}</Box>
    </Box>
  );
};

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');
  return (
    <>
      <Box sx={sxStyles.heading1}>
        <Typography
          variant="h1"
          fontSize={'2rem'}
          lineHeight={1.5}
          fontWeight={700}
        >
          {course.name.category}
          {isSmallScreen ? <br /> : <Box component="span" marginLeft={1} />}
          {course.name.level}
        </Typography>
      </Box>
      <Box sx={sxStyles.wrap}>
        <img
          src={`../../../../image/school/${course.thumbnail}`}
          alt={`${course.name.category}${course.name.level}のイメージ`}
          width="800"
          height="500"
          style={{
            marginTop: 32,
            width: '100%',
            height: 'auto',
            maxWidth: '500px',
          }}
        />
        <Item title="授業内容">
          <Typography variant="body1" sx={sxStyles.description}>
            {course.summary}
            <br />
            {course.details}
          </Typography>
        </Item>
        <Item title="対象">
          <Typography variant="body1" sx={sxStyles.detail}>
            {course.target}
          </Typography>
        </Item>
        <Item title="受講回数">
          <Typography variant="body1" sx={sxStyles.detail}>
            {course.sessionCount}
          </Typography>
        </Item>
        <Item title="料金">
          <Typography variant="body1" sx={sxStyles.detail}>
            受講料
          </Typography>
          <Typography variant="subtitle2" sx={sxStyles.price}>
            {course.price.tuition}円
          </Typography>
          <Typography variant="body2" sx={sxStyles.annotation}>
            別途、教材費{course.price.materials}円/月
            <br />
            入会時に、入会費 {course.price.admission}円が発生いたします。
          </Typography>
        </Item>
        <Item title="開催日程">
          <List sx={sxStyles.dayOfWeek}>
            {allDayOfWeek.map((day, index) => (
              <ListItem
                key={index}
                sx={
                  course.schedule.dayOfWeeks.includes(day)
                    ? sxStyles.dayOfWeekListOn
                    : sxStyles.dayOfWeekListOff
                }
              >
                {day}
              </ListItem>
            ))}
          </List>
          <Box mt={2}>
            {course.schedule.times.map((time, index) => (
              <Typography variant="body1" sx={sxStyles.time} key={index}>
                ・{time}
              </Typography>
            ))}
          </Box>
          <Typography sx={sxStyles.note} mt={2}>
            <CheckCircle />
            日程の調整可能です。お気軽にご相談ください。
          </Typography>
        </Item>
      </Box>
    </>
  );
};

export default CourseDetail;
