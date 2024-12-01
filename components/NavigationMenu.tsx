'use client';
import Box from './Box';
import { useMenuListContext } from './MenuListContext';
import { redirect } from 'next/navigation';
import Button from './Button';
const NavigationMenu = () => {
  const { menuList } = useMenuListContext();

  console.log(menuList);
  return (
    <>
      {menuList.length < 1 ? (
        <Box additionClass="bg-[--gray-3] flex flex-col items-center">
          <h2 className="pb-3 font-extrabold text-lg">Menu jest puste</h2>
          <p className="pb-6">W tym menu nie ma jeszcze żadnych linków</p>
          <Button text="Dodaj pozycję menu" onClick={() => redirect('/add')} />
        </Box>
      ) : (
        <Box additionClass="bg-[--white-1]">
          {menuList.map((item, i) => (
            <p className="p-4" key={i}>
              {item.label} {item.url}
            </p>
          ))}
        </Box>
      )}
    </>
  );
};

export default NavigationMenu;
