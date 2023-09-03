import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useCallback } from 'react';
import { calculateCarRent } from '@/Services/Data';
import Image from 'next/image';
import { Box, Modal } from '@mui/material';
import styles from '@/styles/Home.module.css';
import CarDetailsCard from './CarDetailsCard';

const CarCard = ({ car }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { city_mpg, year, make, model, transmission, drive } = car;
    const carRent = calculateCarRent(city_mpg, year);

    const generateCarImage = (angle) => {
        const url = new URL('https://cdn.imagin.studio/getimage');

        url.searchParams.append('customer', 'hrjavascript-mastery');
        url.searchParams.append('make', make);
        url.searchParams.append('modelFamily', model.split(' ')[0]);
        url.searchParams.append('zoomType', 'fullscreen');
        url.searchParams.append('modelYear', `${year}`);
        url.searchParams.append('angle', `${angle}`);

        return `${url}`;
    };

    return (
        <>
            <Card
                sx={{
                    // minWidth: 275,
                    height: 480,
                    background: '#F5F8FF',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                }}
                className={styles.carCard}
            >
                <CardContent sx={{ height: '400px' }}>
                    <Typography
                        variant='h5'
                        sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
                    >
                        {make} {model}
                    </Typography>
                    <Typography variant='h5' my={3}>
                        <sup style={{ fontWeight: 'bold' }}>$</sup>
                        <span style={{ fontWeight: 'bold', fontSize: '30px' }}>
                            {carRent}
                        </span>
                        <span style={{ fontSize: '17px' }}>/day</span>
                    </Typography>
                    {Image ? (
                        <Image
                            src={generateCarImage()}
                            alt='hero'
                            width={0}
                            height={0}
                            layout='responsive'
                        />
                    ) : (
                        <Typography>Loading......</Typography>
                    )}
                </CardContent>
                <CardActions>
                    <Box className={styles.carCardFooter}>
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            gap={1}
                        >
                            <Image
                                src='/steering-wheel.svg'
                                alt='wheel'
                                width={20}
                                height={20}
                            />
                            <Typography>
                                {transmission === 'a' ? 'Autmation' : 'Manual'}
                            </Typography>
                        </Box>
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            gap={1}
                        >
                            <Image
                                src='/tire.svg'
                                alt='tire'
                                width={20}
                                height={20}
                            />
                            <Typography>{drive.toUpperCase()}</Typography>
                        </Box>
                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            gap={1}
                        >
                            <Image
                                src='/gas.svg'
                                alt='gas'
                                width={20}
                                height={20}
                            />
                            <Typography>{city_mpg} MPG</Typography>
                        </Box>
                    </Box>
                    <Box className={styles.cardFooterButton} display='none'>
                        <Button
                            variant='contained'
                            onClick={handleOpen}
                            sx={{
                                width: '100%',
                                borderRadius: '30px',
                                textTransform: 'capitalize',
                                background: '#2B59FF',
                                fontSize: '18px',
                            }}
                        >
                            View More
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <CarDetailsCard car={car} generateCarImage={generateCarImage} />
            </Modal>
        </>
    );
};

export default CarCard;
