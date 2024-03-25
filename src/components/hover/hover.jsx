import React, { useEffect } from 'react';
import './hover.css'


const ScrollEffectComponent = () => {
    useEffect(() => {
        // 獲取容器元素
        const hoverContainer = document.getElementById('hoverContainer');

        // 監聽視窗的滾動事件
        const handleScroll = () => {
            // 獲取視窗的垂直滾動位置
            const scrollTop = window.scrollY;

            // 獲取所有 hover1 和 hover2 元素
            const hover1Elements = document.querySelectorAll('.hover1');
            const hover2Elements = document.querySelectorAll('.hover2');

            // 根據滾動位置進行操作
            if (scrollTop > 2950) {
                // 如果滾動位置超過2800像素，將 hover1 和 hover2 元素的位置進行適當的調整
                hover1Elements.forEach(element => {
                    element.style.top = '0px';
                });

                hover2Elements.forEach(element => {
                    element.style.top = '0px';
                });
            } else {
                // 如果滾動位置小於200像素，將 hover1 和 hover2 元素的位置恢復原狀
                hover1Elements.forEach(element => {
                    element.style.top = '100px';
                });

                hover2Elements.forEach(element => {
                    element.style.top = '-100px';
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>
        <div class="hover" id="hoverContainer">
            <div class="hover1">
                <img src={require('../../asset/images/Home/hover1.png')} alt="老人圖1" />
            </div>
            <div class="hover2">
                <img src={require('../../asset/images/Home/hover2.png')} alt="老人圖2" />
            </div>
            <div class="hover1">
                <img src={require('../../asset/images/Home/hover3.png')} alt="老人圖3" />
            </div>
            <div class="hover2">
                <img src={require('../../asset/images/Home/hover4.png')} alt="老人圖4" />
            </div>
        </div>
    </>
};

export default ScrollEffectComponent;
