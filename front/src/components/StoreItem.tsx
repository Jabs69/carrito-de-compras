import {formatCurrency} from '../helpers/formatCurrency.ts';
import useShoppingCart from '../context/ShoppingCartContext';

type StoreItemProps = {

		id: number
		name:string
		price:number
		imgUrl:string

}

const StoreItem = ({id,name,price,imgUrl}:StoreItemProps) => {

	const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart();

	const quantity = getItemQuantity(id);

	return (

		<article className="store-item">
			
			<div className="store-item-img">
				
				<img src={imgUrl}/>	

			</div>

			<section>

				<div className="store-item-info">
					
					<span className="mr-lf-2">{name}</span>

					<span className="mr-rg-2">{formatCurrency(price)}</span>

				</div>

				{quantity === 0 


					? <button className="button-add" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</button> 

					: <>

							<div className="container-buy-sell">
						
								<button className="button mr-rg" onClick={() => decreaseCartQuantity(id)}>-</button>

								<span className="mr-rg">{quantity} in cart</span>

								<button className="button mr-lf" onClick={() => increaseCartQuantity(id)} >+</button>

							</div>

							<div className="container-btn-remove">
							
								<button className="button-remove" onClick={() => removeFromCart(id)}>Remove</button>	

							</div>

						</>

				}

			</section>

		</article>

	)

}

export default StoreItem;