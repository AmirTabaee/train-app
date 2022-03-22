import React, { useState } from "react";
import { products, categories } from "../../GlobalData/GlobalData";
import ProductInfo from "./ProductInfo";
import ProductList from "./ProductList";
import { v4 as uuidv4 } from "uuid";

const ProductContainer = () => {
   const [items, setItems] = useState(products);
   const [item, setItem] = useState({});

   console.log("simple Item => ", item);

   const handleRemoveProduct = (id) => {
      const temp = [...items];
      const filteredItems = temp.filter((i) => i.id !== id);
      setItems(filteredItems);
   };

   const handleAddNewItem = (product) => {
      if (product.id != "") {
         const temp = [...items];
         const index = temp.findIndex((i) => i.id == product.id);
         temp.forEach((item) => (item.editMode = false));
         let prod = temp[index];
         prod = { ...product };
         temp[index] = prod;
         setItems(temp);
      } else {
         const category = categories.find((c) => c.id == product.categoryId);
         const id = uuidv4();
         product = { ...product, id, categoryName: category.title };
         const temp = [...items];
         setItems([...temp, product]);
      }
   };

   const handleUpdateProduct = (id) => {
      const temp = [...items];
      const index = temp.findIndex((i) => i.id == id);
      temp.forEach((item) => (item.editMode = false));
      const product = temp[index];
      setItem(product);
      product.editMode = true;
      temp[index] = product;
      setItems(temp);
   };

   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <ProductInfo categories={categories} addProduct={handleAddNewItem} simpleItem={item} />
               </div>
               <div className="col-md-9">
                  <ProductList data={items} remove={handleRemoveProduct} editMode={handleUpdateProduct} />
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductContainer;
