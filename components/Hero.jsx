import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CommonButton from './CommonButton';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const Hero = () => {
    return (
        <>
            <Box>
                <Container maxWidth='xl'>
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            minHeight: '100vh',
                            px: 4,
                        }}
                    >
                        <Grid item lg={6}>
                            <Typography
                                variant='h2'
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: 'clamp(2rem, 10vw, 4rem)',
                                }}
                            >
                                Find, Book, rent a car-quick and supar easy!
                            </Typography>
                            <Typography
                                // variant='h6'
                                my={4}
                                sx={{ fontSize: '30px' }}
                            >
                                Streming your car rental experience with our
                                efforties booking process.
                            </Typography>
                            <Button
                                variant='contained'
                                sx={{
                                    borderRadius: '30px',
                                    textTransform: 'capitalize',
                                    background: '#2B59FF',
                                    fontSize: '18px',
                                    padding: '10px 40px',
                                }}
                            >
                                Explore Cars
                            </Button>
                        </Grid>
                        <Grid item lg={6}>
                            <Image
                                src='/hero.png'
                                alt='hero'
                                width={0}
                                height={0}
                                sizes='100vw'
                                layout='responsive'
                                className={styles.image_hero}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Hero;
