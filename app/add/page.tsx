import Link from 'next/link';

const AddPage = () => {
  return (
    <div>
      <Link href="/" className="font-semibold text-md">
        {' '}
        ← Wróć do listy nawigacji{' '}
      </Link>
      <p className="pt-4">Add</p>
    </div>
  );
};

export default AddPage;
