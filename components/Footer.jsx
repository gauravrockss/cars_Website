import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Home.module.css';

const Footer = () => {
    return (
        <>
            <Box px={8} my={4}>
                <Container maxWidth='xl'>
                    <Grid
                        container
                        spacing={6}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Image
                                src='/logo.svg'
                                alt='logo'
                                width={118}
                                height={18}
                                objectFit='contain'
                            />
                            <Typography
                                sx={{ color: 'grey', fontSize: '19px', mt: 4 }}
                            >
                                Carhub 2023
                            </Typography>
                            <Typography
                                sx={{ color: 'grey', fontSize: '19px' }}
                            >
                                All Right Reserved @
                            </Typography>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Typography
                                sx={{ fontWeight: 'bold', fontSize: '23px' }}
                                variant='h6'
                            >
                                About
                            </Typography>
                            <Typography className={styles.footer_link}>
                                How it Works
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Featured
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Partnership
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Business Relation
                            </Typography>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Typography
                                sx={{ fontWeight: 'bold', fontSize: '23px' }}
                                variant='h6'
                            >
                                Company
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Events
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Blog
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Podcast
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Invite a friend
                            </Typography>
                        </Grid>
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Typography
                                sx={{ fontWeight: 'bold', fontSize: '23px' }}
                                variant='h6'
                            >
                                Socials
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Discard
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Instagram
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Twitter
                            </Typography>
                            <Typography className={styles.footer_link}>
                                Facebook
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container mt={8} spacing={4}>
                        <Grid item md={8} xs={12}>
                            <Typography className={styles.footer_link}>
                                @2023 carhubs. All Right Reserved
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box
                                sx={{ display: { md: 'flex', xs: 'block' } }}
                                justifyContent='space-around'
                            >
                                <Typography className={styles.footer_link}>
                                    Privacy Policy
                                </Typography>
                                <Typography className={styles.footer_link}>
                                    Terms of Uses
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
