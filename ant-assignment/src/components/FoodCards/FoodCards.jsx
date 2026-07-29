import "./FoodCards.css";
import { Card, Button, Tag } from "antd";

import pizza from "../../assets/pizza.webp";
import burger from "../../assets/bureger.webp";
import borast from "../../assets/borast.jpg";

function FoodCards() {
  return (
    <div className="food-container">

      <Card className="food-card">

     <img src={burger} alt="Burger" />
        <h2>Burger</h2>

        <Tag color="green">Best Seller</Tag>

        <p>$30</p>

        <Button type="primary">
          Order Now
        </Button>

      </Card>

          <Card className="food-card">

       <img src={pizza} alt="Pizza" />

        <h2>Pizza</h2>

        <Tag color="green">Best Seller</Tag>

        <p>$36</p>

        <Button type="primary">
          Order Now
        </Button>

      </Card>

          <Card className="food-card">

      <img src={borast} alt="Borast" />

        <h2>Boarst</h2>

        <Tag color="green">Best Seller</Tag>

        <p>$40</p>

        <Button type="primary">
          Order Now
        </Button>

      </Card>

    </div>
  );
}

export default FoodCards;