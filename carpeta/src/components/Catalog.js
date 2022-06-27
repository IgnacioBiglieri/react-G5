import React from 'react'

function Catalog({ products = [] }) {
  return (
    <div className=" contenedor-catalog">
      {Array.isArray(products.data) &&
        products.data.map((product, index) => (
          <div className="card-catalog">
            <h5 className="card-title">{product.name}</h5>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <p className="card-text">
                <strong>Price</strong> $ {product.price}
              </p>
              {/* <p className="card-text">
                <strong>Brand</strong> {product.brand}
              </p> */}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Catalog
