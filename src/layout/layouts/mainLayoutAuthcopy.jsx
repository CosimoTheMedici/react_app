import React from 'react'
import Navbar from '../common/navbar/Navbar'
import { Navbar ,Sidebar } from '../index'



const MainLayoutAuthcopy = (Component) => function HOC() {

  
    return (
      <div class="main-wrapper">
             <Navbar />
             <Sidebar />
        <div class="page-wrapper">
        <div class="page-header">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">Home</li>
						<li class="breadcrumb-item active">Admin Dashboard</li>
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
            <Component />
        </div>
        </div>

  
    )
  }
  
  export default MainLayoutAuthcopy