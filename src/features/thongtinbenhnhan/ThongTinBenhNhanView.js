import { Col, Row } from "antd";
import { Card } from "antd";

const ThongTinBenhNhanView = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Card
            style={{
              width: "90%",
              background: "#00008b",
              color: "#fff",
              fontSize: "16px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p>
              <strong>Họ và tên: </strong> NGUYỄN MINH ĐỨC
            </p>
            <p>
              <strong>Ngày sinh: </strong> 1 - 1 - 2000
            </p>
            <p>
              <strong>Giới tính: </strong> Nam
            </p>
            <p>
              <strong>Số điện thoại: </strong> 0123456789
            </p>
            <p>
              <strong>Địa chỉ: </strong> Long Biên, Hà Nội
            </p>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{
              width: "90%",
              background: "#00008b",
              color: "#fff",
              fontSize: "16px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <p>
              <strong>Mã lần khám: </strong> 23000203
            </p>
            <p>
              <strong>Khoa/Phòng chỉ định: </strong> Khoa Nội tổng hợp
            </p>
            <p>
              <strong>Bác sĩ chỉ định: </strong> Nam
            </p>
            <p>
              <strong>Đối tượng: </strong> Bảo hiểm y tế
            </p>
            <p>
              <strong>Chẩn đoán: </strong>
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ThongTinBenhNhanView;
