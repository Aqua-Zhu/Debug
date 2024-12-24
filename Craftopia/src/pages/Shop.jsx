import '../scss/style-shop.scss'
import Topbar from "../component/Topbar";
import Seemore from '../component/Seemore';
import { Link } from 'react-router-dom';

export default function Shop() {

    return (
        <>
            <div id='body'>
                <main>
                    {/* 頁首區 */}
                    <div id="topbar">
                        {/* h1 */}
                        <h1 className="logo">
                            <Link to="/" >
                                <img className="logo-w" src="./images/logow.png" alt="" />
                                <img className="logo-b" src="./images/logo.svg" alt="" />
                            </Link>
                        </h1>
                        <Topbar />
                    </div>
                    { /* banner區 */}
                    <section id="banner">
                        <figure className="banner"><img src="./images/banner-shop.jpg" alt="" /></figure>
                        <figure><img src="" alt="" /></figure>
                    </section>

                    { /* 店家簡介 */}
                    <section id="shop-intro">
                        <div className="top">
                            <img src="./images/shop-img.png" alt="" />
                            <h2>小自在工藝空間</h2>
                        </div>
                        <div className="content">
                            <img className="line" src="./images/shop-Vector.png" alt="" />
                            <p><img src="./images/phone.png" alt="" /> 0800-000-000</p>
                            <p><img src="./images/locate.png" alt="" /> 台北市大安區復興南路一段150號2樓</p>
                            <p><img src="./images/Time.png" alt="" /> 星期二~星期日 <br />11:30~18:00</p>
                            <img className="line" src="./images/shop-Vector2.png" alt="" />
                        </div>
                    </section>
                    <div id="b-content">
                        <section id="content">
                            <article id="box-list">
                                <div className="img">
                                    <figure><img src="./images/shop-img1.png" alt="" /></figure>
                                    <figure><img src="./images/shop-img2.png" alt="" /></figure>
                                </div>
                                <p>小自在工藝空間一個老文青的收藏基地。30年來收了許多有趣、好玩、有意思的藝術品。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。這10年來日本茶掛、茶道具、紫砂壺、民清具輪珠收藏！歡迎預約欣賞、同好交流！我們在意細節與內容呈現，每一次的執行都由理性與感性交織而成。</p>
                            </article>
                        </section>
                        { /* 現有課程 */}
                        <section id="lesson-shop">
                            <figure className="title-shop"><img src="./images/lesson.svg" alt="" /></figure>
                            <div className="class-row">
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-01.png" alt="" />
                                            <img className="tagHotorNew" src="./images/labels-hot.png" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 3800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-02.jpg" alt="" />
                                            <img className="tagHotorNew" src="./images/labels-new.png" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 3800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                            </div>
                            <div className="class-row">
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-03.jpg" alt="" />
                                            <img className="tagHotorNew" src="./images/labels-hot.png" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 4300</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-04.jpg" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">4hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 1800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                            </div>
                            <div className="class-row">
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-05.jpg" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">3hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 4300</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                                <div className="classCard">
                                    <a href="#">
                                        <figure className="classPhoto">
                                            <img className="Photo" src="./images/classphoto-06.jpg" alt="" />
                                        </figure>
                                        <div className="classTag">
                                            <p className="classLevel">入門</p>
                                            <p className="classTime">4hr</p>
                                        </div>
                                        <div className="classTitle">
                                            <h3>創造專屬你們的對戒！『草樹工作坊』銀戒雙人體驗課 </h3>
                                            <span></span>
                                        </div>
                                        <div className="classPrice">
                                            <p className="classStoreName">草樹工作坊</p>
                                            <p className="classPrice">$ 1800</p>
                                        </div>
                                    </a>
                                    <figure className="icons-heart"><img src="./images/icons-heart.png" alt="" /></figure>
                                </div>
                            </div>
                            <button className="see-btn"><img className='ball-shop' src="./images/Vector-circle-b.png" alt="" /> <span>See More</span><img className='arr-shop' src="./images/shop-arr.svg" alt="" /></button>
                        </section>
                        { /* 心得分享 */}
                        <section id="share">
                            <figure className="title-shop"><img src="/images/share.svg" alt="" /></figure>
                            <div id="share-img">
                                <figure className='share-card'><img src="./images/share-1.png" alt="" /></figure>
                                <figure className='share-card'><img src="./images/share-2.png" alt="" /></figure>
                                <figure className='share-card'><img src="./images/share-3.png" alt="" /></figure>
                            </div>
                            <div className="share-btn">
                            <Seemore text={'See All'} imgBall={"./images/Vector-circle-b.png"} href={"https://www.google.com/webhp?hl=zh-TW&sa=X&ved=0ahUKEwjj157UwJnmAhVkL6YKHdSeA5IQPAgH"} />
                            </div>
                            
                        </section>
                        <figure id="blob-1"><img src="./images/Vector-1.png" alt="" /></figure>
                        <figure id="blob-2"><img src="./images/Vector-2.png" alt="" /></figure>
                        <figure id="blob-3"><img src="./images/Vector-3.png" alt="" /></figure>
                        <figure id="blob-4"><img src="./images/Vector-4.png" alt="" /></figure>
                        <figure id="blob-5"><img src="./images/Vector-5.png" alt="" /></figure>
                        <figure id="blob-6"><img src="./images/Vector-6.png" alt="" /></figure>

                    </div>
                    { /* 店家內容 */}



                    { /* footer */}
                    <footer>
                        <div className="footer-bgDeco">
                            <img src="./images/footer-deco.png" alt="" />
                        </div>
                        <div className="foot-content">
                            <img src="./images/footer-logo.svg" alt="" />
                            { /* 選單 */}
                            <ul className="menu">
                                <li><a href="">首頁</a></li>
                                <li>
                                    <a href="">發掘店家</a>
                                    <ul>
                                        <li><a href="">金工</a></li>
                                        <li><a href="">陶藝</a></li>
                                        <li><a href="">皮革</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">預約課程</a>
                                    <ul>
                                        <li><a href="">熱門課程</a></li>
                                        <li><a href="">最新課程</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">商城</a>
                                    <ul>
                                        <li><a href="">商城</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="">會員中心</a>
                                    <ul>
                                        <li><a href="">會員資料</a></li>
                                        <li><a href="">預約紀錄</a></li>
                                        <li><a href="">收藏紀錄</a></li>
                                        <li><a href="">我的分享</a></li>
                                    </ul>
                                </li>


                                <li>
                                    <a href="">常見問題</a>
                                    <ul>
                                        <li><a href="">會員相關</a></li>
                                        <li><a href="">預約相關</a></li>
                                        <li><a href="">課程相關</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <small> Copyright© 2024 CRAFTOPIA All rights reserved. </small>

                    </footer>
                </main>
            </div>
        </>
    )
}