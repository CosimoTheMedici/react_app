import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Table2 = ({ fields, items, scopedSlots }) => {
  const [searchValues, setSearchValues] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page

  const handleInputChange = (event, key) => {
    const { value } = event.target;
    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [key]: value,
    }));
    setCurrentPage(0); // Reset current page when search values change
  };

  const filterItems = () => {
    return items.filter((item) => {
      const searchValue = searchValues.global?.toLowerCase() || '';
      for (const key in item) {
        if (
          typeof item[key] === 'string' &&
          item[key].toLowerCase().includes(searchValue)
        ) {
          return true;
        }
      }
      return false;
    });
  };

  const filteredItems = filterItems();

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = filteredItems.slice(
    offset,
    offset + itemsPerPage
  );

  return (
    <div className="table-container">
      <div className="t-header">Fixed Header</div>
      <div className="table-responsive">
        <table className="table table-stripped table-hover datatable">
          <thead>
            <div className="col-auto text-end float-end ms-auto download-grp">
              <input
                type="text"
                className="form-control"
                placeholder={`Search ... `}
                value={searchValues.global || ''}
                onChange={(event) => handleInputChange(event, 'global')}
              />
            </div>
            <tr>
              {fields.map((field) => (
                <th key={field.key} style={field._style}>
                  {field.label}
                </th>
              ))}
            </tr>
            <tr>
              {fields.map((field) => (
                <th key={field.key} style={field._style}>
                  {field.label !== 'ACTION' ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Search ${field.label}`}
                      value={searchValues[field.key] || ''}
                      onChange={(event) => handleInputChange(event, field.key)}
                    />
                  ) : (
                    ''
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedItems.map((item, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td key={field.key}>
                    {field.key !== 'ACTION' ? (
                      item[field.key]
                    ) : (
                      <>{scopedSlots.ACTION(item)}</>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageChange}
        containerClassName={'pagination rounded info justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Table2;


// const Table1 = ({ fields, items, scopedSlots }) => {
//     const [searchValues, setSearchValues] = useState({});


  
//     const handleInputChange = (event, key) => {
//       const { value } = event.target;
//       setSearchValues((prevSearchValues) => ({
//         ...prevSearchValues,
//         [key]: value,
//       }));
//     };

  
//   const filterItems = () => {
//       return items.filter((item) => {
//         const searchValue = searchValues.global?.toLowerCase() || '';
//         for (const key in item) {
//           if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchValue)) {
//             return true;
//           }
//         }
//         return false;
//       });
//     };
    
  
//     const filteredItems = filterItems();


//     const handlePageChange = (data) =>{
//         console.log("clicked", data.selected)
//     }
//   return (
    
// <div class="table-container">
//     <div class="t-header">Fixed Header</div>
//     <div class="table-responsive">
// <table className="table table-stripped table-hover datatable">
// <thead >



// <tr>
//   {fields.map((field) => (
//     <th key={field.key} style={field._style}>
//       {field.label}
//     </th>
//   ))}
// </tr>
// <tr>
//   {fields.map((field) => (
//     <th key={field.key} style={field._style}>
//       {field.label !== 'ACTION' ? (
//         <input
//           type="text"
//           className="form-control"
//           placeholder={`Search ${field.label}`}
//           value={searchValues[field.key] || ''}
//           onChange={(event) => handleInputChange(event, field.key)}
//         />
//       ) : (
//         ''
//       )}
//     </th>
//   ))}
// </tr>
// </thead>
// <tbody>
// {items
//   .filter((item) => {
//     for (const key in searchValues) {
//       if (!item[key].toLowerCase().includes(searchValues[key].toLowerCase())) {
//         return false;
//       }
//     }
//     return true;
//   })
//   .map((item, index) => (
//     <tr key={index}>
//       {fields.map((field) => (
//         <td key={field.key}>
//           {field.key !== 'ACTION' ? (
//             item[field.key]
//           ) : (
//             <>{scopedSlots.ACTION(item)}</>
//           )}
//         </td>
//       ))}
//     </tr>
//   ))}
// </tbody>
// </table>
// </div>
          
//             <ReactPaginate
//               previousLabel={'previous'}
//               nextLabel={'next'}
//               breakLabel={'...'}
//               pageCount={25} // Total number of pages
//               marginPagesDisplayed={3}
//               pageRangeDisplayed={6}
//               onPageChange={handlePageChange}
//               containerClassName={'pagination rounded info justify-content-center'}
//               pageClassName={"page-item"}
//               pageLinkClassName={"page-link"}
//               previousClassName={"page-item"}
//               previousLinkClassName={"page-link"}
//               nextClassName={"page-item"}
//               nextLinkClassName={"page-link"}
//               breakClassName={"page-item"}
//               breakLinkClassName={"page-link"}
//               activeClassName={"active"}
//             />
       
// </div>
//   )
// }

//export default Table


// import React, { useState } from 'react';
// import ReactPaginate from 'react-paginate';

// const Table2 = ({ fields, items, scopedSlots }) => {
//   const [searchValues, setSearchValues] = useState({});
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 10; // Number of items to display per page

//   const handleInputChange = (event, key) => {
//     const { value } = event.target;
//     setSearchValues((prevSearchValues) => ({
//       ...prevSearchValues,
//       [key]: value,
//     }));
//     setCurrentPage(0); // Reset current page when search values change
//   };

//   const filterItems = () => {
//     return items.filter((item) => {
//       for (const key in searchValues) {
//         const searchValue = searchValues[key]?.toLowerCase() || '';
//         if (
//           typeof item[key] === 'string' &&
//           item[key].toLowerCase().includes(searchValue)
//         ) {
//           return true;
//         }
//       }
//       return false;
//     });
//   };

//   const filteredItems = filterItems();

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   const offset = currentPage * itemsPerPage;
//   const paginatedItems = filteredItems.slice(
//     offset,
//     offset + itemsPerPage
//   );

//   return (
//     <div className="table-container">
//       <div className="t-header">Fixed Header</div>
//       <div className="table-responsive">
//         <table className="table table-stripped table-hover datatable">
//           <thead>
//             <tr>
//               {fields.map((field) => (
//                 <th key={field.key} style={field._style}>
//                   {field.label !== 'ACTION' ? (
//                     <>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder={`Search ${field.label}`}
//                         value={searchValues[field.key] || ''}
//                         onChange={(event) => handleInputChange(event, field.key)}
//                       />
//                       <br />
//                     </>
//                   ) : (
//                     field.label
//                   )}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedItems.map((item, index) => (
//               <tr key={index}>
//                 {fields.map((field) => (
//                   <td key={field.key}>
//                     {field.key !== 'ACTION' ? (
//                       item[field.key]
//                     ) : (
//                       <>{scopedSlots.ACTION(item)}</>
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         breakLabel={'...'}
//         pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
//         marginPagesDisplayed={3}
//         pageRangeDisplayed={6}
//         onPageChange={handlePageChange}
//         containerClassName={'pagination rounded info justify-content-center'}
//         pageClassName={'page-item'}
//         pageLinkClassName={'page-link'}
//         previousClassName={'page-item'}
//         previousLinkClassName={'page-link'}
//         nextClassName={'page-item'}
//         nextLinkClassName={'page-link'}
//         breakClassName={'page-item'}
//         breakLinkClassName={'page-link'}
//         activeClassName={'active'}
//       />
//     </div>
//   );
// };

// export default Table2;

//https://www.youtube.com/watch?v=kMuRr53RjcE&ab_channel=coderspirit


const Tablep = ({ fields, items, scopedSlots }) => {
  const [searchValues, setSearchValues] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page

  const handleInputChange = (event, key) => {
    const { value } = event.target;
    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [key]: value,
    }));
    setCurrentPage(0); // Reset current page when search values change
  };

  const filterItems = () => {
    return items.filter((item) => {
      for (const key in searchValues) {
        const searchValue = searchValues[key]?.toLowerCase() || '';
        if (
          typeof item[key] === 'string' &&
          item[key].toLowerCase().includes(searchValue)
        ) {
          return true;
        }
      }
      return false;
    });
  };

  const filteredItems = filterItems();
console.log("filteredItems",filteredItems.length)
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = filteredItems.length === 0 ? items.slice(
    offset,
    offset + itemsPerPage
  ):filteredItems.slice(
    offset,
    offset + itemsPerPage
  )

  return (
    <div className="table-container">
      <div className="t-header">Fixed Header</div>
      <div className="table-responsive">
        <table className="table table-stripped table-hover datatable">
          <thead>
            <tr>
              {fields.map((field) => (
                <th key={field.key} style={field._style}>
                  {field.label !== 'ACTION' ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Search ${field.label}`}
                      value={searchValues[field.key] || ''}
                      onChange={(event) => handleInputChange(event, field.key)}
                    />
                  ) : (
                    ''
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {paginatedItems
            .filter((item) => {
                for (const key in searchValues) {
                if (!item[key].toLowerCase().includes(searchValues[key].toLowerCase())) {
                    return false;
                }
                }
                return true;
            })
            .map((item, index) => (
                <tr key={index}>
                {fields.map((field) => (
                    <td key={field.key}>
                    {field.key !== 'ACTION' ? (
                        item[field.key]
                    ) : (
                        <>{scopedSlots.ACTION(item)}</>
                    )}
                    </td>
                ))}
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageChange}
        containerClassName={'pagination rounded info justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        forcePage={currentPage} // Set the current page for the pagination component
      />
    </div>
  );
};

