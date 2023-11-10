import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const FeaturedTitle = styled.span`
  font-size: 20px;
`;
const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ChangedArrowDownward = styled(ArrowDownward)`
  font-size: 14px !important;
  margin-left: 5px;
  color: red;
`;

const ChangedArrowUpward = styled(ArrowUpward)`
  font-size: 14px !important;
  margin-left: 5px;
  color: green;
`;

const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  return (
    <Container>
      {/* featured item 1 */}
      <FeaturedItem>
        <FeaturedTitle>Revanue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,414</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4 <ChangedArrowDownward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared To Last Month</FeaturedSub>
      </FeaturedItem>

      {/* featured item 2 */}
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,414</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4 <ChangedArrowDownward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared To Last Month</FeaturedSub>
      </FeaturedItem>
      {/* featured item 3 */}
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,000</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4 <ChangedArrowUpward />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared To Last Month</FeaturedSub>
      </FeaturedItem>
    </Container>
  );
};

export default FeaturedInfo;
