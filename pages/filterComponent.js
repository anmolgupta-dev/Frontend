import React from 'react';
import axios from 'axios';
import { Constants } from '../util/constants';

function FilterComponent({title, filterRoute, showMore = false}) {
  let [filterData, setFilterData] = React.useState('');

  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": `${Constants.WEB_SERVICE_URL}${filterRoute}`,
    })
    .then((response) => {
      setFilterData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const renderFilterData = (filterData) => {
    if(!filterData) {
      return;
    }
    const jobDetailItems = filterData.map(filterItem => {
      return (
          <div key={filterItem.key}>
            <span>{filterItem.key}</span><span>{filterItem.doc_count}</span>
          </div>
      )
    })
    return jobDetailItems;
  }

  return (
    <div className="App">
      <div>{title}</div>
      {renderFilterData(filterData)}
      {showMore && <div>Show more</div>}
    </div>
  );
}

export default FilterComponent;