import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MediaCard from "../components/MediaCard";
import Grid from "@mui/material/Grid";
import computerImg from "../../public/image/top/service_programming.png";
import soudanImg from "../../public/image/top/service_soudan.png";

const Business = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
        padding: "150px 16px 0 16px",
      }}
    >
      <Typography variant="h2" sx={{fontWeight: "bold", letterSpacing: "5px", fontSize: "40px"}}>
        事業内容
      </Typography>
      <Typography variant="caption" align="center" component="span" sx={{fontSize: "17px", fontWeight: "bold", letterSpacing: "3px", color: "#C2C2C2"}}>
      Service
    </Typography>
      <Grid container style={{ marginTop: 40, gap: "40px 24px" }}>
        <Grid sx={{width: "calc(50% - 12px)","@media screen and (max-width:500px)": {width: "100%"}}}>
          <MediaCard
            heading="プログラミング教室"
            text="学生向けのプログラミングスクール"
            href="/school"
            imgSrc={computerImg.src}
            imgAlt="プログラミング教室"
          />
        </Grid>
        <Grid sx={{width: "calc(50% - 12px)","@media screen and (max-width:500px)": {width: "100%"}}}>
          <MediaCard
            heading="開発等の相談"
            text="どんな案件でもまずはご相談ください！"
            href="/demand"
            imgSrc={soudanImg.src}
            imgAlt="開発の相談"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Business;
