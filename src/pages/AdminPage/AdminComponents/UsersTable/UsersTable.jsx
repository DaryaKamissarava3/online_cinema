import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { deleteUser, getUsersList } from "../../../../store/actions/userActions";

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const columns = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: 'firstName', headerName: 'First name', width: 130},
  {field: 'lastName', headerName: 'Last name', width: 130},
  {field: 'email', headerName: 'email', width: 180,},
  {
    field: 'requestDeleteAccount',
    headerName: 'delete',
    width: 150,
    renderCell: (params) => {
      const {row} = params;
      return (
        <div>
          {row.requestDeleteAccount ? (
            <Button variant="contained" color="secondary">
              DELETE USER
            </Button>
          ) : null}
        </div>
      );
    },
  },
];

export const UsersTable = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <Box mt={5}>
      <Box sx={{margin: '0 auto', height: 400, width: '50%'}}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {page: 0, pageSize: 5},
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onCellClick={(params) => {
            if (params.field === 'requestDeleteAccount') {
              handleDeleteUser(params.id);
            }
          }}
          sx={{
            '& .MuiDataGrid-root': {
              border: '1px solid #ccc',
            },
            '& .MuiDataGrid-cell': {
              padding: '8px',
            },
            '& .MuiDataGrid-row': {
              '&:nth-of-type(odd)': {
                backgroundColor: '#f5f5f5',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};
