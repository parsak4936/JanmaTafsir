import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import allActions from "../../app/Actions/AllActions";
function BachlorsTable() {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [customers, setCustomers] = useState(null);

  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    filters: {
      name: { value: "", matchMode: "contains" },
      "country.name": { value: "", matchMode: "contains" },
      company: { value: "", matchMode: "contains" },
      "representative.name": { value: "", matchMode: "contains" },
    },
  });


  const [ExpertData, setExpertData] = useState("");

  const handleAccept = () => {
    dispatch(allActions.NewReqActions.SecondFormSubmit(ExpertData));
  };
  const dispatch = useDispatch();

  const getCityID = useSelector((state) => state.NewReqReducer.cityID);
  const getstateID = useSelector((state) => state.NewReqReducer.stateID);

  const getStateURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/Expert/GetExpert";

  const getExpertData = () => {
    axios
      .get(getStateURL, {
        params: {
          CityId: getCityID,
          StateId: getstateID,
          PageNumber: 2,
          PageSize: 2,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          setTotalRecords(response.data.data.totalCount);
          setCustomers(response.data.data.data);
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
  }, [lazyParams]);

  const loadLazyData = () => {
    setLoading(true);

    if (loadLazyTimeout) {
      clearTimeout(loadLazyTimeout);
    }

    //imitate delay of   backend call
    loadLazyTimeout = setTimeout(() => {
      getExpertData();
    }, Math.random() * 1000 + 250);
  };

  const onPage = (event) => {
    setLazyParams(event);
  };

  const onSort = (event) => {
    setLazyParams(event);
  };

  const onFilter = (event) => {
    event["first"] = 0;
    setLazyParams(event);
  };
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);

  const onClick = (name, rowData) => {
    dialogFuncMap[`${name}`](true);
    setExpertData(rowData);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
    displayBasic2: setDisplayBasic2,
  };
  //   activityRange
  // bio
  // city
  // cityGraduationId
  // expertStatus
  //id
  // state
  // stateGraduationId
  // user
  // userId
  // userRequests
  // userVerify

  const ExpertState = (rowData) => {
    return (
      <React.Fragment>
        <span className="image-text">{rowData.state} </span>
      </React.Fragment>
    );
  };

  const ExpertImage = (rowData) => {
    return (
      <React.Fragment>
        <img
          src=""
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
      </React.Fragment>
    );
  };
  const moreDetail = (rowData) => {
    return (
      <React.Fragment>
        <Button
          label="جزییات بیشتر"
          className=""
          icon="pi pi-external-link"
          onClick={() => onClick("displayBasic", rowData)}
        />
      </React.Fragment>
    );
  };

  const RenderChooseExpertOptions = (name) => {
    return (
      <div>
        <Button
          label="            منصرف شدم
"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="             از انتخابم مطمئنم
"
          icon="pi pi-check"
          onClick={handleAccept}
          autoFocus
        />
      </div>
    );
  };

  const ChooseExpert = (rowData) => {
    //TODO: Modal Accept Warning !
    return (
      <Button
        onClick={() => {
          onClick("displayBasic2", rowData);
        }}
      >
        انتخاب
      </Button>
    );
  };
  const ExpertID = (rowData) => {
    return <spen>{rowData.userId}</spen>;
  };
  const ActivityRange = (rowData) => {
    return (
      <React.Fragment>
        {rowData.activityRange === 0 ? (
          <span className="image-text ">کشوری</span>
        ) : rowData.activityRange == 1 ? (
          <span className="image-text text-blue-500">استانی</span>
        ) : rowData.activityRange == 2 ? (
          <span className="image-text">شهری</span>
        ) : (
          <>موجود نمیباشد</>
        )}
      </React.Fragment>
    );
  };

  const ExpertName = (rowData) => {
    return (
      <React.Fragment>
        <span className="image-text">نام کارشناس؟</span>
      </React.Fragment>
    );
  };
  return (
    <div>
      <div className="card">
        <DataTable
          value={customers}
          scrollable
          scrollHeight="400px"
          lazy
          filterDisplay="row"
          responsiveLayout="scroll"
          dataKey="id"
          paginator
          first={lazyParams.first}
          rows={10}
          totalRecords={totalRecords}
          onPage={onPage}
          onSort={onSort}
          sortField={lazyParams.sortField}
          sortOrder={lazyParams.sortOrder}
          onFilter={onFilter}
          filters={lazyParams.filters}
          loading={loading}
        >
          <Column
            field="نام"
            header=" عکس"
            body={ExpertImage}
            filterPlaceholder="Search by name"
          />

          <Column
            field="نام"
            header="نام کارشناس"
            sortable
            filter
            body={ExpertName}
            filterPlaceholder="Search by name"
          />

          <Column
            field="country.name"
            header="محدوده کارشناسی"
            filterField="country.name"
            body={ActivityRange}
            filter
            filterPlaceholder="Search by country"
          />

          <Column
            field="company"
            sortable
            body={ExpertState}
            filter
            header="استان کارشناس"
            filterPlaceholder="Search by company"
          />
          <Column
            field="company"
            sortable
            body={ExpertID}
            filter
            header="کد کارشناس "
            filterPlaceholder="Search by company"
          />
          <Column
            field="representative.name"
            header="جزئیات بیشتر"
            body={moreDetail}
            filter
            filterPlaceholder="Search by representative"
          />
          <Column
            field="representative.name"
            header="تعداد درخواست های انجام شده  "
            body={ExpertState}
            filter
            filterPlaceholder="Search by representative"
          />
          <Column
            field=""
            header="انتخاب"
            filterPlaceholder="Search by company"
            body={ChooseExpert}
          />
        </DataTable>
      </div>

      <Dialog
        header=" آیا از انتخاب کارشناس مطمئن هستید "
        className="text-center"
        visible={displayBasic2}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic2")}
        footer={RenderChooseExpertOptions("displayBasic2")}
      >
        <Divider />
        <span> در صورت تایید به مرحله بعدی می روی</span>
      </Dialog>


      {/* //   activityRange
  // bio
  // city
  // cityGraduationId
  // expertStatus
  //id
  // state
  // stateGraduationId
  // user
  // userId
  // userRequests
  // userVerify */}
      <Dialog
        header="اطلاعات بیشتر کارشناس"
        className="text-center"
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}
      >
        <Divider />
        <span>  stateGraduationId : {ExpertData.stateGraduationId}</span>
       
        <br></br>
        <span> bio   : {ExpertData.bio}</span>
        <br></br>
        <span> state   : {ExpertData.activityRange}</span>
        <br></br>
        <span> userVerify : {ExpertData.userVerify}</span>
        <br></br>
 
        <span> user Id : {ExpertData.userId}</span>
      </Dialog>
    </div>
  );
}

export default BachlorsTable;
