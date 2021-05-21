import React from 'react';
import "../CSS/contact.css";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg";
import emailme from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../components/Title";
const ContactPage = () => [
        <Title className="contact-title" title="Contact Me!"/>,
        <div className="ContactPage">
            <div className="contact-details">
                <div className="contact-me">
                    <ContactItem icon={phone} title="Phone" text1={"+257 7779240715"} text2="+0444 7799 8742"/>
                    <ContactItem icon={emailme} title="Email" text1={"katie99@gmail.com"} text2="katie_7@hotmail.com"/>
                    <ContactItem icon={location} title={"Address"} text1={"25 Paramount St,PN4 8H9 London"} text2="United Kingdom"/>
                </div>
            <div className="map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.7003276006258!2d-0.13859404842947076!3d50.83671446723717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1str!2str!4v1621187957569!5m2!1str!2str"
                    width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            </div>
        </div>
];

export default ContactPage;
