import AppNavigation from '../_components/Navigation/AppNavigation';

type AppLayoutProps = {
  children: any;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <main style={{ paddingBottom: '90px' }}>{children}</main>
      <AppNavigation />
    </>
  );
}
