import React, { useEffect } from "react";
import { useRef,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Background from '../../asset/images/userlogin/background.png'
import "../register/register.css"

 
const USER_REGEX = /^[\u4E00-\u9FA5]{2,4}$/;
const ACCOUNT_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}/;


const Register = () => {
    const userRef = useRef()
    const errRef =  useRef()

    const[user,setUser] = useState('')
    const[validName,setValidName] = useState(false)
    const[userFocus,setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [birthday,setBirthday] =  useState('')

    const [errMsg,setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect (() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    },[user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match);
    },[pwd,matchPwd])

 
    
    useEffect(() => {
        setErrMsg('')
    },[user,pwd,matchPwd])


    const handleBirthday = (event) => {
        const selectedDate = event.target.value;
        const newDate = formatDate(selectedDate); // 格式化日期
        
        setBirthday(newDate);
    };
    
    const formatDate = (date) => {
        // 日期格式化為 "yyyy-MM-dd"
        const formattedDate = new Date(date).toISOString().split('T')[0];
        console.log(formattedDate)
        return formattedDate;
        
    };

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
                                <p ref={errRef} className={errMsg ? "errMsg" : "offerscreen"} aria-live="assertive">{errMsg}</p>
                                <h2 className="d-flex justify-content-center">會員註冊</h2>
                                <h4 className="d-flex justify-content-center">______________________________</h4>
                            </div>
                            <br/>
                            <form>
                                <label className="registered" htmlFor="username"><i className="fa-solid fa-user"></i>
                                &emsp;姓名:
                                    <span className={validName ? " valid " : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>

                                    <span className={validName || !user ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>

                                </label>
                                <br/>
                                
                                <input 
                                    className="registered2" 
                                    type="text" 
                                    id="username" 
                                    name="username" 
                                    ref={userRef} 
                                    autoComplete="off"  /* autoComplete取消自動完成 */
                                    onChange ={(e) => setUser(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={()=> setUserFocus(true)}
                                    onBlur = {() => setUserFocus(false)}
                                    // placeholder="請輸入姓氏和姓名"
                                />
                                <p id="uidnote" className={userFocus && user && 
                                    !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    {/* "fa-solid fa-circle-info" */}
                                    請輸入有效姓名
                                </p>
                                <br/>
                                <br/>
                                <label className="registered" for="birthday"><i
                                        className="fa-solid fa-cake-candles"></i>&emsp;生日:</label>
                                <br/>
                                <input className="registered2" type="date" id="birthday" 
                                name="birthday" onChange ={handleBirthday} value={birthday}/>
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