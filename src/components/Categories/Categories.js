import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCategoriesDataRequest } from '../../actions';
import { allCategoriesData } from '../../selector';
import './Categories.scss';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesDataRequest());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => allCategoriesData(state));

  const categoriesList = data.map((category) => {
    const { id, name, imageUrl, description, key } = category;
    return (
      <li key={id} className='card-wrap'>
        <div className='image-wrap'>
          <img
            loading='lazy'
            src= {imageUrl}
            alt={name}
          />
        </div>
        <div className='text-wrap'>
          <h2>{name}</h2>
          <p>{description}</p>
          <Link
            className='explore-btn'
            to={{
              pathname: '/products',
              state: { id }
            }}
          >
            Explore {key}
          </Link>
        </div>
      </li>
    );
  });

  return (
    <div className='categories-wrap'>
      <>
        <ul className='clearfix'>
          {loading && <h5>Loading....</h5>}
          {!loading && !error && categoriesList}
        </ul>
        {!loading && error && <h1>Something went wrong!</h1>}
      </>
    </div>
  );
};

export default Categories;
