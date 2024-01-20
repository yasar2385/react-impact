import * as React from "react";

import { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import Report250 from "../Fakedata/data";
import fakeData from "../auth/fakeData";
import FetchDataBase from "../auth/Ajaxcall";

import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";

function Aggrid() {
  const [colDefs, setColDefs] = useState([
    {
      headerName: "First Name",
      field: "first_name",
    },
    {
      headerName: "Last Name",
      field: "last_name",
    },
    // { headerName: 'Job Title', field: 'job_title' },
    {
      field: "gender",
    },
    {
      field: "email",
    },
    {
      field: "ip_address",
      headerName: "Address",
    },
  ]);
  const [rowData, setRowData] = useState(Report250);
  const [filterData, setFilter] = useState(false);
  // Apply settings across all columns
  const defaultColDef = useMemo(() => ({
    filter: true, // Enable filtering on all columns
  }));

  useEffect(() => {
    var jsondata = {
      tbl: "Shareandinvite",
      find: {
        pubkitres: {$exists: false},
        emailto: {$in: ["bharathan.jp@newgen.co"]},
        linkinfo: "pubkit"
      },
      length: 5000,
      sort: {},
      filter: ["docid","status","emailto","dtd","apikey","role","key","taskid"],
    };
    // if (filterData) {
    //   let Find = {
    //     $in: [
    //       IS_LOCAL_HOST
    //         ? "bharathan.jp@newgen.co"
    //         : localStorage.getItem("xmleditor:username"),
    //     ],
    //   };
    //   jsondata.find.emailto = Find;
    //   jsondata.find.linkinfo = "pubkit";
    // }
    console.log(jsondata);
    async function fetchData() {
      /* fakeData.API_GET_DOCS_AUTH */
      const result = await FetchDataBase(jsondata, 'getdocsauth');
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <>
      <Container
        sx={{
          height: "475px",
        }}
        maxWidth="lg"
      >
        <div
          className="ag-theme-quartz"
          style={{
            height: 450,
          }}
        >
          <AgGridReact
            id="staff_grid"
            defaultColDef={defaultColDef}
            rowData={rowData}
            columnDefs={colDefs}
            style={{
              height: "100%",
              width: "100%",
            }}
            pagination={true}
            onSelectionChanged={(event) => console.log("Row Selected!")}
          ></AgGridReact>{" "}
        </div>{" "}
      </Container>{" "}
    </>
  );
}
export default Aggrid;
