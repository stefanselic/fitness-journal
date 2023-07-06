import { Lato } from 'next/font/google';
import styles from './layout.module.scss';

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'FitTRACK',
  description: 'Fitness journal for tracking your exercises',
};

type RootLayoutProps = {
  children: any;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${lato.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
