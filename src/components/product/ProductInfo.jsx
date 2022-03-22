import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProductInfo = ({ categories, addProduct, simpleItem }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({ defaultValues: { ...simpleItem } });

   useEffect(() => {
      reset({ ...simpleItem });
   }, [simpleItem]);

   const formSubmit = (data) => {
      console.log(data);
      addProduct(data);
   };
   return (
      <form onSubmit={handleSubmit(formSubmit)}>
         <input type="text" {...register("id")} className="d-none" />
         <div className="form-group">
            <label htmlFor="title" className="form-check-label">
               Product Name:
            </label>
            <input type="text" {...register("title", { required: true })} className="form-control" />
            {errors.title && <span className="text-danger"> should fill</span>}
         </div>
         <div className="form-group">
            <label htmlFor="categoryId" className="form-check-label">
               Category:
            </label>
            <select type="text" {...register("categoryId", { required: true })} className="form-control">
               <option value="" className="form-check">
                  Choose
               </option>
               {categories.map((item) => (
                  <option value={item.id}>{item.title}</option>
               ))}
            </select>
            {errors.categoryName && <span className="text-danger"> should fill</span>}
         </div>
         <div className="form-group">
            <label htmlFor="price" className="form-check-label">
               Price:
            </label>
            <input type="text" {...register("price", { required: true })} className="form-control" />
            {errors.price && <span className="text-danger"> should fill</span>}
         </div>
         <button className="btn btn-primary">Submit</button>
      </form>
   );
};

export default ProductInfo;
