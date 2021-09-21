import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar =  () => {
	const Navbar = {color:"white"};
return (
	<Nav>
		<Bars style={Navbar} />

		<NavMenu>
		<NavLink style={Navbar} to='/home' >
			Home
		</NavLink>
		<NavLink style={Navbar} to='/services' >
			Services
		</NavLink>
		<NavLink style={Navbar} to='/howItWorks' >
        How it Works
		</NavLink>
		
		</NavMenu>
	</Nav>
);
};

export default Navbar;
