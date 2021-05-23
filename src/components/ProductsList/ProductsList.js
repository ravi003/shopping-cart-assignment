import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../Card';
import { selectCartProductIds, allProductsData } from '../../selector';
import { createAddToCartRequest } from '../../actions';
import './ProductsList.scss';

const ProductList = React.memo(({ filterId }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const { loading, data, error } = useSelector((state) => allProductsData(state));

  const cartProduct = useSelector((state) => selectCartProductIds(state));

  const addCart = useCallback(
    (product) => {
      dispatch(createAddToCartRequest({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const productFilter = useCallback(() => {
    if (filterId) {
      const filterProducts = data.filter((product) => product.category === filterId.toString());
      setProducts(filterProducts);
    } else {
      setProducts(data);
    }
  }, [data, filterId]);

  useEffect(() => {
    productFilter();
  }, [productFilter]);

  const productList = products.map((product) => {
    const { id } = product;
    const disabled = !!cartProduct.includes(id);
    return (
      <div key={id} className='col-sm-12 col-md-6 col-lg-3 col-xs-3'>
        <Card product={{ ...product, disabled }} addCart={addCart} />
      </div>
    );
  });

  return (
    <div className='product-list-wrap'>
      {loading && <h1>Loading....</h1>}
      {!loading && !error && <div className='clearfix row'>{productList}</div>}
      {error && <h1>Something went wrong!</h1>}
    </div>
  );
});

ProductList.propTypes = {
  filterId: PropTypes.string
};

ProductList.defaultProps = {
  filterId: null
};

export default ProductList;