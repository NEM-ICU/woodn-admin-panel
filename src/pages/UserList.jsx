import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userDetails } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  flex: 4;
  margin-top: 10px;
`;

const UserCont = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Username = styled.span``;

const ActionBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const ChangedDeleteOutline = styled(DeleteOutline)`
  color: red;
  cursor: pointer;
`;

const UserList = () => {
  const [data, setData] = useState(userDetails);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id != id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserCont>
            <UserImage src={params.row.avatar} />
            <Username>{params.row.username}</Username>
          </UserCont>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <ActionBtn>Edit</ActionBtn>
            </Link>
            <ChangedDeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 120,
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Container>
  );
};

export default UserList;
