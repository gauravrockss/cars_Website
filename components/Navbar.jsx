import { Box, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    px: 6,
                    mb: { lg: 0, xs: 6 },
                }}
            >
                <Image
                    src='/logo.svg'
                    width={118}
                    height={18}
                    objectFit='contain'
                />
                <Button>Sign in</Button>
            </Box>
        </>
    );
};

export default Navbar;
