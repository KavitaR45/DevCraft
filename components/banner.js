import { useTheme } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Banner(props) {

    const theme = useTheme();
    return (
        <section className={props.sectionClass} id={props.id}
            style={{ background: `${props.banner ? `url(${props.banner}) ${props.bannerColor}` : props.bannerColor}`, }}>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={12} sm={12} md={6} lg={5} >
                    {props.title1 && <h1 style={{ ...theme.typography.h1 }}>{props.title1}</h1>}
                    {props.title2 && <h2 style={{ ...theme.typography.h2 }}>{props.title2}</h2>}
                    <p style={{ ...theme.typography.p }}>{props.para}</p>
                    {props.btn && <Button variant="contained" color="primary" href={props.link} style={{ ...theme.button.primary }}>{props.btn}</Button>}
               
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className={props.imgClass}>
                    <LazyLoadImage alt='banner-image' src={props.img} style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </section>
    );
}
