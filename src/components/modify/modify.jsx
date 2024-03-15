import React from 'react'
import Background from '../../asset/images/userlogin/background.png'
import '../modify/modify.css'

const Modify = () => {
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
                    <div className="Modify3">
                        <div className="bm-5">
                            <h2 className="d-flex justify-content-center">修改會員資料</h2>
                            <h4 className="d-flex justify-content-center">______________________________</h4>
                        </div>
                        <br/>
                        <form>
                            <label className="Modify" for="name"><i className="fa-solid fa-user"></i>&emsp;姓名:</label>
                            <br/>
                            <input className="Modify2" type="text" id="name" name="name" />
                            <br/>
                            <br/>
                            <label className="Modify" for="birthday"><i
                                    className="fa-solid fa-cake-candles"></i>&emsp;生日:</label>
                            <br/>
                            <input className="Modify2" type="date" id="birthday" />
                            <br/>
                            <br/>
                            <label className="Modify" for="gender"><i className="fa-solid fa-bomb"></i>&emsp;性別:</label>
                            &emsp;<input type="radio" id="male" name="gender" value="1" checked/>
                            <label className="Modify" for="male" ><i
                                    className="fa-solid fa-person"></i>男生</label>&emsp;
                            <input type="radio" id="female" name="gender" value="0"/>
                            <label className="Modify" for="female"><i
                                    className="fa-solid fa-person-dress"></i>女生</label>
                            <br/>
                            <br/>
                            <label className="Modify" for="email"><i
                                    className="fa-solid fa-envelope"></i>&emsp;Email:</label>
                            <br/>
                            <input className="Modify2" type="email" id="email" name="email"/>
                            <br/>
                            <br/>
                            <label className="Modify" for="address"><i
                                    className="fa-solid fa-location-dot"></i>&emsp;地址:</label>
                            <br/>
                            <input className="Modify2" id="address" name="address"/>
                            <br/>
                            <br/>
                            <label className="Modify" for="tel"><i className="fa-solid fa-phone"></i>&emsp;電話:</label>
                            <br/>
                            <input className="Modify2" type="tel" id="tel" name="tel"/>
                            <br/>
                            <br/>
                            <label className="Modify" for="account"><i className="fa-solid fa-ghost"></i>&emsp;帳號:</label>
                            <br/>
                            <input className="Modify2" type="text" id="account" name="account"/>
                            <br/>
                            <br/>
                            <label className="Modify" for="password"><i className="fa-solid fa-lock"></i>&emsp;修改密碼:</label>
                            <br/>
                            <input className="Modify2" type="password" id="password" name="password"/>
                            <br/>
                            <br/>
                            <label className="Modify" for="password"><i className="fa-solid fa-lock"></i>&emsp;再次確認密碼:</label>
                            <br/>
                            <input className="Modify2" type="password" id="password" name="password"/>
                            <br/>
                            <br/>
                            <div className="d-flex justify-content-between align-items:center mt-3">
                                <button className="Modify4"><a href="#">取消</a></button>
                                <button className="Modify1" type="submit" method="post" value="">確認</button>
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

export default Modify