import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    Fullname: "",
    emi: "",
    pho: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData(() => {
      return { ...data, [name]: value };
    });
  };
  const Forsubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.Fullname}. my phone number is ${data.pho}. my email id is ${data.emi}.my massege is ${data.msg}`
    );
    setData({
      Fullname: "",
      emi: "",
      pho: "",
      msg: "",
    });
  };
  return (
    <>
      <div className="container_co">
        <div className="page_main">
          <form onSubmit={Forsubmit}>
            <h1 className="cp">Contact us</h1>
            <div className="co_in">
              <input
                type="text"
                name="Fullname"
                value={data.Fullname}
                onChange={inputEvent}
                className="pj"
                placeholder="FullName...."
              ></input>
              <input
                type="email"
                name="emi"
                value={data.emi}
                onChange={inputEvent}
                className="pj"
                placeholder="Email....."
              ></input>
              <input
                type="phone"
                name="pho"
                value={data.pho}
                onChange={inputEvent}
                className="pj"
                placeholder="Phone Number....."
              ></input>
              <textarea
                type="text"
                name="msg"
                value={data.msg}
                onChange={inputEvent}
                className="pj"
                placeholder="Messages....."
              ></textarea>
              <button className="cobtn">submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="fl2">
        Copyright © 2022<pre> </pre> Terms Of Services | Privacy Policy | Refund
        Policy
      </footer>
    </>
  );
};
export default Contact;
