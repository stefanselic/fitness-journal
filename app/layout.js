import { Inter } from 'next/font/google';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FitTRACK',
  description: 'Fitness journal for tracking your exercises',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>{children}</body>
    </html>
  );
}
