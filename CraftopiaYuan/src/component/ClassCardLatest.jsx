import Hearttoggle from "./Hearttoggle";

// 變數名稱大家可以改成寫死的文字或是自己的資料




function ClassCardLatest() {
    const course = [{
        id: 1,
        level: '入門',
        duration: '2',
        courseName: '簡易個性化陶瓷製作體驗課',
        storeName: '小自在工藝空間',
        price: '2299',
        photo:'./images/classphoto-01.png',
    },
    {
        id: 2,
        level: '進階 ',
        duration: '4',
        courseName: '陶藝進階挑戰！打造屬於自己的陶器吧！',
        storeName: '小自在工藝空間',
        price: '1599',
        photo:'./images/classphoto-02.jpg',
    },
    {
        id: 3,
        level: '進階',
        duration: '3',
        courseName: '居家擺飾陶器創作體驗',
        storeName: '小自在工藝空間',
        price: '999',
        photo:'./images/classphoto-03.jpg',
    },
    {
        id: 4,
        level: '入門',
        duration: '1',
        courseName: '個性化陶瓷裝飾花瓶製作課',
        storeName: '小自在工藝空間',
        price: '1888',
        photo:'./images/classphoto-04.jpg',
    },
    {
        id: 5,
        level: '入門',
        duration: '2',
        courseName: '暖心咖啡杯拉胚體驗課   這個冬天就用親手做的咖啡杯！ ',
        storeName: '小自在工藝空間',
        price: '1999',
        photo:'./images/classphoto-05.jpg',
    },
    {
        id: 6,
        level: '進階',
        duration: '4',
        courseName: '讓心意化為陶土的形狀『杯碗設計課程』 ',
        storeName: '小自在工藝空間',
        price: '2499',
        photo:'./images/classphoto-06.jpg',
    }]
    
    return (

        course.map((course) => {
            return (
                <div key={course.id} className="classCard">

                    <figure className="classPhoto">
                        <a href="#">

                            <p>See More <img src="./images/icons-arrowRightBold.svg" alt="" /></p>
                            <img className="photo" src={course.photo} alt="" />

                            <div className="tagHotorNew ">
                                <img src="./images/labels-hot.svg" alt="" />
                                <img src="./images/labels-new.svg" alt="" />
                            </div>
                        </a>
                    </figure>
                    <div className="classTag">
                        <p className="classLevel">{course.level}</p>
                        <p className="classTime">{course.duration}hr</p>
                    </div>
                    <div className="classTitle">
                        <h3><a href="#">{course.courseName}</a></h3>
                        <Hearttoggle heartFillId='heartfill5' heartStrikeId='heartstrike5' />
                    </div>
                    <div className="classPrice">
                        <p className="classStoreName"><a href="#">{course.storeName}</a></p>
                        <p className="price">$ {course.price}</p>
                    </div>
                </div>
            )

        })





    )

}

export default ClassCardLatest