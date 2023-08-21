import React from 'react'

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