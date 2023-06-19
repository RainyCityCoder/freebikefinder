import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './Shops.css';
import ShopCard from './ShopCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default function Shops({ asset }) {
  const [shops, setShops] = useState([]);

  const { state } = useParams();

    const endpoint = state
    ? `https://freebikefinder.onrender.com/${asset}?state=${state}`
    : `https://freebikefinder.onrender.com/${asset}`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        data.sort(((a, b) => {
          if(a.state < b.state) {return -1; }
          if(a.state > b.state) {return 1; }
          return 0;
        }));
        setShops(data);
      });
  }, [endpoint]);

  return (
    <Container className='container px-4'>
      <Row className='row gx-1 justify-content-evenly'>
        {shops.map((shop, index) => {
          return (
            <ShopCard
              key={shop._id}
              shopId={shop._id}
              shopName={shop.name}
              shopAddress={shop.address}
              shopState={shop.state}
              shopPhone={shop.phone}
              asset={asset}
            />
          );
        })}
      </Row>
    </Container>
  );
}

Shops.propTypes = {
  asset: PropTypes.string.isRequired,
};
