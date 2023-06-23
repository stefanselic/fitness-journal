import AppNavigation from '../_components/Navigation/AppNavigation';

export default function AppLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <div style={{ height: '80px' }}>
        <AppNavigation />
      </div>
    </>
  );
}
