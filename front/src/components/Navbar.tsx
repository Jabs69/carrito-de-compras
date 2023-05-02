import {NavLink} from 'react-router-dom';
import useShoppingCart from '../context/ShoppingCartContext';

const Navbar = () => {

	const {openCart,closeCart,cartQuantity} =  useShoppingCart();

	return (

		<nav className="navbar">
			
			<section className="navbar-section">
				
				<NavLink to="/">Home</NavLink>
				<NavLink to="Store">Store</NavLink>
				<NavLink to="About">About</NavLink>

			</section>

			<div className="shopcart-container" onClick={openCart}>
				
				<i className="bi-cart3"></i>

				{cartQuantity > 0 && 

					<div className="notification-quantity">{cartQuantity}</div>

				} 

			</div>

		</nav>

	)

}

export default Navbar;