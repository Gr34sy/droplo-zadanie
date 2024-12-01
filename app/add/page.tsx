import AddForm from '@/components/AddForm';
import Link from 'next/link';
import NavigationMenu from '@/components/NavigationMenu';
import Button from '@/components/Button';

const AddPage = () => {
  return (
    <main className="grid gap-6">
      <Link href="/" className="font-semibold text-md">
        ← Wróć do listy nawigacji
      </Link>
      <AddForm />
      <NavigationMenu />

      <div className="grid grid-cols-[auto_auto] justify-end gap-2">
        <Button text="Anuluj" style="outline" />
        <Button text="Zapisz" style="outline" disabled />
      </div>
    </main>
  );
};

export default AddPage;
