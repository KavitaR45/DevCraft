import { useState } from 'react'
import { useTheme } from "@material-ui/styles";
import { Button, Grid, IconButton, List, Drawer } from "@material-ui/core";
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Link from "next/link";
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const SocialIcon = () => {
    return (
      <>
        {/* <a href="https://twitter.com/NeuralCMS_ai" aria-label="DevCraft Twitter"><LazyLoadImage alt='social-media' style={{ ...IconStyle }} src='/images/twitter.png' /></a> */}
        <a href='https://www.linkedin.com/in/kavita-r-722941205/' target='_blank' aria-label="DevCraft LinkedIn"><LazyLoadImage alt='social-media' style={{ ...IconStyle }} src='/images/linkedin.png' /></a>
      </>
    )
  }
  const desktopMenuItems = [
    { name: "Home", link: "/#banner" },
    { name: "About", link: "/#about" },
    { name: "Services", link: "/#services" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  const Margin8 = {margin:"0 10px"}
  const theme = useTheme();
  return (
    <>
      <header >
        <Grid style={{ background: "white", padding: "0 20px" }} wrap='nowrap' container alignItems="center" justifyContent="space-around">
          <Grid item xs={12} sm={4} md={4} lg={6}>
            <LazyLoadComponent>
            <SocialIcon />
            </LazyLoadComponent>
          </Grid>
          <LazyLoadComponent>
          <Grid container wrap="nowrap" alignItems="center" item xs={8} sm={8} className='mob-display-none' md={6} lg={4} >
            <><LocationOnIcon style={Margin8} /><span style={{fontSize:"0.9rem"}}>Naigaon - 401208, Mumbai, Maharashtra</span></>
            <><LocalPhoneIcon style={Margin8} /><span style={{fontSize:"0.9rem"}}>7721804979</span></>
          </Grid>
          </LazyLoadComponent>
        </Grid>
        <Grid style={{ background: "linear-gradient(90.05deg, #091FF7 -5.66%, #644796 115.61%, #DF7C14 115.63%)", padding: "10px 20px", }} container alignItems="center" justifyContent="space-around">
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Link href="/">
            <LazyLoadImage src={"/images/logo.png"} alt='logo' style={{width:"200px"}}/>
            </Link>
            {/* <p style={{ fontSize: "2rem", color: "white", fontWeight: "800", fontFamily: "system-ui" }}>DEVCRAFT</p> */}
          </Grid>
          <Grid container className='mobile-no-header' item xs={8} sm={8} md={8} lg={6} alignItems='center' justifyContent="flex-end">
            {desktopMenuItems.map((menuItem) => (
              <Grid item key={menuItem.name} style={Margin8}>
                <Link href={menuItem.link} style={{ textDecoration: "none", color: "white", fontSize: "1.28rem", padding: "0 8px" }}>
                  {menuItem.name}
                </Link>
              </Grid>
            ))}
            <Button variant="contained" color="primary" href={"#contact"} style={{ ...theme.button.ghost }}>Contact Us</Button>
          </Grid>
          <Grid container wrap='nowrap' item xs={8} className='desktop-display-none' justifyContent={'flex-end'}>
            <IconButton aria-label="CloseMenu" onClick={handleToggleDrawer} style={{ display: { md: 'none' }, color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Drawer anchor="right" open={openDrawer} onClose={handleToggleDrawer}>
          <List style={{ width: "290px", padding: "20px" }}>
            <ClearIcon onClick={handleToggleDrawer} style={{ cursor: "pointer", display: "block", marginLeft: "auto" }} />
            {desktopMenuItems.map((menuItem) => (
              <Grid item key={menuItem.name} style={{ margin: "15px 10px" }}>
                <Link href={menuItem.link} style={{ textDecoration: "none", fontSize: "1.28rem", }}>
                  {menuItem.name}
                </Link>
              </Grid>
            ))}
            <SocialIcon />
            <div style={{ display: "flex", alignItem: "center", margin: "10px 0" }}><LocalPhoneIcon style={Margin8} /> 7721804979</div>
          </List>
        </Drawer>
      </header>
    </>
  );
}
const IconStyle = { padding: "10px", width: "50px" }