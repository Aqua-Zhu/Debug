import $ from 'jquery'
import { Link } from "react-router-dom"

export default function Topbar() {
    $(function () {
        // 計算 .banner 的底部位置
        let area = $('#banner').offset().top + $('#banner').height();

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

    return (
        <>
                {/* 漢堡 */}
                <nav className="navigation">
                    <ul>
                        
                        {/* <li className="secondary3"><a href ='#'><img src="./images/findshop-btn.png" alt="發掘店家" /></a></li> */}
                        <li className="secondary3"><Link to="/shop"><img src="./images/findshop-btn.png" alt="發掘店家" /></Link></li>
                        <li className="secondary2"><a href="./pages/shop.jsx"><img src="./images/member-btn.png" alt="會員中心" /></a></li>
                        <li className="secondary1"><a href=""><img src="./images/faq-btn.png" alt="常見問題" /></a></li>
                        <li className="secondary4 first"><a href=""><img src="./images/search-btn.png" alt="搜尋課程" /></a></li>
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


        </>
    )
}
