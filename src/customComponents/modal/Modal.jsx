import React from 'react'
import Modala from "react-bootstrap/Modal";

const Modal = ({
    modalheader,
    modalbody,
    modalfooter,
}) => {
  return (
                               <div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header">
                                                    {modalheader}
													
												</div>
												<div class="modal-body">
                                                    {modalbody}
													
												</div>
												<div class="modal-footer justify-content-center">
                                                    {modalfooter}
													
												</div>
											</div>
										</div>
  )
}

export default Modal



export function ModalComponent({
  modalTitle,
  modalBody,
  modalHeader,
  modalState,
  handleClose,
  modalBackdrop,
  modalEscapeKey,
}) {
  return (
    <>
      <Modala
        show={modalState}
        onHide={handleClose}
        animation={false}
        backdrop={modalBackdrop}
        keyboard={modalEscapeKey}
      >
        <Modala.Header>
          {modalHeader}
        </Modala.Header>
        <Modala.Body>{modalBody}</Modala.Body>
      </Modala>
    </>
  );
}