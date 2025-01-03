import { useEffect, useState } from 'react';
import '../scss/searchLesson.scss';
import SearchSection from '../component/SearchSection';
import Results from '../component/Results';
import ClassList from '../component/ClassList';
import courseData from "../component/courseData";
import 'csshake/dist/csshake.min.css';
import TopbarB from '../component/TopbarB';
import AOS from 'aos';




export default function SearchLesson() {
      useEffect(() => {
          window.scrollTo(0, 0);
          AOS.init();
      }, []);
  // 課程搜尋篩選條件
  const [filteredCourses, setFilteredCourses] = useState(courseData); //初始狀態未篩選顯示所有課程
  const [selectedOption , setSelectedOption] = useState({ location: null, type: null });

  const handleSearch = (filters) => {

    const { location, type, date, adults, children } = filters;
    const filtered = courseData.filter((course) => {
      // 目前篩選條件只有地點與類型，後續可加入日期與人數
      const matchesLocation = location ? course.location === location : true;
      const matchesType = type ? course.type === type : true;

      return matchesLocation && matchesType;

    });

    setFilteredCourses(filtered);
    setSelectedOption(filters);
  };


  // 管理點擊搜尋課程後顯示搜尋結果
  const [resultVisible, setResultVisible] = useState(false);

  // 點擊搜尋按鈕時的行為
  const handleSearchResult = () => {
    setResultVisible(false); // 先隱藏結果
    setTimeout(() => {
      setResultVisible(true); // 再次顯示搜尋結果
    }, 0); // 設置一個短暫延遲 (100ms)
  };

  

  return (
    <>
    <TopbarB/>
      <main id='searchlesson'>


    
        <section id="SearchBanner">
          <h2 className='engTitle'>Discover Your Next Creative Journey !</h2>
          <h2>想去哪裡體驗什麼?</h2>


          <SearchSection handleSearch={handleSearch} handleSearchResult={() => handleSearchResult()} />


          <figure className="left-filled custom-shake-v shake-constant"><img src="./images/decor-searchBanner-leftbubbleFilled.png" alt="" /></figure>
          <figure className="left-stroke custom-shake-h shake-constant"><img src="./images/decor-searchBanner-leftbubbleStroke.png" alt="" /></figure>
          <figure className="left-tool custom-shake-t shake-constant"><img src="./images/decor-searchBanner-LeftTool.png" alt="" /></figure>
          <figure className="right-filled custom-shake-v shake-constant"><img src="./images/decor-searchBanner-rightbubbleFilled.png" alt="" /></figure>
          <figure className="right-stroke custom-shake-h shake-constant"><img src="./images/decor-searchBanner-rightbubbleStroke.png" alt="" /></figure>
          <figure className="right-tool custom-shake-t shake-constant"><img src="./images/decor-searchBanner-RightTool.png" alt="" /></figure>


        </section>
        

        


        <Results filteredCourses={filteredCourses} resultVisible={resultVisible} selectedOption={selectedOption}/>

        <ClassList />



      </main>


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


