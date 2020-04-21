import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import { connect } from "react-redux";
import { setModalClose as setModalCloseAction } from "../../actions";
import propTypes from "prop-types";

const AskQuestionModal = (props) => {
  const { setModalClose, title } = props;
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={setModalClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={setModalClose} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <ContactForm />
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={setModalClose}>
            Cancel
          </a>
        </footer>
      </div>
    </div>
  );
};
AskQuestionModal.propTypes = {
  setModalClose: propTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setModalClose: () => dispatch(setModalCloseAction()),
});

export default connect(null, mapDispatchToProps)(AskQuestionModal);
