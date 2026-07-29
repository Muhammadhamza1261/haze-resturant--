import "./Gallery.css";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function Gallery() {
  return(
    <div className="gallery">
          <h1>Upload Food Image</h1>

      <Upload>
        <Button icon={<UploadOutlined />}>
          Upload Image
        </Button>
      </Upload>
    </div>
  )
}

export default Gallery;