import React from 'react';

const myStyle = { color: "blue" };

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className='main-card--cointainer'>
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id} >
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    <span className="card-author subtle" style={myStyle}></span>
                    <h2 className="card-title"> {curElem.name} </h2>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Price : {curElem.price}</div>

                  </div>
                  <img src={curElem.image} alt='images' />
                  <span className=" card-tag subtle">Order Now </span>
                </div>
              </div >
            </>
          );
        })}
      </section>
    </>
  );
};
export default MenuCard;
