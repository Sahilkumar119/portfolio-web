import React from "react";

const Contact = () => {
  const contactItems = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "sahiljangra9886@gmail.com",
      href: "mailto:sahiljangra9886@gmail.com",
      clickable: true,
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/sahilkumar119",
      href: "https://linkedin.com/in/sahilkumar119",
      clickable: true,
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/Sahiljangra115",
      href: "https://github.com/Sahiljangra115",
      clickable: true,
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Mahendergarh, Haryana, India",
      href: null,
      clickable: false,
    },
    {
      icon: "fab fa-discord",
      title: "Discord",
      value: "sahiljangid34",
      href: "https://discord.com/users/sahiljangid34",
      clickable: true,
    },
    {
      icon: "fab fa-twitter",
      title: "X",
      value: "x.com/arch_user_btw",
      href: "https://x.com/arch_user_btw",
      clickable: true,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">
          I am eager to connect with teams and individuals who share a vision
          for improving lives through accessible and thoughtful design. Let's
          collaborate to create something exceptional.
        </p>

        <div className="contact-content">
          {contactItems.map((item, index) => {
            const ContactElement = item.clickable ? "a" : "div";
            const props = item.clickable
              ? {
                  href: item.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "contact-item clickable",
                }
              : { className: "contact-item" };

            return (
              <ContactElement key={index} {...props}>
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="contact-details">
                  <h3>{item.title}</h3>
                  {item.clickable ? (
                    <span>{item.value}</span>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </ContactElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
