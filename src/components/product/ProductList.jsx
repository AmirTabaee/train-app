import React from "react";

const ProductList = ({ data, remove, editMode }) => {
   return (
      <div>
         <table className="table table-striped table-bordered">
            <thead>
               <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>category</th>
                  <th>price</th>
                  <th>manager</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item) => (
                  <tr key={item.id} className={`${item.editMode ? "bg-warning" : ""}`}>
                     <td>{item.id}</td>
                     <td>{item.title}</td>
                     <td>{item.categoryName}</td>
                     <td>{item.price}</td>
                     <td>
                        <button className="btn btn-secondary btn-sm mr-2" onClick={() => editMode(item.id)}>
                           Update
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => remove(item.id)}>
                           Remove
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ProductList;
