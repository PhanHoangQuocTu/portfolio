import { Inter as FontSans, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const fontMono = localFont({
  style: 'normal',
  variable: '--font-mono',
  src: '../assets/fonts/SPACEEXPLORERRegular.woff2',
});

const fontRoboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export { fontSans, fontMono, fontRoboto };
