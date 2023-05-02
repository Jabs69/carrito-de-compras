import useShoppingCart from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import {formatCurrency} from '../helpers/formatCurrency';
import storeItems from '../data/items.json';

type ShoppingCartProps = {

	isOpen:boolean

}

const ShoppingCart = ({isOpen}:ShoppingCartProps) => {

	const {closeCart,cartItems} = useShoppingCart();	

	return (

		<div className="panel">

			<aside className="menu-container">
				
				<div className="menu-header">
					
					<span>Cart</span>

					<i className="bi-x" onClick={() => closeCart()}></i>

				</div>

				<ul className="aside-menu">
					
					{cartItems.map(item => <CartItem key={item.id} {...item}/>)}

				</ul>

				<div className="shopping-cart-total">

					Total{''}
					{formatCurrency(cartItems.reduce((total,cartItem) => {

						const item = storeItems.find(i => i.id === cartItem.id)

						return total + (item?.price || 0) * cartItem.quantity

					},0))}

			</div>

			</aside>

		</div>

	)

}

export default ShoppingCart;