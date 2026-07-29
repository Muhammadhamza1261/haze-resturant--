import "./Booking.css";
import { DatePicker, Select, Button } from "antd";

function Booking() {
  return (
    <div className="booking">

      <h1>Book Your Table</h1>

      <DatePicker className="input" />

      <Select
        className="input"
        placeholder="Select Time"
        options={[
          {
            value: "6pm",
            label: "6:00 PM",
          },
          {
            value: "7pm",
            label: "7:00 PM",
          },
          {
            value: "8pm",
            label: "8:00 PM",
          },
        ]}
      />

      <Button type="primary">
        Book Now
      </Button>

    </div>
  );
}

export default Booking;