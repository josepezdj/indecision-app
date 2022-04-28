import React from 'react';
import ReactModal from 'react-modal';

const OptionModal = (props) => (
  
<ReactModal
  
  isOpen={
    !!props.selectedOption
  /* Boolean describing if the modal should be shown or not. */}

  closeTimeoutMS={
    200
  /* Number indicating the milliseconds to wait before closing
    the modal. */}

  contentLabel={
    "Selected Option"
  /* String indicating how the content container should be announced
    to screenreaders */}

  portalClassName={
    "ReactModalPortal"
  /* String className to be applied to the portal.
    See the `Styles` section for more details. */}

  overlayClassName={
    "ReactModal__Overlay"
  /* String className to be applied to the overlay.
    See the `Styles` section for more details. */}

  id={
    "some-id"
  /* String id to be applied to the content div. */}

  className={
    "modal"
  /* String className to be applied to the modal content.
    See the `Styles` section for more details. */}

  bodyOpenClassName={
    "ReactModal__Body--open"
  /* String className to be applied to the document.body
    (must be a constant string).
    This attribute when set as `null` doesn't add any class
    to document.body.
    See the `Styles` section for more details. */}

  htmlOpenClassName={
    "ReactModal__Html--open"
  /* String className to be applied to the document.html
    (must be a constant string).
    This attribute is `null` by default.
    See the `Styles` section for more details. */}

  role={
    "dialog"
  /* String indicating the role of the modal, allowing the 'dialog' role
    to be applied if desired.
    This attribute is `dialog` by default. */}

  preventScroll={ false }

  aria={
    {
      labelledby: "heading",
      describedby: "full_description"
    }
  /* Additional aria attributes (optional). */}

  onRequestClose={props.handleWipeSelectedOption}
>
  <h3 className='modal__title'>Selected Option</h3>
  {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
  <button className='button' onClick={props.handleWipeSelectedOption}>Okay</button>
</ReactModal>
);

export default OptionModal;