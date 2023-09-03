import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }) {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
