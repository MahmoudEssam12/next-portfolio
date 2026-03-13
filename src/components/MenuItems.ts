export interface MenuItem {
  title: string;
  url: string;
  cName?: string;
}

export const MenuItems: MenuItem[] = [
  {
    title: "Home",
    url: "home",
    cName: "active",
  },
  {
    title: "About",
    url: "about",
  },
  {
    title: "Services",
    url: "services",
  },
  {
    title: "Projects",
    url: "projects",
  },
  {
    title: "Contact",
    url: "contact",
  },
];
