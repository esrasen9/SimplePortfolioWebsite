import React from 'react';
const Categories = ({filterCategory,categories}) => {
      return (
          <div className="category-buttons">
              {
                  categories.map((category,index) => {
                      return (<button
                          className="btn-category"
                          key={index}
                          onClick={()=>filterCategory(category)}
                      > {category}</button>);
                  })
              }
          </div>
      );
}

export default Categories;