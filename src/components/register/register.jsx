import React, { useEffect } from "react";
import { useRef,useState } from "react";
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import Background from '../../asset/images/userlogin/background.png'
import "../register/register.css"

// 姓名
const USER_REGEX = /^[\u4E00-\u9FA5]{2,4}$/; 
// 帳號
const ACCOUNT_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{6,20}$/;
// 密碼
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}/;
// 信箱
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//手機號
const TEL_REGEX = /^09\d{8}$/


const Register = () => {
    const userRef = useRef()
    const errRef =  useRef()

    const[name,setUser] = useState('')
    const[validName,setValidName] = useState(false)
    const[userFocus,setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [birthday,setBirthday] =  useState('')
    const [gender,setGender] = useState('')

    const [email,setEmail] = useState('')
    const [validEmail,setValidEmail] = useState(false)

    const [address,setAddress] = useState('')

    const [tel,setTel] = useState('')
    const [validTel,setvalidTel] = useState(false)

    const[account,setAccount] = useState('')
    const[validAccount,setValidAccount] = useState(false)
    const[accountFocus,setaccountFocus] = useState(false)

    const [errMsg,setErrMsg] = useState('')

    useEffect (() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(name)
        // console.log(result)
        // console.log(name)
        setValidName(result)
    },[name])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        // console.log(result)
        // console.log(pwd)
        setValidPwd(result)
    },[pwd])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        // console.log(result)
        // console.log(email)
        setValidEmail(result)

    },[email])
    
    useEffect(() => {
        const result = TEL_REGEX.test(tel)
        // console.log(result)
        // console.log(tel)
        setvalidTel(result)
    },[tel])

    useEffect(() => {
        const result = ACCOUNT_REGEX.test(account)
        // console.log(result)
        // console.log(account)
        setValidAccount(result)
    },[account])


    useEffect(() => {
        setErrMsg('')
    },[name,pwd,])




    const handleBirthday = (event) => {
        const selectedDate = event.target.value;
        const newDate = formatDate(selectedDate); // 格式化日期
        
        setBirthday(newDate);
    };
    
    const formatDate = (date) => {
        // 日期格式化為 "yyyy-MM-dd"
        const formattedDate = new Date(date).toISOString().split('T')[0];
        // console.log(formattedDate)
        return formattedDate;
        
    };

    const handleChange = (e) => {
        var newgender = e.target.value
        // console.log(newgender)
        setGender(newgender)
        
    }

    const Dosubmit = async () => {
        await axios.post('http://localhost:8000/member/register',JSON.stringify({
            name,birthday,gender,email,address,tel,account,pwd
        }),{
            headers:{'Content-Type':'application/json'},
            withCredentials: true
        })
        .then((response=>{
            if(response.data==='ok'){
                alert('註冊成功')
                window.location.href=('/')
        
            }else{
                alert('註冊失敗')
                window.location.href('/UserRegister')
            }
        }))
                
    }

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

                                    <span className={validName || !name ? "hide" : "invalid"}>
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
                                <p id="uidnote" className={userFocus && name && 
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
                                <input className="registered2" type="date" id="birthday" required
                                name="birthday" onChange ={handleBirthday} value={birthday}/>
                                <br/>
                                <br/>
                                <label className="registered" for="gender"><i className="fa-solid fa-bomb"></i>&emsp;性別:</label>
                                &emsp;
                                <input type="radio" id="male" name="gender" value="1" required
                                onClick={handleChange} checked={gender==="1"}/>
                                <label className="registered" for="male" ><i
                                        className="fa-solid fa-person"></i>男生</label>
                                        &emsp;
                                <input type="radio" id="female" name="gender" value="0" onClick={handleChange}checked={gender==="0"} required/>
                                <label className="registered" for="female"><i
                                        className="fa-solid fa-person-dress"></i>女生</label>
                                <br/>
                                <br/>
                                <label className="registered" for="email"><i
                                        className="fa-solid fa-envelope"></i>&emsp;Email:</label>
                                <br/>
                                <input 
                                className="registered2" 
                                type="email" id="email" 
                                name="email" 
                                placeholder="請輸入電子信箱" 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="uidemail"
                                />
                                <p id="uidemail" className={!email || validEmail ? "offscreen" : "instructions invalid" }>
                                    請輸入有效電子郵件
                                </p>
                                <br/>
                                <br/>
                                <label className="registered" for="address"><i
                                        className="fa-solid fa-location-dot"></i>&emsp;地址:</label>
                                <br/>
                                <input className="registered2" id="address" name="address" placeholder="請輸入縣市/區/住址" required
                                onChange={(e) => setAddress(e.target.value)}/>
                                <br/>
                                <br/>
                                <label className="registered" for="tel"><i className="fa-solid fa-phone"></i>&emsp;電話:</label>
                                <br/>
                                <input className="registered2" type="tel" id="tel" name="tel" placeholder="請輸入手機號碼(10個數字)" required
                                onChange={(e)=>setTel(e.target.value)}
                                aria-invalid={validEmail ? "false" : "true"}
                                aria-describedby="uidtel"
                                />
                                <p id="uidtel" className={!tel || validTel ? "offscreen" : "instructions invalid"}>
                                    請輸入正確電話格式      
                                </p>
                                <br/>
                                <br/>
                                <label className="registered" for="account"><i className="fa-solid fa-ghost"></i>
                                &emsp;帳號:
                                    <span className={validAccount ? " valid " : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>

                                    <span className={validAccount || !account ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <br/>
                                <input 
                                className="registered2" 
                                type="text" 
                                id="account" 
                                name="account"
                                placeholder="請輸入帳號(6-20英數字)"
                                autoComplete="off"  /* autoComplete取消自動完成 */
                                onChange ={(e) => setAccount(e.target.value)}
                                required
                                aria-invalid={validAccount ? "false" : "true"}
                                // aria-describedby="uidaccount"
                                onFocus={()=> setaccountFocus(true)}
                                onBlur = {() => setaccountFocus(false)}
                                />
                                <br/>
                                <br/>
                                <label className="registered" for="password"><i className="fa-solid fa-lock"></i>
                                &emsp;密碼:

                                    <span className={validPwd ? " valid " : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>

                                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <br/>
                                <input 
                                className="registered2" 
                                type="password" 
                                id="password" 
                                name="password"
                                placeholder="請輸入密碼(6-20英數字)"
                                autoComplete="off"  /* autoComplete取消自動完成 */
                                onChange ={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="uidpwd"
                                onFocus={()=> setPwdFocus(true)}
                                onBlur = {() => setPwdFocus(false)}
                                />
                                <p id="uidpwd" className={!pwd || validPwd ? "offscreen" : "instructions invalid" }>
                                    長度6-12<br/>
                                    至少包含一個小寫字母!<br/>
                                    至少包含一個大寫字母!<br/>
                                    至少包含一個一個數字!<br/>
                                </p>
                                <br/>
                                <br/>
                                <br/>
                                <div className="d-flex justify-content-center mb-3">
                                    <button className="registered1" type="button" method="post" value="" onClick={Dosubmit}
                                    disabled=
                                    {!validName || !validAccount || !validEmail || !validPwd || !validTel || !gender || !birthday ? true : false}
                                    >註冊</button>
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