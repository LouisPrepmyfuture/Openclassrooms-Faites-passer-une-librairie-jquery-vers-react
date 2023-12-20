import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";
import { ModalContext } from "./ModalContext.jsx";


const ContainerModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #434242a1;
  z-index: 99999;
  overflow: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const ModalStyle = styled.div`
  background-color: white;
  width: 70%;
  max-width: 640px;
  margin:70px auto;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
`;
const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonIconClose = styled.button`
font-size: 24px;
`
const BodyModalStyle = styled.div``;

/**
 * Generates the function comment for the given function body.
 *
 * @return {ReactNode} The JSX element representing the modal.
 */

const Modal = () => {
  let { contentModal, handleModal, title, modal, contentFooter, styleModal} = React.useContext(ModalContext);

	// create element div id = modal-root if null
	const parentModal = document.querySelector("#modal-root")
	if(parentModal === null){
		const contentElementModal = document.createElement('div');
		const corps = document.body;
		contentElementModal.id = "modal-root";
		corps.insertBefore(contentElementModal, corps.firstChild)
	}
  // check if object styleModal and items class css
  const containerModalClass = typeof styleModal !== 'undefined' &&  typeof styleModal.ContainerModal !== 'undefined' && styleModal.ContainerModal
  const modalClass = typeof styleModal !== 'undefined' &&  typeof styleModal.ModalStyle !== 'undefined' && styleModal.ModalStyle
  const headerModalClass = typeof styleModal !== 'undefined' &&  typeof styleModal.HeaderModal !== 'undefined' && styleModal.HeaderModal
  const buttonIconCloseClass = typeof styleModal !== 'undefined' &&  typeof styleModal.ButtonIconClose !== 'undefined' && styleModal.ButtonIconClose
  const bodyModalClass = typeof styleModal !== 'undefined' &&  typeof styleModal.BodyModalStyle !== 'undefined' && styleModal.BodyModalStyle


  if (modal) {
    return ReactDOM.createPortal(
      <ContainerModal className={containerModalClass}>
        <ModalStyle className={modalClass}>
          <HeaderModal className={headerModalClass}>
             {title}
            <ButtonIconClose
              className={buttonIconCloseClass}
              onClick={() => handleModal()}
            >
              &times;
            </ButtonIconClose>
          </HeaderModal>
          <BodyModalStyle className={bodyModalClass}>
            {contentModal && contentModal}
          </BodyModalStyle>
            { contentFooter  && contentFooter }
        </ModalStyle>
      </ContainerModal>,
      document.querySelector("#modal-root")
    );
  } else return null;
};

export default Modal;
