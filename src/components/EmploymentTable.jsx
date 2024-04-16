import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// define column names and widths
const columns = [
  { field: 'employer', headerName: 'Employer', width: 200 },
  { field: 'degree', headerName: 'Degree', width: 140 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'startDate', headerName: 'Start Date', width: 90 },
];



export default function DataTable({data}) {

  // add unique id to each row as required by mui table
  let rows = data.map((item, index) => ({
    id: index,
    ...item,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
}
