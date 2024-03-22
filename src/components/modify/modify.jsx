import React from 'react'
import {useState, useEffect,useContext} from 'react'
import Background from '../../asset/images/userlogin/background.png'
import '../modify/modify.css'
import AuthContext from "../../Context/AuthProvider";
import axios from 'axios'
import { Link } from 'react-router-dom';

const Modify = () => {
    const [userData, setUserData] = useState([]);
    const { auth } = useContext(AuthContext);
    const [isGender,setIsgender] = useState('')
    const [birthday,setBirthday] = useState('')
    const [removePwd, setRemovePWd] = useState('')
    const [checkremovePwd,setCheckRemovePwd] = useState('')
    const [account,setAccount] = useState()
    
    useEffect(() => {
        if ( auth ) {
            console.log(auth)
            const accessToken = auth.accessToken;
            axios.get('http://localhost:8000/member/login', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setUserData(response.data);
                setIsgender(parseInt(response.data[0].gender))
                setBirthday(new Date(response.data[0].birthday).toISOString().split('T')[0])
                setAccount(response.data[0].account)
            })
            .catch(err => {
                // if(err) window.location.href=('/userlogin')
                // alert(err)
            });
        }
    }, [auth]);
    
    var Doremove = (e) => {
        var newRemovepwd = e.target.value
        setRemovePWd(newRemovepwd)
    }

    var DoremoveCheck = (e) => {
        var newRemovepwd = e.target.value
        setCheckRemovePwd(newRemovepwd)
    }
    

    var DoCheck = async() => {
        // e.preventDefault()
        if (auth.accessToken && removePwd === checkremovePwd){
            // alert('ok')
            await axios.post('http://localhost:8000/member/modify',JSON.stringify({account,removePwd}),{
                headers:{
                    "Content-Type":"application/json",
                },
                
            })
            window.location.href = ('/')
        }
        else{
            alert('錯誤')
        }
    }
    


    return(
    <>
    {userData.map((p,i) => (
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
                                <input className="Modify2" type="text" id="name" name="name" value={p.name} disabled />
                                <br/>
                                <br/>
                                <label className="Modify" for="birthday"><i
                                        className="fa-solid fa-cake-candles"></i>&emsp;生日:</label>
                                <br/>
                                <input className="Modify2" type="date" id="birthday"  value={birthday} disabled />
                                <br/>
                                <br/>
                                <label className="Modify" for="gender"><i className="fa-solid fa-bomb"></i>&emsp;性別:</label>
                                &emsp;<input type="radio" id="male" name="gender" value="1" checked={isGender===1} disabled />
                                <label className="Modify" for="male" ><i
                                        className="fa-solid fa-person"></i>男生</label>&emsp;
                                <input type="radio" id="female" name="gender" value="0" checked={isGender===0} disabled />
                                <label className="Modify" for="female"><i
                                        className="fa-solid fa-person-dress"></i>女生</label>
                                <br/>
                                <br/>
                                <label className="Modify" for="email"><i
                                        className="fa-solid fa-envelope"></i>&emsp;Email:</label>
                                <br/>
                                <input className="Modify2" type="email" id="email" name="email" value={p.email}/>
                                <br/>
                                <br/>
                                <label className="Modify" for="address"><i
                                        className="fa-solid fa-location-dot"></i>&emsp;地址:</label>
                                <br/>
                                <input className="Modify2" id="address" name="address" value={p.address}/>
                                <br/>
                                <br/>
                                <label className="Modify" for="tel"><i className="fa-solid fa-phone"></i>&emsp;電話:</label>
                                <br/>
                                <input className="Modify2" type="tel" id="tel" name="tel" value={p.tel}/>
                                <br/>
                                <br/>
                                <label className="Modify" for="account"><i className="fa-solid fa-ghost"></i>&emsp;帳號:</label>
                                <br/>
                                <input className="Modify2" type="text" id="account" name="account" value={p.account} disabled />
                                <br/>
                                <br/>
                                <label className="Modify" for="password"><i className="fa-solid fa-lock"></i>&emsp;修改密碼:</label>
                                <br/>
                                <input className="Modify2" type="password" id="password" name="password" value={removePwd} onChange={Doremove}
                                required
                                />
                                <br/>
                                <br/>
                                <label className="Modify" for="password2"><i className="fa-solid fa-lock"></i>&emsp;再次確認密碼:</label>
                                <br/>
                                <input className="Modify2" type="password" id="password2" name="password" value={checkremovePwd} onChange={DoremoveCheck}
                                required
                                />
                                <br/>
                                <br/>
                                <div className="d-flex justify-content-center text-center mt-3">
                                    <Link to='/' 
                                     className="Modify4 me-3" type='button' style={{textDecoration:'none'}}>取消</Link>
                                    <Link to='/' className="Modify1" type="button" method="post" value=""  onClick={DoCheck}
                                    disabled={!removePwd || !checkremovePwd ? true : false} style={{textDecoration:'none'}}
                                    >
                                    確認</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    ))}
    
    <br/>
    <br/>

    </>
    )
}

export default Modify