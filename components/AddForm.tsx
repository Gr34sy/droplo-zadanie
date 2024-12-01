import Box from './Box';
import magnyfingGlass from '../assets/magnyfingGlass.png';
import Image from 'next/image';

type FormProps = {
  isMenuForm?: boolean;
};
const AddForm = ({ isMenuForm }: FormProps) => {
  return (
    <Box additionClass="bg-[--white-1]">
      <form className="grid gap-4">
        <label className="grid gap-2">
          <p className="font-bold">{isMenuForm ? 'Menu' : 'Nazwa'}</p>
          <input
            type="text"
            name={isMenuForm ? 'menu' : 'name'}
            placeholder={isMenuForm ? 'np. Menu Główne' : 'np. Promocje'}
            required
            className="border-solid border-2 border-[--gray-1] rounded-md p-2 active:outline-0 focus:outline-0"
          />
        </label>

        <label className="grid gap-2">
          <p className="font-bold">Link</p>
          <div className="grid grid-cols-[auto_1fr] gap-1 items-center border-2 border-solid rounded-md border-[--gray-1]">
            <div className="pl-2">
              <Image src={magnyfingGlass} alt="icon of magnyfing glass" />
            </div>
            <input
              type="text"
              name="link"
              placeholder="Wklej"
              required
              className="p-2 active:outline-0 focus:outline-0"
            />
          </div>
        </label>
      </form>
    </Box>
  );
};

export default AddForm;
