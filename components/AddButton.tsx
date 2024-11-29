'use client';
import { useMenuListContext } from "./MenuListContext";
const AddButton = () => {

    const { addMenu } = useMenuListContext();

  return (
    <button onClick={() => addMenu({ label: 'Test', url: 'test' })}>
      Dodaj
    </button>
  );
};

export default AddButton;
