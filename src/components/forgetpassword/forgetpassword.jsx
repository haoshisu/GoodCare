import React from 'react'
import Background from '../../asset/images/userlogin/background.png'
import '../forgetpassword/forgetpassword.css'


const ForegetPassword = () => {
    return(
    <React.Fragment>
        <div style={{ 
            backgroundImage: `url(${Background})`,
            width:'100%',
            backgroundSize:'cover'
            }}>
            <div class="container">
                <div class="row">
                    <div class="col"></div>
                    <div class="d-flex justify-content-center mb-5 mt-5">
                        <div class="forgotpassword1">
                            <form>
                                <h2 class="d-flex justify-content-center  mt-3">忘記密碼？</h2>
                                <h4 class="d-flex justify-content-center mb-2">______________________________</h4>
                                <br/>
                                <br/>
                                <div class="d-flex justify-content-center align-items-center mb-3">
                                    <i class="fa-solid fa-envelope"></i>&emsp;<input type="text" class="account"
                                        id="Inputaccount" value="" placeholder="請輸入電子信箱"/>
                                </div>
                                <br/>
                                <br/>
                                <div className='d-flex  justify-content-center'>
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="forgotpassword" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        重設密碼
                                    </button>
                                    {/* <!-- Modal 吐司 --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body" style={{fontSize: "17px"}}>
                                                    重設密碼連結已寄到您的Email
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">離開</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <br/>
                            <div class="d-flex justify-content-center mt-4">
                                <a href="/UserRegister">
                                    <h5>註冊帳號</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
        <br/>
        <br/>

    </React.Fragment>
    )
}
export default ForegetPassword