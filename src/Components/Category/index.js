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
    <Button variants={color} href={path}>
      <h1>{text}</h1>
      <FontAwesomeIcon icon={icons[iconName]}></FontAwesomeIcon>
    </Button>
  </Col>
);