import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' >
			Home
		</NavLink>
		<NavLink to='/services' >
			Services
		</NavLink>
		<NavLink to='/howItWorks' >
        How it Works
		</NavLink>
		
		</NavMenu>
	</Nav>
);
};

export default Navbar;
