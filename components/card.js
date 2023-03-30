import { useTheme } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
export default function Card(props) {

    const theme = useTheme();
    return (
        <section className={props.sectionClass} id="services"
            style={{ background: `${props.banner ? `url(${props.banner}) ${props.bannerColor}` : props.bannerColor}`, }}>
            <Grid container alignItems="center" justifyContent="center" >
                {props.title2 && <h2 style={{ ...theme.typography.h2 }}>{props.title2}</h2>}
            </Grid>
            <Grid container alignItems="center" justifyContent="start"  spacing={5}>
                {props.cardD.map((x, i) => {
                    return (
                        <Grid item md={6} sm={12} lg={4} style={{margin:"30px 0 0 0"}} key={'cardsData' + i + x.title} >
                           <div style={CardStyle}>
                            {x.title3 && <h2 style={{ ...theme.typography.h3 }}>{x.title3}</h2>}
                            <p style={{ ...theme.typography.p }}>{x.para}</p>
                            {x.btn && <Button variant="contained" color="primary" href={x.link} style={{ ...theme.button.primary }}>{x.btn}</Button>}
                           </div>
                        </Grid>
                    )
                })}
            </Grid>
        </section>
    );
}

const CardStyle={
    padding:"40px",
    borderRadius:"20px",
    boxShadow:"0px 4px 94px rgba(0, 0, 0, 0.05)",
    background:"white"
}
