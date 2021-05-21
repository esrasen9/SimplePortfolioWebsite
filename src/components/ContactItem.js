import React from 'react';

const ContactItem = ({icon,title,text1,text2}) => {
      return (
          <div className="ContactItem">
              <div className="contact">
                  <img className="contact-icon" src={icon} alt=""/>
                  <div className="right-items">
                      <h4>{title}</h4>
                      <p className="text1">{text1}</p>
                      <p className="text2">{text2}</p>
                  </div>
              </div>
          </div>
      );
}

export default ContactItem;