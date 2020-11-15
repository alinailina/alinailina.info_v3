import React from "react";

const Form = () => {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label>
          Name
          <input type="text" name="name" />
          <p>Please, introduce yourself</p>
        </label>
        <label>
          Email
          <input type="email" name="email" required />
          <p>Don't worry, I won't spam you :)</p>
        </label>
      </div>
      <label>
        Message
        <textarea name="message"></textarea>
        <p>Shoot!</p>
      </label>
      <div data-netlify-recapture="true"></div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
