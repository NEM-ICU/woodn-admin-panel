import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { productSales } from "../../dummyData";
import { useRef } from "react";
import { Publish } from "@mui/icons-material";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

// Product Top

const ProductTitleCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.h1``;

const ProductAddButton = styled.button`
  width: 80px;
  padding: 5px;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductName = styled.span`
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

const ProductInfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span``;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

// Product Bottom

const ProductBottom = styled.div`
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 0px 15px -10px;
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductFormLeft = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const PFLabel = styled.label`
  margin-bottom: 10px;
  color: gray;
`;

const PFInput = styled.input`
  margin-bottom: 10px;
  border: none;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const PFSelect = styled.select`
  margin-bottom: 10px;
`;

const PFOption = styled.option``;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 50px;
`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

const ProductUploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;

const ChangedPublish = styled(Publish)``;

const ProductImageFile = styled.input`
  display: none;
`;
const UpdateButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: darkblue;
  color: white;
  font-weight: 700;
`;

const Product = () => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
  };
  return (
    <Container>
      <ProductTitleCont>
        <ProductTitle>Product</ProductTitle>
        <Link to="/product/create-product">
          <ProductAddButton>Product</ProductAddButton>
        </Link>
      </ProductTitleCont>

      <ProductTop>
        <ProductTopLeft>
          <Chart
            data={productSales}
            dataKey="sales"
            title="Sales Performance"
          />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImage src="https://wakefitdev.gumlet.io/img/npl_modified_images/darcy/sofa_WLCHRDRCFVBL/sofa_WLCHRDRCFVBL_1.jpg?w=732" />
            <ProductName>Blue Chair</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>sales:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <PFLabel>Product Name</PFLabel>
            <PFInput placeholder="Purple Desk" />
            <PFLabel>In Stock</PFLabel>
            <PFSelect>
              <PFOption>Yes</PFOption>
              <PFOption>No</PFOption>
            </PFSelect>
            <PFLabel>Active</PFLabel>
            <PFSelect>
              <PFOption>Yes</PFOption>
              <PFOption>No</PFOption>
            </PFSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImg src="https://wakefitdev.gumlet.io/img/npl_modified_images/darcy/sofa_WLCHRDRCFVBL/sofa_WLCHRDRCFVBL_1.jpg?w=732" />
              <ChangedPublish onClick={handleIconClick} />
              <ProductImageFile
                type="file"
                onChange={handleFileChange}
                ref={inputRef}
              />
            </ProductUpload>
            <UpdateButton>Update</UpdateButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
};

export default Product;
