import { Box, Typography } from '@mui/material';
import { commonSxStyles } from '../components/Style';
import CustomButton from '../components/Button';
import FadeInOnView from '../components/FadeInOnView';
import { fcRequestForDocument, fcContact } from '../../../lib/const/Link';

const sxStyles = {
  list: {
    mt: 5,
    display: 'flex',
    gap: '16px',
    justifyContent: 'space-between',
    listStyle: 'none',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    '@media screen and (max-width:768px)': {
      flexDirection: 'column',
    },
  },
  heading: {
    color: commonSxStyles.color.white,
    textAlign: 'center',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
  item: {
    backgroundColor: commonSxStyles.color.white,
    width: '100%',
    borderRadius: '20px',
    px: 3,
    pt: 4,
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '1.8',
    textAlign: 'center',
  },
  itemText: {
    fontSize: '14px',
    mt: 1,
    lineHeight: '1.7',
    textAlign: 'center',
    '& > br': {
      display: 'none',
      '@media screen and (max-width:450px)': {
        display: 'block',
      },
    },
  },
  button: {
    mt: 2,
    width: '100%',
    textAlign: 'center',
  },
};

const Contact = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: commonSxStyles.color.primary[400],
        pt: 8,
        pb: 10,
        '@media screen and (max-width:450px)': {},
      }}
    >
      <FadeInOnView>
        <Box
          sx={{
            maxWidth: '948px',
            px: '24px',
            mx: 'auto',
            '@media screen and (max-width:450px)': {
              maxWidth: '100%',
            },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={[sxStyles.heading, commonSxStyles.typography.heading2]}
          >
            加盟を
            <br />
            ご検討の方へ
          </Typography>
          <Box
            sx={[sxStyles.list, commonSxStyles.typography.normalText]}
            component="ul"
          >
            <Box component="li" sx={sxStyles.item}>
              <Typography variant="h3" component="h3" sx={sxStyles.itemTitle}>
                資料請求
              </Typography>
              <Typography component="p" sx={sxStyles.itemText}>
                Re:ProSに関する資料を無料で
                <br />
                お受け取りできます
              </Typography>
              <Box sx={sxStyles.button}>
                <CustomButton
                  variant="primary"
                  label="資料請求フォームへ"
                  icon="keyboard-arrow-right"
                  href={fcRequestForDocument}
                  isExternal={true}
                  gaLabel="fc_request_for_document"
                />
              </Box>
            </Box>
            <Box component="li" sx={sxStyles.item}>
              <Typography variant="h3" component="h3" sx={sxStyles.itemTitle}>
                お問い合わせ
              </Typography>
              <Typography component="p" sx={sxStyles.itemText}>
                お申し込み・加盟に関する
                <br />
                ご相談はこちら
              </Typography>
              <Box sx={sxStyles.button}>
                <CustomButton
                  variant="primary"
                  label="お問い合わせフォームへ"
                  icon="keyboard-arrow-right"
                  href={fcContact}
                  isExternal={true}
                  gaLabel="fc_contact_form"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </FadeInOnView>
    </Box>
  );
};
export default Contact;
