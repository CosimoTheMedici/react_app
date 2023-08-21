// import React from 'react'
// import { mainLayoutAuth } from '../../layout'
// import { TableComponent,TableComponent2 } from '../../customComponents'
// import { items } from '../../utils/arrayData'

// const Table = () => {

//     const fields = [
//         {
//             key: '1',
//             label: 'Invoice ID',
           
//         },
       
//         {
//             key: '2',
//             label: 'Created on',
           
//         },
//         {
//             key: '3',
//             label: 'Invoice to',
           
//         },
//         {
//             key: '4',
//             label: 'Amount',
           
//         },
//         {
//             key: '5',
//             label: 'Due dategg',
           
//         },
//         {
//             key: '6',
//             label: 'Status',
           
//         },
//         {
//             key: 'ACTION',
//             label: 'ACTION',
           
//         },
//     ]

 

//   return (

//     <div class="row">
//             <div class="col-sm-12">
//               <div class="card card-table">
//                 <div class="card-body">
//                   <div class="table-responsive">
//                   <TableComponent2
//   fields={fields}
//   items={items}
//   scopedSlots={{
//     ACTION: (item) => (
      
//       <>
//       <i class="icon-more_vert"></i>
//       <ul>
//         <li class="dropdown show">
//       <div class="dropdown-menu dropdown-menu-right show" aria-labelledby="userSettings">
// 									<div class="header-profile-actions">
// 										<a href="user-profile.html"><i class="icon-user1"></i> My Profile</a>
// 										<a href="account-settings.html"><i class="icon-settings1"></i> Account Settings</a>
// 										<a href="login.html"><i class="icon-log-out1"></i> Sign Out</a>
// 									</div>
// 								</div>
//                 </li>
//                 </ul>
//                 </>
//     ),
//   }}
// />

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default mainLayoutAuth(Table)

// import React, { useState } from 'react';
// import { mainLayoutAuth } from '../../layout';
// import { TableComponent, TableComponent2 } from '../../customComponents';
// import { items, fields } from '../../utils/arrayData';

// const Table = () => {
//   const [showDropdown, setShowDropdown] = useState({});

 

//   const toggleDropdown = (index) => {
//     setShowDropdown((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <div className="row">
//       <div className="col-sm-12">
//         <div className="card card-table">
//           <div className="card-body">
//             <div className="table-responsive">
//               <TableComponent2
//                 fields={fields}
//                 items={items}
//                 scopedSlots={{
//                   ACTION: (item, index) => (
//                     <>
//                       <i className="icon-more_vert" onClick={() => toggleDropdown(index)}></i>
//                       {showDropdown[index] && (
//                         <div className="dropdown show">
//                           <div className="dropdown-menu dropdown-menu-right show " aria-labelledby="userSettings">
//                             <div className="header-profile-actions">
//                               <a href="user-profile.html">
//                                 <i className="icon-user1"></i> My Profile
//                               </a>
//                               <a href="account-settings.html">
//                                 <i className="icon-settings1"></i> Account Settings
//                               </a>
//                               <a href="login.html">
//                                 <i className="icon-log-out1"></i> Sign Out
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ),
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default mainLayoutAuth(Table);

import React, { useState } from 'react';
import { mainLayoutAuth } from '../../layout';
import { Modal, TableComponent, TableComponent2 } from '../../customComponents';
import { items, fields } from '../../utils/arrayData';

const Table = () => {
  const [showDropdown, setShowDropdown] = useState({});

  const toggleDropdown = (index) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  

  

  return (
    <>
    <div class="page-header">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">Home</li>
						<li class="breadcrumb-item active">Data Tables</li>
					</ol>

					<ul class="app-actions">
						<li>
							<a href="#" id="reportrange">
								<span class="range-text"></span>
								<i class="icon-chevron-down"></i>	
							</a>
						</li>
						<li>
							<a href="#">
								<i class="icon-export"></i>
							</a>
						</li>
					</ul>
				</div>
    <div class="main-container">
    <div class="row gutters">
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="info-stats4">
								<div class="info-icon">
									<i class="icon-eye1"></i>
								</div>
								<div class="sale-num">
									<h3>9500</h3>
									<p>Visitors</p>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
						
							</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="info-stats4">
								<div class="info-icon">
									<i class="icon-shopping-bag1"></i>
								</div>
								<div class="sale-num">
									<h3>7500</h3>
									<p>Sales</p>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
							<div class="info-stats4">
								<div class="info-icon">
									<i class="icon-activity"></i>
								</div>
								<div class="sale-num">
									<h3>3500</h3>
									<p>Expenses</p>
								</div>
							</div>
						</div>
          
					</div>

    <div class="row gutters">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <TableComponent2
                fields={fields}
                items={items}
				TableModalJsx={TableModal}
                scopedSlots={{
                  ACTION: (item, index) => (
                    <div class="task-block">
                    <ul class="task-actions">
																	
						<li class="dropdown">
							<a href="#" id="task-actions" data-toggle="dropdown" aria-haspopup="true">
								<i class="icon-more_vert"></i>
							</a>
							<div class="dropdown-menu dropdown-menu-right" aria-labelledby="userSettings">
                                    <div className="header-profile-actions">
                               <a href="user-profile.html">
                                 <i className="icon-user1"></i> My Profile
                               </a>
                               <a href="account-settings.html">
                                 <i className="icon-settings1"></i> Account Settings
                               </a>
                               <a href="login.html">
                                 <i className="icon-log-out1"></i> Sign Out
                               </a>
                             </div>
																		</div>
																	</li>
																</ul>
                                </div>
                  ),
                }}
              />
              </div>
              </div>
              </div>
              </>
            
  );
};

export default mainLayoutAuth(Table);




									


const TableModal = () => {
	return (
		<>
		<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
		<div class="custom-actions-btns mb-5">
			<a href="#" class="btn btn-primary">
				<i class="icon-export"></i> Export
			</a>
			<a href="#" class="btn btn-dark">
				<i class="icon-printer"></i> Print
			</a>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#customModalTwo">
			Custom Modal with Form
			</button>
		</div>
    	</div>
		<div class="modal fade" id="customModalTwo" tabindex="-1" role="dialog" aria-labelledby="customModalTwoLabel" aria-hidden="true">
										<Modal 
										modalheader={
											<>
											<h5 class="modal-title" id="customModalTwoLabel">Modal Title</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</>
										}
										modalbody={
											<form>
											<div class="form-group">
												<label for="recipient-name" class="col-form-label">Recipient:</label>
												<input type="text" class="form-control" id="recipient-name"/>
											</div>
											<div class="form-group">
												<label for="message-text" class="col-form-label">Message:</label>
												<textarea class="form-control" id="message-text"></textarea>
											</div>
										</form>
										}
										modalfooter={
											<>
											<button type="button" class="btn btn-secondary" data-dismiss="modal" btn-md> <i class="icon-export"></i>  Close</button>

                                            <button type="button" class="btn btn-primary" > Save Data </button>
											</>
										}
										
										/>
									</div>

		</>

	)
  }