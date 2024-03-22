import React from "react";
import { useState , useEffect , useRef , useContext} from "react";
import AuthContext from "../../Context/AuthProvider";
import axios from 'axios'
import Background from "../../asset/images/userlogin/background.png"
import '../userlogin/userlogin.css'
import { BrowserRouter as Router,Routes, Link, Route, } from 'react-router-dom';


const UserLogin = (  ) => {
    const {setAuth} = useContext(AuthContext)
    const { login } = useContext(AuthContext);
    const {cookies,setCookie} = useContext(AuthContext)

    const userRef = useRef()
    const errRef =  useRef()
    const [account, setAccount] = useState('')
    const [pwd, setPwd] = useState('')
    const [isRemember, setIsremember] = useState('')
    const [errMsg,setErrMsg] = useState('')
    const [fail, setFail] = useState(false)
    const[isRemembervalue,SetIsremembervalue] = useState('')
    
    
    

    useEffect (() => {
        userRef.current.focus()
        if(cookies){
            var a =  cookies.remberaccount
            // console.log("rember:", a)
            setAccount(a)
            setIsremember(1)
        }
    },[])

    useEffect (() => {
        setErrMsg('')
    },[account,pwd])

    const Doremember = (e) => {
        var r = e.target.checked ? 1 :0
        setIsremember(r)
        
    }

    const DoLogin = async(e) =>{

        await axios.post('http://localhost:8000/member/login',JSON.stringify({
            account,pwd
        }),{
            headers:{"Content-Type":"application/json"}
        })
        .then(response => {
            if(response?.data ==="account or paasword no correct"){
                setFail(true)
            }
            const userData = {
                account,
                pwd,
                accessToken: response?.data?.accessToken,
                id:response?.data?.result[0].memberid,
                name:response?.data?.result[0].name,
                tel:response?.data?.result[0].tel,
                address:response?.data?.result[0].address,
                email:response?.data?.result[0].email,
            };
            login(userData) //設定用戶資訊
            //cookie
            if(isRemember===1){
                
                setCookie("remberaccount", account , new Date(2024,5,22))
                
                
            }            
            window.location.href = ('/')
            
        })
        .catch(error => {
            // 錯誤
            console.error(error);
        })
        
        
        
        
    }

    return (
    <React.Fragment>
        
        <div style={{ 
            backgroundImage: `url(${Background})`,
            width:'100%',
            backgroundSize:'cover'
            }}>
            
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="d-flex justify-content-center mb-5 mt-5">
                        <div className="userlogin">
                            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                            <h2 className="d-flex justify-content-center">會員登入</h2>
                            <h4 className="d-flex justify-content-center mb-2">______________________________</h4>
                            <form>
                                <br/>
                                <br/>
                                <div className="mb-3">
                                    <i className="fa-solid fa-circle-user"></i>&emsp;
                                    <label htmlFor="Account"><h5>帳號:</h5></label>
                                    <input 
                                    type="text" 
                                    className="account"
                                    id="Account" value={account} ref={userRef}  autoComplete="off" onChange={(e) => setAccount(e.target.value)}
                                    required
                                    />
                                </div>
                                <br/>
                                <div className="mb-3">
                                    <i className="fa-solid fa-lock"></i>&emsp;
                                    <label htmlFor="pwd"><h5>密碼:</h5></label>
                                    <input type="password" className="password" 
                                        id="pwd" value={pwd}  onChange={(e) => setPwd(e.target.value)} required/>
                                </div>
                                <p className={fail ? "userloginshow" : "hide"}>帳號或密碼錯誤</p>
                                <div className="mb-3 form-check" >
                                    <input type="checkbox" className="form-check-input" id="Check" onClick={Doremember} checked={isRemember}/>
                                    <label className="form-check-label" htmlFor="Check" style={{fontSize: "14px"}}>記住我</label>
                                </div>
                                <br/>
                                <div className="d-flex justify-content-center mb-5">
                                    <button className="login" type="button" onClick={DoLogin} >登入</button>
                                </div>
                            </form>
                            <div className="userregister d-flex justify-content-center mb-3">
                                <Link to="/UserRegister" style={{textDecoration:'none'}}>
                                    <h5 >註冊帳號&emsp;｜</h5>
                                </Link>                            

                                <Link to="/UserForget" style={{textDecoration:'none'}}>
                                    <h5>&emsp;忘記密碼</h5>
                                </Link>
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

export default UserLogin