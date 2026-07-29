import "./DeliveryProgress.css";
import { Progress } from "antd";

function Deliveryprogress () {
    return(
        <div className="delivery">

      <h1>Order Status</h1>

      <Progress percent={75} />

    </div>
    )
}

export default Deliveryprogress;