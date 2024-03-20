import React, { Component } from 'react'
import AOS from 'aos';
import '../aos/aos.css';



export default class MyClassComponent extends Component {
    componentDidMount() {
        AOS.init();
    }
  render() {
    return (
        <div>
          <br />
        <div class="old">
            <div class="old1" data-aos="fade-down" data-aos-duration="3000">長照<em>2.0</em><br/>專業照顧您</div>
            <div data-aos="zoom-in" data-aos-duration="3000">
                <img src={require('../../asset/images/Home/oldman.png')}/>
            </div>
            <div class="old2" data-aos="fade-left" data-aos-duration="3000">
                <a href="/Map"><img src={require('../../asset/images/Home/taiwan.png')}/></a>
            </div>
        </div>
      </div>
    )
  }
}