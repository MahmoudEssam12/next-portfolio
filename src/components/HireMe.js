import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailkey from "./emailkey";
import { send } from "emailjs-com";
import styles from "./scss/HireMe.module.scss";
import SnackBar from "./SnackBar";

function HireMe(props) {
  const [test, setTest] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  });
  // eslint-disable-next-line no-useless-escape
  let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let regex = new RegExp(emailRegex)

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })

  }
  // onsubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (regex.test(formValues.email) === false) alert("please enter a valid email");
    if (formValues.name.length <= 2) alert("your name can't be 2 characters or less");
    if (formValues.message.length <= 10) return alert("your message can't be less than 10 characters");

    send(
      emailkey.SERVICE_ID,
      emailkey.TEMPLATE_ID,
      formValues,
      emailkey.USER_ID
    )
      .then(res => {
        console.log(res.status, res.text)
        setFormValues({
          name: "",
          email: "",
          message: ""
        });
        setTest(true)
        setTimeout(() => {
          setTest(false)
        }, 3000)
      })
      .catch(err => {
        console.log(err)
      })

  }
  return (
    <section className={`section ${styles.hire_me}`} id="contact">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className={styles.about_info} data-scroll>
              <h2>Hire me.</h2>
              <p>
                I am available for freelance work or full time job. Connect with
                me via phone: <a href="tel:+2001149835766">01149835766</a> or email: <a href="mailto:dev.mahmoud.essam@gmail.com">dev.mahmoud.essam@gmail.com</a>
              </p>
            </div>
            <form style={{ padding: "2rem 0 0" }} onSubmit={handleSubmit}>
              <input type="text" name="name" value={formValues.name} onChange={handleChange} placeholder="Your Name" required />
              <input
                value={formValues.email} onChange={handleChange}
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                value={formValues.message} onChange={handleChange}
                name="message"
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className={styles.img_wrapper} data-scroll>
              <picture>
                <img src="/images/avatar2.webp" alt="Mahmoud Essam" loading="lazy" />
              </picture>
            </div>
          </Col>
        </Row>
        <SnackBar test={test} message={"sent successfuly"} />
      </Container>
    </section>
  );
}

export default HireMe;
