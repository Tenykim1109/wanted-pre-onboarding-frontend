import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Text, Title } from "../../components/styles";
import { API } from "../../utils";

const Join = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [checkPwd, setCheckPwd] = useState("");

  const navigate = useNavigate();

  const checkEmailValidation = () => {
    const emailRegExp = /\w+@\w+\.\w+\.*\w*/;

    return emailRegExp.test(id);
  };

  const checkPwdValidation = () => {
    if (pwd.length && pwd.length < 8) return false;
    return true;
  };

  const checkSamePwd = () => {
    if (checkPwd.length && checkPwd !== pwd) return false;
    return true;
  };

  const join = async () => {
    try {
      const { data } = await API.post("/auth/signup", {
        email: id,
        password: pwd,
      });

      alert("회원가입이 완료되었습니다.");
      localStorage.setItem("accessToken", data.access_token);
      navigate("/todo");
    } catch (e) {
      if (e.response.status === 400) {
        alert(e.response.data.message);
      } else {
        alert(`오류 발생: ${e.message}`);
      }
    }
  };

  return (
    <>
      <Title>회원가입</Title>
      <Input
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={(e) => setId(e.target.value.trim())}
      />
      {id.length && !checkEmailValidation() ? (
        <Text color="red">이메일 형식의 아이디를 입력해주세요.</Text>
      ) : null}
      <Input
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={pwd}
        onChange={(e) => setPwd(e.target.value.trim())}
      />
      {!checkPwdValidation() && (
        <Text color="red">8자 이상의 비밀번호를 입력해주세요.</Text>
      )}
      <Input
        type="password"
        placeholder="비밀번호를 다시 입력해주세요"
        value={checkPwd}
        onChange={(e) => setCheckPwd(e.target.value.trim())}
      />
      {!checkSamePwd() && (
        <Text color="red">입력하신 비밀번호와 일치하지 않습니다.</Text>
      )}
      <Button style={{ marginTop: "40px" }} onClick={join}>
        회원가입
      </Button>
    </>
  );
};

export default Join;
