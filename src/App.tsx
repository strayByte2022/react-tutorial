import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import BootstrapButton from "./components/BootstrapButton"
function App() {
  let items = [
    { name: "John", id: 1 },
    { name: "Alice", id: 2 },
    { name: "Bob", id: 3 },
  ];
  const handleSelectedItem = (item: string) => {
    console.log(item)
  }
  return <div>
    <ListGroup items={items} heading="Employees" onSelectedItem={handleSelectedItem} /> 
    <Alert alert="This is an alert">
        <>This line is created via passing ReactNode children</>
    </Alert>
    <BootstrapButton></BootstrapButton>
    </div>
}
export default App;