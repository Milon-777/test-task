import Container from "./components/Container/Container";
import DataTable from "./components/DataTable/DataTable";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <Container>
        <SideBar></SideBar>
        <DataTable></DataTable>
      </Container>
    </>
  );
}

export default App;
