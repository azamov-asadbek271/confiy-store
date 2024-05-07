import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../uitls';

const url = "/products?featured=true";
 
 export const loader = async () => {
  const response =await customFetch(url)
  const products = response.data.data
  return {products}
}
function Langding() {
  return (
    <div className="con-align pt-12">
      <Hero />
      <FeaturedProducts/>
    </div>
  );
}

export default Langding