'use client';
import { useMenuListContext } from './MenuListContext';
const DeleteButton = () => {
  const { deleteMenu } = useMenuListContext();
  return <button onClick={() => deleteMenu(0)}>Usuń</button>;
};

export default DeleteButton;
