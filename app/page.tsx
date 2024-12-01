import NavigationMenu from '@/components/NavigationMenu';

export default async function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold pb-2">Lista Nawigacji</h1>
      <NavigationMenu />
    </main>
  );
}
