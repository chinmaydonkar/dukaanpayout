import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 15%;
  min-width: 150px;
  background-color: rgb(30, 38, 64);
  height: 100vh;
  color: white; /* Text color set to white */
`;

const Navbar = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #f0f0f0;
  &:hover {
    background-color: #e0e0e0;
  }
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
`;

const Input = styled.input`
  color: inherit;
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: none;
  outline: none;
  background: none;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const OverviewItem = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  margin: 0 10px;
  padding: 20px;
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const categories = [
    "UserName",
    "Home",
    "Orders",
    "Products",
    "Delivery",
    "Marketing",
    "Analytics",
    "Payouts",
    "Discounts",
    "Audience",
    "Appearence",
    "Plugins",
  ];

  return (
    <Container>
      <Sidebar>
        <div>
          {categories.map((category, index) => (
            <div key={index} onClick={() => handleTabChange(index)}>
              {category}
            </div>
          ))}
        </div>
      </Sidebar>

      <div style={{ flexGrow: 1 }}>
        <Navbar>
          <SearchBar>
            <Input type="text" placeholder="Search..." />
          </SearchBar>
          <Button>Search</Button>
          <Button>Sort</Button>
        </Navbar>

        <Overview>
          <OverviewItem>Next Payout</OverviewItem>
          <OverviewItem>Amount Pending</OverviewItem>
          <OverviewItem>Amount Processed</OverviewItem>
        </Overview>

        <Content>
          <ButtonContainer>
            <Button>Search</Button>
            <Button>Sort</Button>
          </ButtonContainer>
          <Table>
            <tbody>
              {[...Array(5)].map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {[...Array(5)].map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{`Row ${rowIndex + 1}, Col ${
                      cellIndex + 1
                    }`}</TableCell>
                  ))}
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Content>
      </div>
    </Container>
  );
};

export default App;
