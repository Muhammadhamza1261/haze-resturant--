// import "./Header.css";
// import { Button } from "antd";

// function Header () {
//     return(
//         <div className="header">
//      <h1>Haze Resturant</h1>

//      <Button type="primary">Order Now</Button>
//         </div>
//     )
// }



import "./Header.css";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";


function Header (){

    const [open, setOpen] = useState(false);
    return(
     <div className="header">

  <h1>Haze Restaurant</h1>

  <div className="nav-links">
    <a href="#">Home</a>
    <a href="#">Menu</a>
    <a href="#">Contact</a>

    <Button type="primary">
      Order Now
    </Button>
  </div>

  <Button
    className="menu-btn"
    icon={<MenuOutlined />}
    onClick={() => setOpen(true)}
  />

  <Drawer
    title="Menu"
    open={open}
    onClose={() => setOpen(false)}
  >
    <p>Home</p>
    <p>Menu</p>
    <p>Contact</p>
  </Drawer>

</div>
    )
}

export default Header;