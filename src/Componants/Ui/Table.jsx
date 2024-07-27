import React, { useEffect, useState } from "react";
import { TableWrapper } from "./Input/Style";
import Pagination from "../Pagination/Pagination";
import { isEmpty } from "../../utils/common";

function Table({ columns = [], data = [],className="" ,pagination = false,paginationData={}, setPageSize =()=>{},setPageNum =()=>{},setPageSize_=()=>{} }) {
        const [rowSize, setRowSize] = useState(10);
        const [currentPage, setCurrentPage] = useState(1);
        const [currentData, setCurrentData] = useState([]);
        const [totalPage, setTotalpage] = useState(paginationData?.totalPage || 0);
        const [totalElements, setTotalElements] = useState(paginationData?.totalElements || data?.length);
      

        const onPageChange = (page) => {
            setCurrentPage(page);
            
          };
        const onPageSizeChange = (e) => {
          const size = e.target.value;
            setRowSize(size);
            setPageSize(size)
          
          };
useEffect(() =>{
  if(paginationData?.totalElements){
    setTotalElements(paginationData?.totalElements)
  }else{
    setTotalElements(data?.length)
  }
},[data])
          


          useEffect(() =>{
           if(pagination){
            const totalPage = Math.ceil((totalElements) / rowSize);
            setTotalpage(totalPage);
            const startIndex = (currentPage - 1) * rowSize;
            const endIndex = startIndex + rowSize;
            const sliceData = data.slice(startIndex, endIndex);
            setCurrentData(sliceData);
            
           
           }else{
            setCurrentData(data)
           }
      
          },[currentPage,rowSize,totalElements,data]);
          
useEffect(() =>{
  setPageSize_(rowSize)
},[rowSize]);
useEffect(() =>{
  setPageNum(currentPage)
},[currentPage]);
  return (
    <TableWrapper>
      <div className={`tableWrapper ${className}`}>
      <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ width: column.width }}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
       {!isEmpty(currentData) && currentData.map((row, rowIndex) =>{
     
          return(
           <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} style={{ width: column.width }} className={column.className}>
                {column.cell ? column.cell(row,rowIndex, column.width) : row[column.selector]}
              </td>
            ))}
          </tr>
          )
        })}
        {isEmpty(currentData) && <tr> <td colSpan={"100%"} style={{textAlign:"center"}}>No Record Found</td></tr>}
      
      </tbody>
    </table>
      </div>
      <div className="paginationBox flex justify-between align-center ">
        <div>{`Total items (${totalElements})`}</div> 
        <div className="flex gap-10">
         {(rowSize > 10) && <select name="page size"  defaultValue={rowSize} onChange={onPageSizeChange} >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
          </select>}
        <Pagination currentPage={currentPage} totalPages={totalPage} setCurrentPage ={onPageChange} />
        </div>
            
      </div>
    </TableWrapper>
  );
}

export default Table;
