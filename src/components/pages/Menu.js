import React from "react";
import { Navbar, Nav, NavItem, Badge } from "react-bootstrap";

class Menu extends React.PureComponent {
	render() {
		return (
			<div className="container nav-bar">
				<Navbar inverse fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">BooksShop</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} href="/about">
								About
							</NavItem>
							<NavItem eventKey={2} href="/contactus">
								Contactus
							</NavItem>
						</Nav>
						<Nav pullRight>
							<NavItem eventKey={1} href="#">
								Admin
							</NavItem>
							<NavItem eventKey={2} href="#">
								Cart <Badge>1</Badge>
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Menu;
