import React from "react";
import Background from '../../asset/images/userlogin/background.png'
import "../register/register.css"

const Register = () => {
    return(
        <React.Fragment>
    <div style={{ 
            backgroundImage: `url(${Background})`,
            width:'100%',
            backgroundSize:'contain'
            }}>
        <div className="container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center align-items-center mb-5 mt-5">
                    <div className="registered3">
                        <div className="bm-5">
                            <h2 className="d-flex justify-content-center">會員註冊</h2>
                            <h4 className="d-flex justify-content-center">______________________________</h4>
                        </div>
                        <br/>
                        <form>
                            <label className="registered" for="name"><i className="fa-solid fa-user"></i>&emsp;姓名:</label>
                            <br/>
                            <input className="registered2" type="text" id="name" name="name" placeholder="請輸入姓氏和姓名"/>
                            <br/>
                            <br/>
                            <label className="registered" for="birthday"><i
                                    className="fa-solid fa-cake-candles"></i>&emsp;生日:</label>
                            <br/>
                            <input className="registered2" type="date" id="birthday" name="birthday"/>
                            <br/>
                            <br/>
                            <label className="registered" for="gender"><i className="fa-solid fa-bomb"></i>&emsp;性別:</label>
                            &emsp;<input type="radio" id="male" name="gender" value="1" checked/>
                            <label className="registered" for="male" ><i
                                    className="fa-solid fa-person"></i>男生</label>&emsp;
                            <input type="radio" id="female" name="gender" value="0"/>
                            <label className="registered" for="female"><i
                                    className="fa-solid fa-person-dress"></i>女生</label>
                            <br/>
                            <br/>
                            <label className="registered" for="email"><i
                                    className="fa-solid fa-envelope"></i>&emsp;Email:</label>
                            <br/>
                            <input className="registered2" type="email" id="email" name="email" placeholder="請輸入電子信箱"/>
                            <br/>
                            <br/>
                            <label className="registered" for="address"><i
                                    className="fa-solid fa-location-dot"></i>&emsp;地址:</label>
                            <br/>
                            <input className="registered2" id="address" name="address" placeholder="請輸入縣市/區/住址"/>
                            <br/>
                            <br/>
                            <label className="registered" for="tel"><i className="fa-solid fa-phone"></i>&emsp;電話:</label>
                            <br/>
                            <input className="registered2" type="tel" id="tel" name="tel" placeholder="請輸入手機號碼(10個數字)"/>
                            <br/>
                            <br/>
                            <label className="registered" for="account"><i className="fa-solid fa-ghost"></i>&emsp;帳號:</label>
                            <br/>
                            <input className="registered2" type="text" id="account" name="account"
                                placeholder="請輸入帳號(6-20英數字)"/>
                            <br/>
                            <br/>
                            <label className="registered" for="password"><i className="fa-solid fa-lock"></i>&emsp;密碼:</label>
                            <br/>
                            <input className="registered2" type="password" id="password" name="password"
                                placeholder="請輸入密碼(6-20英數字)"/>
                            <br/>
                            <br/>
                            <br/>
                            <div className="d-flex justify-content-center align-items:center">
                                <button className="registered1" type="submit" method="post" value="">註冊</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <br/>            


        </React.Fragment>
    )

}

export default Register