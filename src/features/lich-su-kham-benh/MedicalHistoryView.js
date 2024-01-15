import { Card } from "antd";
import { Table, Button, Drawer, Tabs } from "antd";
import { useState } from "react";
import VideoHinhAnhPage from "../video-hinh-anh/VideoHinhAnhPage";
import ChuanDoanHinhAnhPage from "../chuan-doan-hinh-anh/ChuanDoanHinhAnhPage";
import BoxDataComponent from "../thong-tin-benh-nhan";
import ThongTinBenhNhanPage from "../thongtinbenhnhan/ThongTinBenhNhanPage";

const MedicalHistoryView = () => {
  const onChange = () => {};
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
      dataIndex: "ngay_kham",
    },
    {
      title: "Mã khám",
      dataIndex: "ma_kham",
    },
    {
      title: "Đơn vị chỉ định",
      dataIndex: "don_vi_chi_dinh",
    },
    {
      title: "Chuẩn đoán",
      dataIndex: "chuan_doan",
    },
    {
      title: "Bác sĩ chỉ định",
      dataIndex: "bac_si_chi_dinh",
    },
    {
      title: "Đối tượng",
      dataIndex: "doi_tuong",
    },
    {
      title: "Chi tiết",
      dataIndex: "chi_tiet",
      render: (_, record) => (
        <>
          <Button type="primary" onClick={() => showDrawer(true)}>
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
  const data = [
    {
      key: "1",
      ngay_kham: "20/10/2003",
      ma_kham: "17102003",
      don_vi_chi_dinh: "Khoa Nội tổng hợp",
      chuan_doan: "",
      bac_si_chi_dinh: "",
      doi_tuong: "Bảo hiểm y tế",
      chi_tiet: "Chi tiết",
    },
    {
      key: "1",
      ngay_kham: "20/10/2003",
      ma_kham: "17102003",
      don_vi_chi_dinh: "Khoa Nội tổng hợp",
      chuan_doan: "",
      bac_si_chi_dinh: "",
      doi_tuong: "Bảo hiểm y tế",
      chi_tiet: "Chi tiết",
    },
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          style={{
            width: "80vw ",
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
