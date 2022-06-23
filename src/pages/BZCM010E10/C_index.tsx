/**
 * UI 개발
 * @module BZCM010E10 인원현황 등록
 * 220531 GT
 */
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  Button,
  GridHdBtnType,
  GridHeader,
  useSyncHttpCient,
  IResData as IHttpResData,
} from "@vntgcorp/vntg-wdk-client";
import {
  error,
  Notify,
  Title,
  ESGrid,
  useModal,
  userInfoGlobalState,
} from "@vntgcorp/vntg-wdk-client";
import { Config } from "./layout/200_MasterGridConfig";
import ApiCall from "./action/API";
import Search from "./layout/100_SearchForm";
import { useRef } from "react";
let masterGrid: ESGrid;
export default function BZCM010E10() {
  const [originRows, setOriginRows] = React.useState();
  const onSave = () => {};
  const onRetrive = (data: boolean) => {};
  const onCleanup = () => {};
  const [, fetchRequest] = useSyncHttpCient<IHttpResData>();
  const apiCall = new ApiCall(fetchRequest);
  React.useEffect(() => {
    masterGrid = new ESGrid("bzcm010e10grid");
    masterGrid.initializeGrid(Config, originRows);
    const searchValue = {
      busi_place: "1000",
      emp_name: "%",
      plant_code: "%",
      equip_code: "%",
      unit_work_code: "%",
    };
    apiCall.retrive(searchValue).then((result) => {
      masterGrid.setRows(result.data);
    });
  }, []);
  const gridBtnEvent = (type) => {
    switch (type) {
      case GridHdBtnType.plus:
        // addRow();
        break;
      case GridHdBtnType.minus:
        // minusRow();
        break;
      case GridHdBtnType.reflash:
        // refresh();
        break;
      default:
        break;
    }
  };
  const onChangeBusiCode = () => {};
  const onSubmit = () => {};
  const searchRef = useRef();

  return (
    <>
      <Title />
      <Search
        busiCode={"1000"}
        defaultBusiCode={"1000"}
        onChangeBusiCode={onChangeBusiCode}
        onSubmit={onSubmit}
        ref={searchRef}
      />
      <div className="grid">
        <GridHeader
          title={"hello"}
          type="default"
          gridBtnEvent={gridBtnEvent}
        />
        <div className="realGrid" id="bzcm010e10grid" />
      </div>
    </>
  );
}
