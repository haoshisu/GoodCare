import React from "react";


const styles = {
    backgroundImage: 'url(./background.png)',
    width: '100%',
    backgroundSize: 'cover'
  };

const UserLogin = () => {


    return (
    <React.Fragment>
        <div style={{styles}}>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <div className="userlogin">
                            <h2 className="d-flex justify-content-center">會員登入</h2>
                            <h4 className="d-flex justify-content-center mb-2">______________________________</h4>
                            <form>
                                <br/>
                                <br/>
                                <div className="mb-3">
                                    <i className="fa-solid fa-circle-user"></i>&emsp;<input type="text" className="account"
                                        id="Inputaccount" value="" placeholder="請輸入帳號"/>
                                </div>
                                <br/>
                                <div className="mb-3">
                                    <i className="fa-solid fa-lock"></i>&emsp;<input type="password" className="password"
                                        id="InputPassword" value="" placeholder="請輸入密碼(6-20英數字)"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="Check"/>
                                    <label className="form-check-label" for="Check" style="font-size: 14px;">記住我</label>
                                </div>
                                <br/>
                                <div className="d-flex justify-content-center mb-5">
                                    <button className="login" type="submit" method="post" value="">登入</button>
                                </div>
                            </form>
                            <div className="d-flex justify-content-center mb-3">
                                <a href="#">
                                    <h5>註冊帳號&emsp;｜</h5>
                                </a>
                                <a href="#">
                                    <h5>&emsp;忘記密碼</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>

    <br/>
    <br/>        

    </React.Fragment>






    )
}