import { Col, Row } from "antd";
import { Card } from "antd";
// import { useBoxUserInforContext } from "./ThongTinBenhNhanContext";
import { useContext } from "react";
import { MedicalHistoryContext } from "../lich-su-kham-benh/MedicalHistoryContext";
import BoxUserInforContext from "./ThongTinBenhNhanContext";

const ThongTinBenhNhanView = () => {
  const { dataMedicalHistory } = useContext(BoxUserInforContext);
  console.log(dataMedicalHistory);
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
              <strong>Họ và tên: </strong> {dataMedicalHistory.patientName}
            </p>
            <p>
              <strong>Ngày sinh: </strong> {dataMedicalHistory.patientBirth}
            </p>
            <p>
              <strong>Giới tính: </strong> Nam
            </p>
            <p>
              <strong>Số điện thoại: </strong> 0123456789
            </p>
            <p>
              <strong>Địa chỉ: </strong> {dataMedicalHistory.patientAddress}
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
              <strong>Mã lần khám: </strong> {dataMedicalHistory.numberCard}
            </p>
            <p>
              <strong>Khoa/Phòng chỉ định: </strong>{" "}
              {dataMedicalHistory.departmentName}
            </p>
            <p>
              <strong>Bác sĩ chỉ định: </strong> Nam
            </p>
            <p>
              <strong>Đối tượng: </strong> {dataMedicalHistory.objecttypeName}
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
