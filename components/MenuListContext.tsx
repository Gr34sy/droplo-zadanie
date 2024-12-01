'use client';

import { createContext, useState, useContext } from 'react';
import { menu } from '@/lib/types/menu';

export type MenuContextType = {
  menuList: menu[];
  addMenu: (menu: menu) => void;
  deleteMenu: (id: number) => void;
};

const MenuListContext = createContext<MenuContextType>({
  menuList: [],
  addMenu: () => {},
  deleteMenu: () => {},
});

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [menuList, setMenuList] = useState<menu[]>([
    // { label: 'Test 1', url: 'http://localhost' },
    // { label: 'Test 2', url: 'http://localhost' },
  ]);

  function addMenu(menu: menu) {
    setMenuList((prevList) => [...prevList, menu]);
  }

  function deleteMenu(id: number) {
    setMenuList((prevList) => prevList.filter((item, i) => id !== i));
  }

  return (
    <MenuListContext.Provider
      value={{
        menuList,
        addMenu,
        deleteMenu,
      }}
    >
      {children}
    </MenuListContext.Provider>
  );
}

export function useMenuListContext() {
  return useContext(MenuListContext);
}
