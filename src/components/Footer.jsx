import * as React from 'react';
import "./Footer.css"
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import { Box, Container, Typography, IconButton, Grid2 } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, NavLink } from 'react-router-dom';
// import TikTokIcon from '@mui/icons-material/TikTok'; 

const Footer = () => {
    return (
        <>
            <footer>
                <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '40px 0' }}>
                    <Container maxWidth="lg">
                        <Grid2 container spacing={4}>
                            <Grid2 item xs={12} md={3}>
                                <Typography variant="h6">About Us</Typography>
                                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                                    We offer the best tuk tuk services in Cambodia, ensuring a comfortable and memorable experience for all our customers.
                                </Typography>
                            </Grid2>
                            <Grid2 item xs={12} md={3}>
                                <Typography variant="h6">Quick Links</Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <NavLink to='/home' color="inherit" sx={{ display: 'block', margin: '0px 10px' }}>Home</NavLink>
                                    <NavLink to='/about' color="inherit" sx={{ display: 'block', margin: '0px 10px' }}>About</NavLink>
                                    <NavLink to='/services' color="inherit" sx={{ display: 'block', margin: '0px 10px' }}>Services</NavLink>
                                    <NavLink to='/contact' color="inherit" sx={{ display: 'block', margin: '0px 10px' }}>Contact</NavLink>
                                </Box>
                            </Grid2>
                            <Grid2 item xs={12} md={3}>
                                <Typography variant="h6">Contact Us</Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <Typography variant="body2">123 Tuk Tuk Street, Phnom Penh, Cambodia</Typography>
                                    <Typography variant="body2">Email: mrpheak11@gmail.com</Typography>
                                    <Typography variant="body2">Phone: +85598812335</Typography>
                                </Box>
                            </Grid2>
                            <Grid2 item xs={12} md={3}>
                                <Typography variant="h6">Follow Us</Typography>
                                <Box sx={{ marginTop: '10px' }}>
                                    <IconButton href="https://www.instagram.com/tour_by_pheak/" target="_blank" sx={{ color: '#fff' }}>
                                        <InstagramIcon />
                                    </IconButton>
                                    <IconButton href="https://www.facebook.com/profile.php?id=100012613748550&mibextid=LQQJ4d" target="_blank" sx={{ color: '#fff' }}>
                                        <FacebookIcon />
                                    </IconButton>
                                    <IconButton href="mailto:mrpheak11@gmail.com" sx={{ color: '#fff' }}>
                                        <EmailIcon />
                                    </IconButton>
                                    <IconButton href="tel:+85598812335" sx={{ color: '#fff' }}>
                                        <PhoneIcon />
                                    </IconButton>
                                </Box>
                            </Grid2>
                        </Grid2>
                        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
                            <Typography variant="body2">
                                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </footer>
        </>
    )
}
export default Footer;