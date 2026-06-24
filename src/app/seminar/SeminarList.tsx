'use client';
import { SeminarData } from '../../lib/const/Seminar';
import { CommonLink } from '../../components/CommonLink';
import { useState, useMemo } from 'react';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const sxStyles = {
  category: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    gap: '40px 10px',
    mt: 6,
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
    },
    '>li >a': {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      columnGap: '20px',
      flexDirection: 'column',
      '@media screen and (max-width:768px)': {
        gridTemplateColumns: '1fr',
        rowGap: '20px',
      },
      '&:hover': {
        p: {
          color: '#00298A',
        },
      },
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-out',
  },
  section: {
    mt: '72px',
    scrollMarginTop: '100px',
  },
  tag: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '12px',
    color: '#00298A',
    '>p': {
      fontSize: '14px',
    },
  },
  detail: {
    fontSize: '14px',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
  },
  date: {
    fontSize: '14px',
  },
  time: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '12px',
  },
  timeLabel: {
    paddingInline: '8px',
    fontSize: '12px',
  },
  sort: {
    backgroundColor: '#F7F7F7',
    padding: '16px 24px 20px',
    display: 'flex',
    flexDirection: 'column',
    mt: '52px',
    rowGap: '8px',
  },
  sortItem: {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    columnGap: '32px',
    '@media screen and (max-width:768px)': {
      gridTemplateColumns: '1fr',
      rowGap: '8px',
    },
  },
  sortTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    mt: '8px',
  },
  sortCheckText: {
    fontSize: '14px',
  },
  noData: {
    mt: 4,
    textAlign: 'center',
    width: '100%',
    color: '#999',
  },
};

export const SeminarList = () => {
  const now = new Date();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const allCategories = useMemo(() => {
    return Array.from(new Set(SeminarData.flatMap((item) => item.categories)));
  }, []);

  const filteredSeminars = useMemo(() => {
    return SeminarData.filter((item) => {
      const isPast = item.dateTime < now;
      const status = isPast ? '開催終了' : '受付中';
      const matchCategory =
        selectedCategories.length === 0 ||
        item.categories.some((cat) => selectedCategories.includes(cat));
      const matchStatus =
        selectedStatuses.length === 0 || selectedStatuses.includes(status);

      return matchCategory && matchStatus;
    });
  }, [selectedCategories, selectedStatuses]);

  const handleToggle = (
    list: string[],
    setList: (v: string[]) => void,
    value: string,
  ) => {
    setList(
      list.includes(value)
        ? list.filter((id) => id !== value)
        : [...list, value],
    );
  };
  return (
    <>
      <Box sx={sxStyles.sort}>
        <Box sx={sxStyles.sortItem}>
          <Typography sx={sxStyles.sortTitle}>開催状況</Typography>
          <FormGroup row>
            {['受付中', '開催終了'].map((status) => (
              <FormControlLabel
                key={status}
                control={
                  <Checkbox
                    size="small"
                    onChange={() =>
                      handleToggle(
                        selectedStatuses,
                        setSelectedStatuses,
                        status,
                      )
                    }
                  />
                }
                label={
                  <Typography sx={sxStyles.sortCheckText}>{status}</Typography>
                }
              />
            ))}
          </FormGroup>
        </Box>
        <Box sx={sxStyles.sortItem}>
          <Typography sx={sxStyles.sortTitle}>カテゴリ</Typography>
          <FormGroup row>
            {allCategories.map((cat) => (
              <FormControlLabel
                key={cat}
                control={
                  <Checkbox
                    size="small"
                    onChange={() =>
                      handleToggle(
                        selectedCategories,
                        setSelectedCategories,
                        cat,
                      )
                    }
                  />
                }
                label={
                  <Typography sx={sxStyles.sortCheckText}>{cat}</Typography>
                }
              />
            ))}
          </FormGroup>
        </Box>
      </Box>

      <Box component="ul" sx={sxStyles.list}>
        {filteredSeminars.length > 0 ? (
          filteredSeminars.map((item) => {
            const isPast = item.dateTime < now;
            return (
              <Box component="li" key={item.id}>
                <CommonLink
                  link={{ href: `/seminar/${item.id}`, external: false }}
                >
                  <img
                    src={`../../../image/seminar/${item.thumbnail}`}
                    alt=""
                    width="500"
                    height="300"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Box sx={sxStyles.wrap}>
                    <Box sx={sxStyles.time}>
                      <Typography
                        sx={{
                          ...sxStyles.timeLabel,
                          backgroundColor: isPast ? '#ECECEC' : '#EFF7FF',
                          color: isPast ? '#545454' : '#00298A',
                        }}
                      >
                        {isPast ? '開催終了' : '受付中'}
                      </Typography>
                      <Typography sx={sxStyles.date}>
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
                    <Typography component="h3" sx={sxStyles.title}>
                      {item.name}
                    </Typography>
                    <Typography component="p" sx={sxStyles.detail}>
                      {item.description}
                    </Typography>
                    <Box sx={sxStyles.tag}>
                      {item.categories.map((cat, index) => (
                        <Typography key={index}># {cat}</Typography>
                      ))}
                    </Box>
                  </Box>
                </CommonLink>
              </Box>
            );
          })
        ) : (
          <Typography sx={sxStyles.noData}>
            該当するセミナーが見つかりませんでした。
          </Typography>
        )}
      </Box>
    </>
  );
};

export default SeminarList;
