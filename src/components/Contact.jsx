import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mzihl7q",
        "template_1tar7m7",
        formRef.current,
        "mQvo2URpQFZMlivd1"
      )
      .then(
        (result) => {
          toast.success("Form has been submitted successfully. 🎉", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            toast.success("Thanks for contacting.👍 ", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 500);
        },
        (error) => {
          toast.error(error.text + " 😥", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(error.text);
        }
      );
    //console.log(data.name, data.email, data.message);

    setData({ name: "", email: "", message: "" });
  };
  return (
    <div name="Contact">
      <div className="Main-container contact-page">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <h2>Contact Me:</h2>
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Village Khokhri</div>
              <div className="text-two">jind (Haryana)</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+91 7056885748</div>
              <div className="text-two"></div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">sahilpillania88@gmail.com</div>
              <div className="text-two">sahilpillania0001@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send me a message</div>
            <p>
              If you have any work from me or any types of opportunity, you can
              send me message from here or you contact with me through mail and
              phone also. It's my pleasure to help you.
            </p>
            <form ref={formRef} onSubmit={onSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  placeholder="Enter your back response email"
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  name="message"
                  value={data.message}
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="button">
                <input type="button" onClick={onSubmit} value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
