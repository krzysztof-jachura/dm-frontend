import { NAVBAR_ITEMS, NavbarItem } from '@constants/navbar-items';
import TeamPermissions from '@customTypes/team-permissions';

// Return a record of just the categories that contain items that the user has permissions for
const roleFilterNavbarItems = (userRole: string): Record<string, NavbarItem[]> => {
  return Object.entries(NAVBAR_ITEMS).reduce<Record<string, NavbarItem[]>>(
    (acc, [category, items]) => {
      const filteredItems = items.filter(item => {
        return userRole === TeamPermissions.MANAGER || item.permissions === userRole;
      });

      if (filteredItems.length > 0) {
        acc[category] = filteredItems;
      }

      return acc;
    },
    {},
  );
};

export default roleFilterNavbarItems;
