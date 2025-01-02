
import { useEffect, useState } from 'react';
import '../scss/MapMain.scss';
import MapSelect from '../component/MapSelect';
import MyGmap from '../component/MyGmap';
import markersData from '../component/markersData';
import Hearttoggle from '../component/Hearttoggle';
import ToTop from '../component/ToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'csshake/dist/csshake.min.css';
import TopbarB from '../component/TopbarB';
import { Link } from 'react-router-dom';




function MapMain() {

  // 管理課程搜尋篩選條件
  const [filteredStore, setFilteredStore] = useState(markersData); //初始狀態未篩選顯示所有課程
  
  // 管理搜尋輸入匡輸入的店名
  const [searchTerm, setSearchTerm] = useState(""); 


  /* 搜尋處理條件設定 */
  const handleSearch = (filters) => {

    const { location, type } = filters;
    const filtered = markersData.filter((store) => {

      const matchesLocation = location ? store.location === location : true;
      const matchesType = type ? store.type === type : true;

      // 新增根據店名的條件
      const matchesName = !searchTerm || store.storeName.includes(searchTerm);

      return matchesLocation && matchesType && matchesName;

    });

    setFilteredStore(filtered);
  };


  /* AOS 初始化 */
  useEffect(() => {

    AOS.init(); // 初始化

  }, [])



  /* totop 位置設定 */
  const initialStyle = {
    position: "fixed",
    bottom: "20px",
    right: "10px",
  };



  return (
    <>

      <TopbarB/>

      <main id="MapPage">



        <section className="map">
          <MyGmap filteredStore={filteredStore} />

          <MapSelect handleSearch={handleSearch} searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} />


        </section>


        <section className="searchWorkShop">


          <figure data-aos="fade-up" data-aos-offset="40" className="listTitle">
            <img src="./images/title-discoverWorkShop.svg" alt="" />

          </figure>

          {filteredStore.length > 0 ? (
            <>
              <div className="storeList">

                {
                  filteredStore.map((store) => (
                    <div data-aos="fade-zoom-in" key={store.id} className="storeCard">

                      <figure className="storePhoto">

                        <Link to='/shop'>
                          <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                          <img className="photo" src={`./images/store/${store.image}`} alt="" />

                        </Link>
                      </figure>
                      <div className="storeTag">
                        <p className={`storeType ${store.tag === "pottery" ? "pottery" : ""}`} style={{
                          backgroundImage: `url('./images/tag-${store.tag}.svg')`,
                        }}>{store.type}</p>
                        <p className="storeLocation">{store.location}</p>
                      </div>
                      <div className="storeName">
                        <h3><a href="#">{store.storeName}</a></h3>
                        <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                      </div>
                      <div className="storeDetail">

                        <div >
                          <img src="./images/icons-mapStoreTime.svg" alt="" />
                          <p className="storeTime" >{store.time}</p>


                        </div>
                        <div>
                          <img src="./images/icons-mapWorkshopLocation.svg" alt="" />
                          <p className="storeAddress">{store.address}</p>


                        </div >

                      </div>

                    </div>
                  ))
                }

              </div>


            </>

          ) : (
            <p className="noresult">沒有符合的店家，換個條件試試看吧！</p>
          )}


         {/*  <figure className="decor-clip custom-shake-h  shake-constant">
            <img src="./images/decor-clip.svg" alt="" />
          </figure>

          <figure className="decor-smooth custom-shake-h  shake-constant">
            <img src="./images/decor-smooth.svg" alt="" />
          </figure> */}


        </section>

      </main>

      {/* TO TOp */}
      <ToTop initialStyle={initialStyle} />
      {/* 頁尾區 */}

      <footer>
        <div className="footer-bgDeco">
          <img src="./images/footer-deco.png" alt="" />
        </div>
        <div className="foot-content">
          <img src="./images/footer-logo.svg" alt="" />

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


    </>
  )
}

export default MapMain
