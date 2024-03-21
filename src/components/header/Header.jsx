import React, { useEffect, useState,useContext } from 'react';
import AuthContext from "../../Context/AuthProvider";
import axios from 'axios'
import './Header.css'

function Header( ) {
    const [userName, setUserName] = useState('');
    const { auth } = useContext(AuthContext);
    const [road, setRoad] = useState('/userlogin')
    // console.log(auth.accessToken)
    useEffect(() => {
        if ( auth && auth.accessToken) {
            console.log(auth)
            const accessToken = auth.accessToken;
            axios.get('http://localhost:8000/member/login', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setUserName(response.data[0].name);
                setRoad('/UserModify')
                console.log(response)
            })
            .catch(error => {
                console.error('Failed to fetch user information:', error);
            });
        }
    }, [auth]);
  
    // const auth = useContext(AuthContext)
    // console.log(auth.auth.account)
  return (
    <div className="container">
        <div className="d-flex justify-content-between">
            <div><a href="/"><img src={require("../../asset/images/index/headerlogo.png")} alt="headerLogo" className="headerlogo"/></a></div>
            <div className="d-flex">
                <nav className="navbar me-4">
                    <div className="container-fluid">
                        <a href="https://www.hpa.gov.tw/Home/Index.aspx" className="navbar-brand me-4" id='tmp'>衛生福利部</a>
                        <a href="/" className="navbar-brand me-4">首頁專區</a>
                        <form className="d-flex search-bar" role="search">
                            <input className="form-control me-2" type="search" placeholder="搜尋長照補助" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="d-flex align-items-center search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div className="d-flex align-items-center">
                    <a className="user text-dark" href= {road}>
                        <i className="fa-solid fa-user"></i>
                        &nbsp;
                        <span>{userName ? `${userName}  你好` : '會員登入/註冊'}</span>
                        
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
