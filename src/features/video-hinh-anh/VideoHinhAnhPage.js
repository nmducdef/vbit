import { Divider, Row, Col } from "antd";

export const VideoHinhAnhPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Row gutter={16}>
        <Col span={4}></Col>
        <Col span={16}>
          <div
            style={{ fontSize: "30px", textAlign: "center", fontWeight: "700" }}
          ></div>
          <div
            style={{ fontSize: "18px", textAlign: "center", fontWeight: "500" }}
          >
            Ngày khám:&nbsp; 09-03-2023 11:06:10
          </div>
        </Col>
      </Row>
      <Divider />
      <video width="1000" height="440" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      </video>
    </div>
  );
};
export default VideoHinhAnhPage;
