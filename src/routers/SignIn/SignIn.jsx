import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import SAlert from "sweetalert2";

import http from "../../http-common.js";
import { login } from "../../actions/index.js";

const SignIn = ({signin}) => {
    const navigate = useNavigate();

    const [user_input_id, setUserInputID] = useState("");
    const [user_input_pw, setUserInputPW] = useState("");
    
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var regKor =  /^[ㄱ-ㅎ가-힣]+$/;
    var regExp =  /[.~!@#$%^&*()_+|<>?:{}]/;

    const onChangeUserInputID = (e) => {
        setUserInputID(e.target.value);
    };
    
    const onChangeUserInputPW = (e) => {
        setUserInputPW(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
    
        if((user_input_id.length < 5) || lowerCase.test(user_input_id) || upperCase.test(user_input_id) || regKor.test(user_input_id) || regExp.test(user_input_id)) {
            SAlert.fire({
                icon: "error",
                text: "아이디 형식이 올바르지 않습니다",
                showConfirmButton: false,
                timer: 2000,
            });

            return;
        }

        if(user_input_pw.length < 6) {
            SAlert.fire({
                icon: "error",
                text: "비밀번호 형식이 올바르지 않습니다",
                showConfirmButton: false,
                timer: 2000,
            });

            return;
        }

        http
            .post({
                user_input_id, user_input_pw
            })

            .then((res) => {
                if (res.data.status) {
                    signin(res.data.user);
                    if(res.data.user.skinId === null) navigate.push("/baumann");
                    else navigate.push("/");
                }
                
                else {
                    alert(res.data.message);
                }
            })

            .catch((err) => {
                alert(err);
            });
    };

    return(
        <div className="container">
            <div className="leftbox">
                <div className="container_in_1">
                    <div className="title">
                        <p className="page">Login</p>
                        <p className="say">환영합니다. 로그인 해주세요!</p>
                    </div>
                    <form className="form_login">
                        <ul>
                            <li className="form_login_input">
                                <input
                                type="text"
                                name="user_input_id"
                                placeholder="아이디 (5자 이상)"
                                value={user_input_id}
                                onChange={onChangeUserInputID}
                                minLength="5"/>
                            </li>
                            <li className="form_login_input">
                                <input
                                type="password"
                                name="user_input_pw"
                                placeholder="비밀번호 (6자 이상)"
                                onChange={onChangeUserInputPW}
                                minLength="6"
                                />
                            </li>
                            <li className="login_opt">
                                <span className="btn_sign_up"
                                onClick={() => {
                                    navigate.push("/signup");
                                }}>
                                    회원가입
                                </span>
                                <span>|</span>
                                <span classname="btn_findpw"
                                onClick={() => {
                                    navigate.push("/findpw");
                                }}>
                                    비밀번호 찾기
                                </span>
                            </li>
                            <li>
                                <input className="btn_submit"
                                type="submit"
                                value="로그인"
                                onClick={onSubmit}
                                />
                            </li>
                        </ul>
                    </form>
                    <div>
                        <img className="bg_signin"
                        src="%PUBLIC_URL%/images/bg_signin.png"
                        alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user
})
      
const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(SignIn)