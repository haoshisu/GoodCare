import React from 'react'
import Background from '../../asset/images/userlogin/background.png'
import './profile.css'


const Pofile = () => {
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
                            <div className="profile3">
                                <div className="bm-5">
                                    <h2 className="d-flex justify-content-center">會員資料</h2>
                                    <h4 className="d-flex justify-content-center">______________________________</h4>
                                </div>
                                <br/>
                                <form>
                                    <label className="profile" for="name"><i className="fa-solid fa-user"></i>&emsp;姓名:</label>
                                    <br/>
                                    <input className="profile2" type="text" id="name" name="name" />
                                    <br/>
                                    <br/>
                                    <label className="profile" for="birthday"><i
                                            className="fa-solid fa-cake-candles"></i>&emsp;生日:</label>
                                    <br/>
                                    <input className="profile2" type="date" id="birthday" />
                                    <br/>
                                    <br/>
                                    <label className="profile" for="gender"><i className="fa-solid fa-bomb"></i>&emsp;性別:</label>
                                    &emsp;<input type="radio" id="male" name="gender" value="1" checked/>
                                    <label className="profile" for="male" ><i
                                            className="fa-solid fa-person"></i>男生</label>&emsp;
                                    <input type="radio" id="female" name="gender" value="0"/>
                                    <label className="profile" for="female"><i
                                            className="fa-solid fa-person-dress"></i>女生</label>
                                    <br/>
                                    <br/>
                                    <label className="profile" for="email"><i
                                            className="fa-solid fa-envelope"></i>&emsp;Email:</label>
                                    <br/>
                                    <input className="profile2" type="email" id="email" name="email"/>
                                    <br/>
                                    <br/>
                                    <label className="profile" for="address"><i
                                            className="fa-solid fa-location-dot"></i>&emsp;地址:</label>
                                    <br/>
                                    <input className="profile2" id="address" name="address"/>
                                    <br/>
                                    <br/>
                                    <label className="profile" for="tel"><i className="fa-solid fa-phone"></i>&emsp;電話:</label>
                                    <br/>
                                    <input className="profile2" type="tel" id="tel" name="tel"/>
                                    <br/>
                                    <br/>
                                    <label className="profile" for="account"><i className="fa-solid fa-ghost"></i>&emsp;帳號:</label>
                                    <br/>
                                    <input className="profile2" type="text" id="account" name="account"/>
                                    <br/>
                                    <br/>
                                    <label className="profile" for="password"><i className="fa-solid fa-lock"></i>&emsp;密碼:</label>
                                    <br/>
                                    <input className="profile2" type="password" id="password" name="password"/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className="profile1" type="submit" method="post" value="">修改資料</button>
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
export default Pofile