import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';

const Store = () => {

	const quantity = 0;

	return (

		<>

			<h2>Store</h2>

			<section className="grid-items">
				
				{storeItems.map((item,i) => <StoreItem {...item} key={i}/>)}

			</section>

		</>

	)

}

export default Store