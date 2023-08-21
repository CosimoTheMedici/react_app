import React, {useState} from 'react'
import ReactPaginate from 'react-paginate';


const Table = ({ fields, items, scopedSlots }) => {
  const [searchValues, setSearchValues] = useState({});
const [currentPage, setCurrentPage] = useState(0);
const [paginationItemsvalue, setpaginationItemsvalue] = useState(items);
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
// console.log("filteredItems",filteredItems.length)
// console.log("items",items.length)
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
//console.log("paginatedItems",paginatedItems.length)


  return (
    <>
      <div className="table-responsive">
        <table className="table table-stripped table-hover datatable">
          <thead>
            {/* <div className="col-auto text-end float-end ms-auto download-grp">
              <input
                type="text"
                className="form-control"
                placeholder={`Search ... `}
                value={searchValues.global || ''}
                onChange={(event) => handleInputChange(event, 'global')}
              />
            </div> */}
            <tr>
              {fields.map((field) => (
                <th key={field.key} style={{...field._style, color: "green"}}>
                  {field.label}
                </th>
              ))}
            </tr>
            <tr>
              {fields.map((field) => (
                <th key={field.key} style={field._style}>
                  {field.label !== 'ACTION' && field.label !== "ID" ? (
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
              // for (const key in searchValues) {
              // if (!item[key].toLowerCase().includes(searchValues[key].toLowerCase())) {
              //     return false;
              // }
              // }
              for (let key in searchValues) {
                if (!item.hasOwnProperty(key)) {
                  continue;
                }
            
                const itemValue = String(item[key]); // Convert the value to a string
            
                if (!itemValue.toLowerCase().includes(String(searchValues[key]).toLowerCase())) {
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
        pageCount={filteredItems.length!==0? Math.ceil(filteredItems.length / itemsPerPage):Math.ceil(items.length / itemsPerPage)}
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
    </>
  );
};

export default Table;