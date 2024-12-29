import $ from 'jquery'
import { useEffect } from 'react';
import { Link } from "react-router-dom"


// { bannerId }
export default function TopbarB() {

    return (
        <>
            <div id="topbar-b">
                <h1 className="logo">
                    <Link to="/" >
                        <img className="logo-b-b" src="./images/logo.svg" alt="" />
                    </Link>
                </h1>

                {/* 漢堡 */}
                <nav className="navigation">
                    <ul>
                        <li className="secondary3"><Link to="/classpage"><img src="./images/findshop-btn.png" alt="發掘店家" /></Link></li>
                        <li className="secondary2"><Link to='/member'><img src="./images/member-btn.png" alt="會員中心" /></Link></li>
                        <li className="secondary1"><Link to='/qa'><img src="./images/faq-btn.png" alt="常見問題" /></Link></li>
                        <li className="secondary4 first"><Link to='/search'><img src="./images/search-btn.png" alt="搜尋課程" /></Link></li>
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
