import $ from 'jquery'
import { useEffect } from 'react';
import { Link } from "react-router-dom"


// { bannerId }
export default function Topbar({ bannerId }) {
    useEffect(()=>{
        $(function () {
            // console.log(bannerId);

            // 計算 .banner 的底部位置
            let area = $(bannerId).offset().top + $(bannerId).height();
    
            $(window).scroll(function () {
                if ($(this).scrollTop() > area) {
                    $('.logo-w').hide();
                    $('.logo-b').show();
                } else {
                    $('.logo-w').show();
                    $('.logo-b').hide();
                }
            });
        });


    },[bannerId])

    // $(function () {
    //     // 計算 .banner 的底部位置
    //     let area = $('#banner' ).offset().top + $( '#banner' ).height();

    //     $(window).scroll(function () {
    //         if ($(this).scrollTop() > area) {
    //             $('.logo-w').hide();
    //             $('.logo-b').show();
    //         } else {
    //             $('.logo-w').show();
    //             $('.logo-b').hide();
    //         }
    //     });
    // });

    return (
        <>
            <div id="topbar">
                <h1 className="logo">
                    <Link to="/" >
                        <img className="logo-w" src="./images/logow.svg" alt="" />
                        <img className="logo-b" src="./images/logo.svg" alt="" />
                    </Link>
                </h1>

                {/* 漢堡 */}
                <nav className="navigation">
                    <ul>
                        <li className="secondary3"><Link to="/mapmain"><img src="./images/findshop-btn.svg" alt="發掘店家" /></Link></li>
                        <li className="secondary2"><Link to='/member'><img src="./images/member-btn.svg" alt="會員中心" /></Link></li>
                        <li className="secondary1"><Link to='/qa'><img src="./images/faq-btn.svg" alt="常見問題" /></Link></li>
                        <li className="secondary4 first"><Link to='/search'><img src="./images/search-btn.svg" alt="搜尋課程" /></Link></li>
                    </ul>

                    {/* 漢堡按鈕  */}
                    <button className="hamburger" onClick={() => {
                        let hamburgerStyle = document.querySelector('.hamburger');
                        hamburgerStyle.classList.toggle('click');
                        for (let i = 1; i <= 4; i++) {
                            let blockMove = document.querySelector(`.secondary${i}`);
                            blockMove.classList.toggle(`show${i}`)
                        }

                    }}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                </nav>

            </div>
        </>
    )
}
