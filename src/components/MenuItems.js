import React from 'react';

const MenuItems = ({menuItems}) => {
      return (
          <div className="portfolios">
              {
                  menuItems.map((item)=> {
                      return (
                          <div className="portfolio" key={item.id}>
                              <div className="portfolio-data">
                                  <img className="image-portfolio" src={item.image} alt=""/>
                                  <ul className="hover-items">
                                      <li>
                                          <a href={item.link1}>{item.icon1}</a>
                                          <a href={item.link1}>{item.icon2}</a>
                                      </li>
                                  </ul>
                              </div>
                              <h5>{item.title}</h5>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              </p>
                          </div>
                      )
                  })
              }
          </div>
      );

}

export default MenuItems;