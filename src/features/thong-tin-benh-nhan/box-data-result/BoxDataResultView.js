import { Table } from "antd";
import { useState } from "react";

const BoxDataResultView = () => {
  const columns = [
    {
      title: "TÊN XÉT NGHIỆM",
      dataIndex: "ten_xet_nghiem",
      key: "ten_xet_nghiem",
    },
    {
      title: "KẾT QUẢ",
      dataIndex: "ket_qua",
      key: "ket_qua",
    },
    {
      title: "ĐƠN VỊ",
      dataIndex: "don_vi",
      key: "don_vi",
    },
    {
      title: "GIÁ TRỊ THAM CHIẾU",
      dataIndex: "gia_tri_tham_chieu",
      key: "gia_tri_tham_chieu",
    },
  ];
  const data = [
    {
      key: 1,
      ten_xet_nghiem: "HUYẾT HỌC",
      children: [
        {
          ten_xet_nghiem: "RBC",
          ket_qua: 1,
          don_vi: "T/l",
          gia_tri_tham_chieu: "4.3 - 5.8",
        },
        {
          ten_xet_nghiem: "RBC",
          ket_qua: 1,
          don_vi: "T/l",
          gia_tri_tham_chieu: "4.3 - 5.8",
        },
      ],
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default BoxDataResultView;
