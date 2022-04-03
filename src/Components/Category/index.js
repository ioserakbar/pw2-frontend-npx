import { Button, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faTv, faTshirt, faHome } from '@fortawesome/free-solid-svg-icons';

const icons = {
  "tv":faTv,
  "ropa":faTshirt,
  "game":faGamepad,
  "hogar":faHome
}
export const Category = (
  {
    iconName = "hogar",
    color = "primary",
    text = "Categoria",
    path = "https://www.google.com"
  }
) =>
(
  <Col>
    <Button variant={color} href={path}>
      <h4>{text}</h4>
      <h1><FontAwesomeIcon icon={icons[iconName]}></FontAwesomeIcon></h1>
    </Button>
  </Col>
);