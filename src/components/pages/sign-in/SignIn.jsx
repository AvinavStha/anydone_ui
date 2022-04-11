import React from "react";

const SignIn = () => {
  return (
    <>
      <section className="signIn">
        <div className="signIn-form">
          <form action="">
            <label htmlFor="">Email</label>
            <input type="text" className="email" />
            <label htmlFor="">Password</label>
            <input type="password" className="password" />
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
