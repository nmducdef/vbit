import { EyeOutlined } from "@ant-design/icons";
import { Button, Table, Col, Divider, Row } from "antd";

export const ChanDoanHinhAnhPage = () => {
  const handleClick = () => {};
  const columns = [
    {
      title: "Ngày khám",
      dataIndex: "ngay_kham",
    },
    {
      title: "Vùng khảo sát",
      dataIndex: "vung_khao_sat",
    },
    {
      title: "Kết quả",
      dataIndex: "ket_qua",
      render: (_, record) => (
        <>
          <Button type="primary" onClick={handleClick}>
            <EyeOutlined /> &nbsp; Xem kết quả
          </Button>
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      ngay_kham: "17/10/2003",
      vung_khao_sat: "Chụp XQuang khớp cổ chân phải T-N",
      ket_qua: "Xem kết quả",
    },
    {
      key: "1",
      ngay_kham: "17/10/2003",
      vung_khao_sat: "Chụp XQuang khớp cổ chân phải T-N",
      ket_qua: "Xem kết quả",
    },
    {
      key: "1",
      ngay_kham: "17/10/2003",
      vung_khao_sat: "Chụp XQuang khớp cổ chân phải T-N",
      ket_qua: "Xem kết quả",
    },
  ];

  return (
    <div>
      <Row gutter={16}>
        <Col span={4}></Col>
        <Col span={16}>
          <div
            style={{ fontSize: "30px", textAlign: "center", fontWeight: "700" }}
          >
            KẾT QUẢ HÌNH ẢNH
          </div>
          <div
            style={{ fontSize: "18px", textAlign: "center", fontWeight: "500" }}
          >
            Ngày khám:&nbsp; 09-03-2023 11:06:10
          </div>
        </Col>
      </Row>
      <Divider />

      <Table columns={columns} dataSource={data} size="middle" />

      <div style={{ marginTop: "1%", textAlign: "center" }}>
        <Button type="primary" icon={<EyeOutlined />}>
          Xem kết quả hình ảnh
        </Button>
      </div>
    </div>
  );
};
export default ChanDoanHinhAnhPage;
