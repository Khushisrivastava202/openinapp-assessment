import React, { useEffect, useRef,useState } from "react";
import { FaRegBell } from "react-icons/fa";
import Papa from "papaparse";
import { FiUpload } from "react-icons/fi";

export default function Upload() {
    const [data, setData] = useState([]);
    const [select, setSelect] = useState("");
    const [file, setFile] = useState(null);
    const filePickerRef = useRef();
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);

    const [values, setValues] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            setData(results.data);
          },
        });
      };
    
      function handleChange(e) {
        Papa.parse(e.target.files[0], {
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            const rowsArray = [];
            const valuesArray = [];
            results.data.forEach((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
            });
            setParsedData(results.data);
            setTableRows(rowsArray[0]);
            setValues(valuesArray);
          },
        });
      }

      const handleRemoveFile = () => {
        setFile(null);
      };
  return (
        <>
    <div className="flex justify-center items-center w-full flex-col">
 <div className=" bg-[#FFFFFF] flex justify-center items-center  rounded-sm flex-col gap-28">
              <div className="mx-auto flex flex-col gap-32 ">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  ref={filePickerRef}
                  hidden
                />
                  <div
          className='relative w-54 h-54 '
          onClick={() => filePickerRef.current.click()}
        >          
          <img className='h-16 w-24 m-3 ml-10 cursor-pointer' src="https://download.logo.wine/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.png"
           
          />
          <h6 className="w-full">Drop your CSV here or <span className="text-[#615EE6] cursor-pointer">Browse</span></h6>
        </div>
                {file && (
                  <div>
                    <button
                      onClick={handleRemoveFile}
                      className="text-red-500 font-bold"
                    >
                      Remove File
                    </button>
                  </div>
                )}
              </div>

              <div className="mx-auto">
                <button className="sm:w-[564px] sm:h-[56px] w-40 h-10 mx-auto my-auto  text-white  bg-[#615EE6] rounded-md flex justify-center items-center gap-2">
                <FiUpload />
                  Upload
                </button>
              </div>
            </div>
            <div className="">
         {data.length ? (
              
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Occupation</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.Name}</td>
                  <td>{row.Age}</td>
                  <td>{row.Occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
        </div>
            
           
        </div>
      
     
        </>
        
         
  )
}
