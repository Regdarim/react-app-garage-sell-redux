import React from "react";
import { usersMails } from "../../data/localData/usersMails";
import UsersMails from "../UsersMails/UsersMails";
import NavBar from "../../navigation/NavBar";
import ContactForm from "../../components/ContactForm/ContactForm";

class Contact extends React.Component {
  state = {
    usersMailsArray: [...usersMails]
  };

  sendMesseage = e => {
    e.preventDefault();

    const newMail = {
      name: e.target.name.value,
      mail: e.target.mail.value,
      desc: e.target.desc.value,
      id: this.state.usersMailsArray.length + 1
    };

    this.setState(prevState => ({
      usersMailsArray: [...prevState.usersMailsArray, newMail]
    }));

    e.target.reset();

    console.log(...this.state.usersMailsArray);
  };
  deleteMessage = id => {
    console.log("hi");
  };

  render() {
    return (
      <>
        <NavBar />
        <ContactForm sendMessage={this.sendMessage} />
        <UsersMails
          usersMails={this.state.usersMailsArray}
          deleteMessage={this.deleteMessage}
        />
        {/* <div className="columns">
          <form
            className="container column section"
            onSubmit={this.sendMesseage}
          >
            <h1 className="title is-3">Contact Form</h1>
            <div className="field">
              <label className="label">Name</label>
              <div className="control ">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                  name="name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <p className="control ">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  name="mail"
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  name="desc"
                ></textarea>
              </div>
            </div>
            <div className="container">
              <button
                className="button is-primary "
                type="submit"
                // onClick={this.sendMesseage}
              >
                Send
              </button>
            </div>
          </form>
           <div className="container column">
           
          </div>
        </div> */}
      </>
    );
  }
}

export default Contact;
