import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;

const NewProductTitle = styled.h1``;

const NewProductForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const NewProductItem = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const NPLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(150, 150, 150);
`;

const NPInput = styled.input`
  height: 40px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const ActiveSelect = styled.select`
  height: 40px;
  border-radius: 5px;
  color: #555;
`;

const ActiveOption = styled.option`
  font-size: 18px;
`;

const SubmitBtn = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const CreateProduct = () => {
  return (
    <Container>
      <NewProductTitle>New Product</NewProductTitle>
      <NewProductForm>
        <NewProductItem>
          <NPLabel>Product Name</NPLabel>
          <NPInput placeholder="Desk" />
        </NewProductItem>
        <NewProductItem>
          <NPLabel>Stock</NPLabel>
          <NPInput placeholder="20" />
        </NewProductItem>
        <NewProductItem>
          <NPLabel>Description</NPLabel>
          <NPInput type="text" placeholder="Description" />
        </NewProductItem>
        <NewProductItem>
          <NPLabel>Category</NPLabel>
          <NPInput type="text" placeholder="Chair, Desk, Black" />
        </NewProductItem>
        <NewProductItem>
          <NPLabel>Price</NPLabel>
          <NPInput type="number" placeholder="Price" />
        </NewProductItem>
        <NewProductItem>
          <NPLabel>Size</NPLabel>
          <NPInput type="text" placeholder="11x43, 12x45, 16x50 In" />
        </NewProductItem>
        <NewProductItem>
          <NPLabel>Active</NPLabel>
          <ActiveSelect>
            <ActiveOption>Yes</ActiveOption>
            <ActiveOption>No</ActiveOption>
          </ActiveSelect>
        </NewProductItem>
        <SubmitBtn>Create</SubmitBtn>
      </NewProductForm>
    </Container>
  );
};

export default CreateProduct;
