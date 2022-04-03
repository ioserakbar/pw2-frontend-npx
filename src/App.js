import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { ListOfCategories } from './Components/listOfCategories'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <ListOfCategories
            categories={
              [
                {
                  iconName: "tv",
                  color: "primary",
                  text: "Television",
                  path: "https://www.google.com"
                },
                {
                  iconName: "ropa",
                  color: "danger",
                  text: "Ropa y moda",
                  path: "https://www.google.com"
                },
                {
                  iconName: "game",
                  color: "success",
                  text: "Videojuegos",
                  path: "https://www.google.com"
                },
                {
                  iconName: "hogar",
                  color: "secondary",
                  text: "Casa y hogar",
                  path: "https://www.google.com"
                },
              ]
            }
          >

          </ListOfCategories>
        </Row>
      </Container>
    </div>
  );
}

export default App;
