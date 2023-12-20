import React from "react";

export default () => {
  let [modal, setModal] = React.useState(false);
  let [contentModal, setContentModal] = React.useState();
  let [title, setTitle] = React.useState()
  let [styleModal, setStyleModal] = React.useState()
  let [contentFooter, setContentFooter] = React.useState()

  /**
 *  Toggles the modal and updates its content, title, style, and footer.
 *
 * @param {any} contentModal - The content for the modal.
 * @param {any} title - The title for the modal.
 * @param {object} styleModal - The style for the modal.
 * @param {any} contentFooter -  The content for the footer modal.
 */
  let handleModal = (contentModal = false, title = false, styleModal = false, contentFooter = false) => {
    setModal(!modal);
    if (contentModal) {
      setContentModal(contentModal);
    }
    if (title) {
      setTitle(title)
    }
    if (styleModal) {
      setStyleModal(styleModal)
    }
    if (contentFooter) {
      setContentFooter(contentFooter)
    }
  };

  return { contentModal, handleModal, modal, title, styleModal, contentFooter };
};