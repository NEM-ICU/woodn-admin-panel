import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  padding: 20px;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const TableRow = styled.tr``;

const TableHeading = styled.th`
  text-align: left;
`;

const TableData = styled.td``;

const TbUserCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const UserImageTb = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UsernameTb = styled.span``;

const ButtonTb = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.type == "approved" ? "#e5faf2" : "")};
  background-color: ${(props) => (props.type == "declined" ? "#fff0f1" : "")};
  background-color: ${(props) => (props.type == "pending" ? "#ebf1fe" : "")};
  color: ${(props) => (props.type == "approved" ? "#3bb077" : "")};
  color: ${(props) => (props.type == "declined" ? "#d95087" : "")};
  color: ${(props) => (props.type == "pending" ? "#3bb077" : "")};
`;

const WidgetLg = () => {
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <TableRow>
          <TableHeading>Customer</TableHeading>
          <TableHeading>Date</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Status</TableHeading>
        </TableRow>
        <TableRow>
          <TableData>
            <TbUserCont>
              <UserImageTb src="https://tse3.mm.bing.net/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" />
              <UsernameTb>Anna Carmin</UsernameTb>
            </TbUserCont>
          </TableData>
          <TableData> jul 30</TableData>
          <TableData>$215.00</TableData>
          <TableData>
            <ButtonTb type="approved">Approved</ButtonTb>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <TbUserCont>
              <UserImageTb src="https://tse3.mm.bing.net/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" />
              <UsernameTb>Mark Anton</UsernameTb>
            </TbUserCont>
          </TableData>
          <TableData>aug 4</TableData>
          <TableData>$315.00</TableData>
          <TableData>
            <ButtonTb type="approved">Approved</ButtonTb>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <TbUserCont>
              <UserImageTb src="https://tse3.mm.bing.net/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" />
              <UsernameTb>Julia Esb</UsernameTb>
            </TbUserCont>
          </TableData>
          <TableData>aug 5</TableData>
          <TableData>$75.00</TableData>
          <TableData>
            <ButtonTb type="pending">Pending</ButtonTb>
          </TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <TbUserCont>
              <UserImageTb src="https://tse3.mm.bing.net/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" />
              <UsernameTb>Julia Esb</UsernameTb>
            </TbUserCont>
          </TableData>
          <TableData>aug 5</TableData>
          <TableData>$75.00</TableData>
          <TableData>
            <ButtonTb type="declined">Declined</ButtonTb>
          </TableData>
        </TableRow>
      </Table>
    </Container>
  );
};

export default WidgetLg;
