import storeItems from '../data/items.json';
import useShoppingCart from '../context/ShoppingCartContext';
import {formatCurrency} from '../helpers/formatCurrency';

type CartItemProps = {

	id:number,
	quantity:number

}

const CartItem = ({id,quantity}:CartItemProps) => {

	const {removeFromCart} = useShoppingCart(),

	item = storeItems.find(i => i.id === id)

	if (item == null) return null

	return (

		<article className="cart-item">
			
			<div className="cart-item-img">
				
				<img src={item.imgUrl}></img>

			</div>

			<section className="cart-item-info">
				
				<div>

					{item.name} {quantity > 1 && <span>x{quantity}</span>}

					<div>{formatCurrency(item.price)}</div>

				</div>

				<div>
					
					{formatCurrency(item.price * quantity)}

				</div>

			</section>

			<div className="cart-item-button" onClick={() => removeFromCart(item.id)}>
				
				<button>x</button>

			</div>

		</article>

	)

}

export default CartItem;