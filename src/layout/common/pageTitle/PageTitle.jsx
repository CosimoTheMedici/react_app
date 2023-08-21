import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = () => {
  return (
    <div class="page-header">
    <div class="row">
        <div class="col-sm-12">
            <h3 class="page-title">Welcome Admin!</h3>
            <ul class="breadcrumb">
                <li class="breadcrumb-item active">Dashboard</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default PageTitle


export const PageTitleBreadCrumbs = ({title}) => {
  return (
    <div class="page-header">
					<ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/home/agent_owner">Home</Link></li>
            <li className="breadcrumb-item active">{title}</li>
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
  )
}

