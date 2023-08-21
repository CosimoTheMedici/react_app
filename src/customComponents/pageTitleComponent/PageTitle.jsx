import React from 'react'

const PageTitle = () => {
  return (
    <div className="page-header">
    <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item">Pages</li>
        <li className="breadcrumb-item active">Invoice</li>
    </ol>

    <ul className="app-actions">
        <li>
            <a href="#" id="reportrange">
                <span className="range-text"></span>
                <i className="icon-chevron-down"></i>	
            </a>
        </li>
        <li>
            <a href="#">
                <i className="icon-export"></i>
            </a>
        </li>
    </ul>
</div>
  )
}

export default PageTitle