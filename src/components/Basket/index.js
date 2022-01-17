import React from 'react';
import '../../index.css';
import './index.css';

const Basket = () => {
  const basket = JSON.parse(localStorage.getItem('basket'));

  function sum() {
    return basket.offer1 * 4.79 + basket.offer2 * 11.79 + basket.offer3 * 40.79;
  }

  return (
    <>
      <main id="basket">
        <div>
          <h2>Basket</h2>
          <section>
            <div>
              <h4>Starter:</h4>
              <p>{basket.offer1}x $4,79</p>
            </div>
            <div>
              <h4>Amateur:</h4>
              <p>{basket.offer2}x $11,79</p>
            </div>
            <div>
              <h4>Proffesional:</h4>
              <p>{basket.offer3}x $40,79</p>
            </div>
          </section>
          <div>
            <h3>Together:</h3>
            <p>${sum()}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Basket;