import AddButton from '@/components/AddButton';
import DeleteButton from '@/components/DeleteButton';
import NavigationMenu from '@/components/NavigationMenu';

export default async function Home() {
  return (
    <main>
      <NavigationMenu />
      <AddButton />
      <DeleteButton />
    </main>
  );
}
