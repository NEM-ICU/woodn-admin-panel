import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productDataJson } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  flex: 4;
  margin-top: 10px;
`;

const ProductListCont = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductName = styled.span``;

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

const ProductList = () => {
  const [productData, setProductData] = useState(productDataJson);

  const handleDelete = (id) => {
    setProductData(productData.filter((item) => item.id != id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductListCont>
            <ProductImage src={params.row.img} />
            <ProductName>{params.row.name}</ProductName>
          </ProductListCont>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ActionBtn>Edit</ActionBtn>
            </Link>
            <ChangedDeleteOutline onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        rows={productData}
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

export default ProductList;
