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

}

const Table1 = ({ fields, items, scopedSlots }) => {
    const [searchValues, setSearchValues] = useState({});


  
    const handleInputChange = (event, key) => {
      const { value } = event.target;
      setSearchValues((prevSearchValues) => ({
        ...prevSearchValues,
        [key]: value,
      }));
    };

  
  const filterItems = () => {
      return items.filter((item) => {
        const searchValue = searchValues.global?.toLowerCase() || '';
        for (const key in item) {
          if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchValue)) {
            return true;
          }
        }
        return false;
      });
    };
    
  
    const filteredItems = filterItems();


    const handlePageChange = (data) =>{
        console.log("clicked", data.selected)
    }
}