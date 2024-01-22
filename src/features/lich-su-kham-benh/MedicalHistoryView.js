import { Card } from "antd";
import { Table, Button, Drawer, Tabs } from "antd";
import { useContext, useState } from "react";
import VideoHinhAnhPage from "../video-hinh-anh/VideoHinhAnhPage";
import ChuanDoanHinhAnhPage from "../chuan-doan-hinh-anh/ChuanDoanHinhAnhPage";
import BoxDataComponent from "../thong-tin-benh-nhan";
import ThongTinBenhNhanPage from "../thongtinbenhnhan/ThongTinBenhNhanPage";

import { useMedicalHistoryContext } from "./MedicalHistoryContext";

const MedicalHistoryView = () => {
  const { selectedId, data, setContext } = useMedicalHistoryContext();
  console.log(selectedId);
  const items = [
    {
      key: "1",
      label: "Thông tin bệnh nhân",
      children: <ThongTinBenhNhanPage />,
    },
    {
      key: "2",
      label: "Kết quả xét nghiệm",
      children: <BoxDataComponent />,
    },
    {
      key: "3",
      label: "Kết quả hình ảnh",
      children: <ChuanDoanHinhAnhPage />,
    },
    {
      key: "4",
      label: "Hình ảnh video(nếu có)",
      children: <VideoHinhAnhPage />,
    },
  ];

  const columns = [
    {
      title: "Ngày khám",
      dataIndex: "inputDate",
      key: "inputDate",
    },
    {
      title: "Mã khám",
      dataIndex: "patientCode",
      key: "patientCode",
    },
    {
      title: "Đơn vị chỉ định",
      dataIndex: "departmentName",
      key: "departmentName",
    },
    {
      title: "Chẩn đoán",
      dataIndex: "diagnostic",
      key: "diagnostic",
    },
    {
      title: "Bác sĩ chỉ định",
      dataIndex: "doctorassignName",
      key: "doctorassignName",
    },
    {
      title: "Đối tượng",
      dataIndex: "objecttypeName",
      key: "objecttypeName",
    },
    {
      title: "Chi tiết",
      dataIndex: "chi_tiet",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            onClick={() => {
              setContext((prev) => ({
                ...prev,
                selectedId: record.patientInfoId,
              }));
              setOpen(true);
            }}
          >
            Chi tiết
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
            width={1100}
          >
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              indicatorSize={(origin) => origin - 16}
              type="card"
            />
          </Drawer>
        </>
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  const onChange = () => {};

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "80vw",
          }}
          title="Card title"
          bordered={false}
        >
          <Table columns={columns} dataSource={data} size="middle" />
        </Card>
      </div>
    </>
  );
};

export default MedicalHistoryView;
