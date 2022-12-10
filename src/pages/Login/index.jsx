import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Link, Title } from "../../components/styles";
import { useAuth } from "../../hooks";
import { API } from "../../utils";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  useAuth();

  const checkEmailValidation = () => {
    const emailRegExp = /\w+@\w+\.\w+\.*\w*/;

    return emailRegExp.test(id);
  };

  const checkPwdValidation = () => {
    if (pwd.length < 8) return false;
    return true;
  };

  const login = async () => {
    try {
      const { data } = await API.post("/auth/signin", {
        email: id,
        password: pwd,
      });

      alert("로그인이 완료되었습니다.");
      localStorage.setItem("accessToken", data.access_token);
      navigate("/todo");
    } catch (e) {
      if (e.response.status === 401) {
        alert("아이디 또는 비밀번호를 확인해주세요.");
      } else {
        alert(`오류 발생: ${e.message}`);
      }
    }
  };

  return (
    <>
      <Title>로그인</Title>
      <Input
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={(e) => setId(e.target.value.trim())}
      />
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={pwd}
        onChange={(e) => setPwd(e.target.value.trim())}
        onKeyDown={(e) => {
          if (
            e.key === "Enter" &&
            !(checkEmailValidation() && checkPwdValidation())
          ) {
            login();
          }
        }}
      />
      <Button
        style={{ marginTop: "40px" }}
        disabled={!(checkEmailValidation() && checkPwdValidation())}
        onClick={login}
      >
        로그인
      </Button>
      <Link style={{ marginTop: "16px" }} onClick={() => navigate("/join")}>
        아직 회원이 아니신가요?
      </Link>
    </>
  );
};

export default Login;
