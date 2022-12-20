import axios from "axios";
  
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
 // import UserReqModal from '../Modals/UserReqModal'
function BachlorsTable() {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [customers, setCustomers] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [selectedRepresentative, setSelectedRepresentative] = useState(null);
  const [lazyParams, setLazyParams] = useState({
      first: 0,
      rows: 10,
      page: 1,
      sortField: null,
      sortOrder: null,
      filters: {
          'name': { value: '', matchMode: 'contains' },
          'country.name': { value: '', matchMode: 'contains' },
          'company': { value: '', matchMode: 'contains' },
          'representative.name': { value: '', matchMode: 'contains' },
      }
  });


  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  const [ExpertData, setExpertData] = useState(false);
  const dispatch = useDispatch();
 
  const getCityID = useSelector((state) => state.NewReqReducer.cityID);
  const getstateID = useSelector((state) => state.NewReqReducer.stateID);
 
  const getStateURL =
  "https://elated-swanson-mrhungrj5.iran.liara.run/api/Expert/GetExpert";

  // https://elated-swanson-mrhungrj5.iran.liara.run/api/Expert/GetExpert?CityId=4&StateId=4&PageNumber=3&PageSize=3
const getExpertData = () => {
  axios
    .get(getStateURL,{ params: { CityId: getCityID ,StateId: getstateID,PageNumber:2 ,PageSize:4 } })
    .then((response) => {
      if (response.data.statusCode == 200) {
        
        setTotalRecords(response.data.data.totalCount);
        setCustomers(response.data.data.customers);
        setLoading(false);
        
      } else {
      }
    })
    .catch((exception) => {
      console.log(exception);
      
    });
};

 
let loadLazyTimeout = null;

useEffect(() => {
    loadLazyData();
    
},[lazyParams]) // eslint-disable-line react-hooks/exhaustive-deps
  
const loadLazyData = () => {
  setLoading(true);

  if (loadLazyTimeout) {
      clearTimeout(loadLazyTimeout);
  }

  //imitate delay of a backend call
  loadLazyTimeout = setTimeout(() => {
    getExpertData();
  }, Math.random() * 1000 + 250);
}

const onPage = (event) => {
  setLazyParams(event);
}

const onSort = (event) => {
  setLazyParams(event);
}

const onFilter = (event) => {
  event['first'] = 0;
  setLazyParams(event);
}

const onSelectionChange = (event) => {
  const value = event.value;
  setSelectedCustomers(value);
  setSelectAll(value.length === totalRecords);
}

const onSelectAllChange = (event) => {
  const selectAll = event.checked;

  if (selectAll) {
        getExpertData().then(data => {
          setSelectAll(true);
          setSelectedCustomers(data.customers);
      });
  }
  else {
      setSelectAll(false);
      setSelectedCustomers([]);
  }
}

const representativeBodyTemplate = (rowData) => {
  return (
      <React.Fragment>
          <img alt={rowData.representative.name} src={`images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
          <span className="image-text">{rowData.representative.name}</span>
      </React.Fragment>
  );
}

const countryBodyTemplate = (rowData) => {
  return (
      <React.Fragment>
          <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
          <span className="image-text">{rowData.country.name}</span>
      </React.Fragment>
  );
}
  return (
    
   
      
      <div>
      <div className="card">
          <DataTable value={customers} scrollable scrollHeight="400px" lazy filterDisplay="row" responsiveLayout="scroll" dataKey="id"
              paginator first={lazyParams.first} rows={10} totalRecords={totalRecords} onPage={onPage}
              onSort={onSort} sortField={lazyParams.sortField} sortOrder={lazyParams.sortOrder}
              onFilter={onFilter} filters={lazyParams.filters} loading={loading}
              selection={selectedCustomers} onSelectionChange={onSelectionChange}
              selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
              <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
              <Column field="نام" header="نام کارشناس" sortable filter filterPlaceholder="Search by name" />
              <Column field="country.name" sortable header="محدوده کارشناسی" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
              <Column field="company" sortable filter header="امتیاز" filterPlaceholder="Search by company" />

              <Column field="representative.name" header="جزئیات بیشتر" body={representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
              <Column field=""   header="انتخاب" filterPlaceholder="Search by company" body={()=>{<div>دکمه انتخاب باید بیاد اینجا</div>}} />

          </DataTable>
      </div>
  </div>

  );
}

   {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

export default BachlorsTable;
