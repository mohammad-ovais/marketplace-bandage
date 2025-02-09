export interface Product{
    _id: string;
    title: string;
    _type:"product";
    price: number;
    description: string;
    dicountPercentage: number;
    imageUrl: string;
    productImage: {assest: {_ref:string}
   };
    tags?: string[];
    slug:{
        _type:"slug"
        current:string
    }
}
interface CategoryFilterProps {
    products: Product[];
    setFilteredProducts: (products: Product[]) => void;
  }