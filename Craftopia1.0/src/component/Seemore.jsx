import $ from 'jquery'
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import SearchLesson from '../pages/SearchLesson';

export default function Seemore({ text, imgBall, href }) {

    
    useEffect(() => {
        $(function () {
            $('.seemore-btn').click(function (e) {
                e.preventDefault();

                setTimeout(function () {

                    // 切換到另一頁       
                    window.location.href = href; 

                }, 1000);
                $(this).addClass('shot');

                setTimeout(function () {
                    $('.font').addClass('transform-delay');
                    $('.arr').addClass('transform-delay');
                }, 300);

                setTimeout(function () {
                    $('.font').addClass('transform-delay2');
                    $('.arr').addClass('transform-delay2');
                    $('.ball').addClass('transform-delay2');
                }, 700);

            })
        })

    }, []);


    return (
        <>
            <a className="seemore-btn" >
                <img className="ball" src={imgBall} alt="" />
                <span className="font">{text}</span>
                <img className="arr" src="./images/Vector-arr.png" alt="" />
            </a>
        </>
    )
}