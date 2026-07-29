import "./Reviews.css";
import { Rate } from "antd";

function Reviews() {
  return (
    <div className="reviews">

      <h1>Please rate your experience.</h1>

      <p>How was our food?</p>

      <Rate defaultValue={5} />

    </div>
  );
}

export default Reviews;