import React, { useContext } from "react";
import "./Contact.scss"
import SubHeader from "../SubHeader/SubHeader";
import { RiContactsFill } from "react-icons/ri";
import { useForm, ValidationError } from "@formspree/react";
import { Animate } from "react-simple-animate";
import { GlobalVarContext } from "../Context/GlobalVar";

const Contact = () => {
  let { isToggle } = useContext(GlobalVarContext);
  const [state, handleSubmit] = useForm("xbjbvnbj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <section className={`contact ${isToggle? "active" : ""}`} id="contact">
        <SubHeader
          HeaderPage={"Contact Me"}
          iconPage={<RiContactsFill size={40} />}
        />
        <div className="contact__content">
        <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{
                transform: "translateY(500px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your Name</label>
            <input id="name" type="text" name="name" />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              />
            <label htmlFor="email">Enter Your Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              />
            <label htmlFor="email">FeedBack</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
              </Animate>
          
        </div>
      </section>
    </>
  );
};

export default Contact;
