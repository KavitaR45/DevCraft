import React from "react";
import { useTheme } from "@material-ui/styles";
import { Grid, } from "@material-ui/core";
import Link from "next/link";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const Footer = () => {
    const desktopMenuItems = [
        { name: "Home", link: "#banner" },
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
    ];
    const theme = useTheme();
    const MarginBottom = {margin:"0 0 14px 0",fontSize:"1.05rem",lineHeight:"1.8rem"}
    const Margin8 = {margin:"0 10px"}
    return (
        <footer className="footer-deco text-white" style={{ background: `#3D3D3D`, padding: "50px 0 10px 0", }}>
            {/* <img alt='footer-bg-logo' style={{ width: "100%", height: "200px" }} src={"/images/footer-img.png"} /> */}
            <Grid container spacing={2} justifyContent='space-evenly'>
                <Grid item xs={10} sm={10} md={4}>
                    <div>
                        <p className='text-white' style={{ fontSize: "2rem",  fontWeight: "bold", fontFamily: "system-ui", margin: "20px 0" }}>DEVCRAFT</p>
                        <p className='text-white' style={{...theme.typography.p}}>From beautiful web design to tailored website development, trust me to bring your digital vision to life. Our web development solutions are customized to fit your unique needs.</p>
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={2}>
                    <h2 className='text-white' style={{  ...theme.typography.p,marginBottom:"10px" }}>Quick Links</h2>
                    {desktopMenuItems.map((menuItem) => (
                        <Grid item key={menuItem.name}>
                            <Link className='text-white' href={menuItem.link} style={{ textDecoration: "none", ...theme.typography.p,}}>
                                {menuItem.name}
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={10} sm={10} md={3}>
                <h2 className='text-white' style={{  ...theme.typography.p,marginBottom:"10px" }}>Contact Us</h2>
                <Grid container alignItems="center" rowSpacing={2}>
                   <Grid item xs={12} wrap='nowrap' container alignItems="center" style={MarginBottom}><LocationOnIcon style={Margin8} />Mittal Enclave, Naigaon (E) - 401208, Mumbai, Maharashtra, India</Grid>
                   <Grid item xs={12} container alignItems="center" style={MarginBottom}><MailIcon style={Margin8} /> info@devcraft.site</Grid>
                   <Grid item xs={12} container alignItems="center" style={MarginBottom}><LocalPhoneIcon style={Margin8} /> 7721804979</Grid>
                </Grid>
                    <div>
                        {/* <a href="https://twitter.com/NeuralCMS_ai" aria-label="DevCraft Twitter"><img alt='social-media' style={{ ...IconStyle }} src='/images/twitter.png' aria-label="DevCraft Twitter" /></a> */}
                        <a href='https://www.linkedin.com/in/kavita-r-722941205/' target='_blank' aria-label="DevCraft LinkedIn"><img alt='social-media' style={{ ...IconStyle }} aria-label="DevCraft LinkedIn" src='/images/linkedin.png' /></a>

                    </div>
                </Grid>
            </Grid>
            <div className='text-white' style={{border:"1px solid gray",marginTop:"60px"}}></div>
            <p style={{ ...theme.typography.p,padding:"0 20px"  }} className='text-white' align='center' >© Copyright 2023. All Rights Reserved. Design and Developed By DevCraft</p>
        </footer>
    );
};

export default Footer;
const IconStyle = { padding: "0 10px 0px 10px", width: "55px" }