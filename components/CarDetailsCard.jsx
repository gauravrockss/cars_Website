import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    overflow: 'auto',
    maxHeight: '90vh',
    padding: '16px',
    '::-webkit-scrollbar': { display: 'none' },
};
const CarDetailsCard = ({ car, generateCarImage }) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    return (
        <>
            <Box sx={style}>
                <Box sx={{ background: '#2B59FF', borderRadius: '20px' }}>
                    <Image
                        src={generateCarImage()}
                        alt='hero'
                        width={0}
                        height={0}
                        // sizes='100vw'
                        layout='responsive'
                    />
                </Box>
                <Grid container spacing={4} my={1}>
                    <Grid item lg={4}>
                        <Image
                            src={generateCarImage('29')}
                            alt='heroq'
                            width={0}
                            height={0}
                            // sizes='100vw'
                            layout='responsive'
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <Image
                            src={generateCarImage('33')}
                            alt='heroa'
                            width={0}
                            height={0}
                            // sizes='100vw'
                            layout='responsive'
                            objectFit='contain'
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <Image
                            src={generateCarImage('13')}
                            alt='heroq'
                            width={0}
                            height={0}
                            // sizes='100vw'
                            layout='responsive'
                        />
                    </Grid>
                </Grid>
                <Box>
                    <Typography
                        variant='h6'
                        sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
                    >
                        {make} {model}
                    </Typography>
                </Box>
                <Box my={2} display='flex' gap={2} flexDirection='column'>
                    {Object.entries(car).map(([key, value]) => (
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            key={key}
                        >
                            <Typography
                                sx={{
                                    textTransform: 'capitalize',
                                    color: 'grey',
                                }}
                            >
                                {key}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {value}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default CarDetailsCard;
