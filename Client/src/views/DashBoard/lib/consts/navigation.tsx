import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'properties',
		label: 'Properties',
		path: '/dashboard/properties',
		icon: <HiOutlineCube />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/dashboard/users',
		icon: <HiOutlineUsers />
	},
	{
		key: 'rent',
		label: 'Rent',
		path: '/dashboard/rent',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'admin',
		label: 'Admin',
		path: '/dashboard/admin',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]