// src/data/navigation.ts
export interface NavItem {
  name: string;
  href: string;
}

export const diensten: NavItem[] = [
  { name: 'Domeinnamen', href: '/domeinnamen' },
  { name: 'Hosting', href: '/webhosting' },
  { name: 'Pro', href: '/webhosting-pro' },
  { name: 'VPS', href: '/vps' },
];

export const rechts: NavItem[] = [
  { name: 'Over ons', href: '/over-ons' },
];