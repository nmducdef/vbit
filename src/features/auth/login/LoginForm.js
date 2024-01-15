import { Card } from "antd";
import { Col, Row, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginUser from "../../../redux/apiRequest";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <>
      <Card
        style={{
          width: 860,
          margin: " 80px auto ",
        }}
      >
        <Row>
          <Col span={12}>
            <img
              src="https://media.istockphoto.com/id/1058679916/vi/vec-to/b%E1%BB%87nh-vi%E1%BB%87n-x%C3%A2y-d%E1%BB%B1ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector-c%C3%A1ch-ly-ho%E1%BA%A1t-h%C3%ACnh-ph%E1%BA%B3ng-trung-t%C3%A2m-y-t%E1%BA%BF-hi%E1%BB%87n-%C4%91%E1%BA%A1i-ho%E1%BA%B7c.jpg?s=612x612&w=0&k=20&c=M6eyDNkH46Ih1nNL4WVqvu6QB6vOMldAcZA46uuuT40="
              alt=""
              style={{ width: "400px", height: "auto" }}
            />
          </Col>
          <Col span={12}>
            <div
              className="container-form"
              style={{
                padding: "20px",
                backgroundColor: "gray",
                height: "90%",
                borderRadius: "15px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Row style={{}}>
                <Col span={20} offset={2}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#00008b",
                    }}
                  >
                    HỆ THỐNG XEM KẾT QUẢ ONLINE
                  </p>
                  <form onSubmit={handleSubmit}>
                    <h3 style={{ margin: "10px" }}>Mã tra cứu của bạn</h3>
                    <Input
                      size="large"
                      addonBefore={<UserOutlined />}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <h3 style={{ margin: "10px" }}>Mật khẩu</h3>
                    <Input.Password
                      size="large"
                      addonBefore={<LockOutlined />}
                      placeholder="input password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Đăng nhập</button>
                  </form>
                  <Link to="/lich-su-kham-benh" color="white">
                    Đi tới trang MedicalHistory
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default LoginForm;
