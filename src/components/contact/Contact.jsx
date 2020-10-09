import React from "react";
import { StyledContact } from "../styled/stylings";
const Contact = () => {
  return (
    <>
      <StyledContact>
        <section className="container">
          <div className="contact">
            <form action="" className="contact-form">
            <h2>Contact Me</h2>
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Subject</label>
              <input type="text" />
              <label htmlFor="">Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <input type="submit" value="Send" className="btn-contact" />
            </form>
          </div>
        </section>
      </StyledContact>
    </>
  );
};

export default Contact;
