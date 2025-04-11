import { useNavigate } from "react-router-dom";
import Header from "../buy/functions/Header";
import AccForCarFilter from '../Image/AccForCar/Filter.jpg';
import AccForCarWiper from '../Image/AccForCar/Wiper.jpeg';
import ProductCatalog from '../buy/functions/PricingCard';
import AccForCarUrea from '../Image/AccForCar/Urea.jpg';
import AccForCarWasher from '../Image/AccForCar/Washer.jpg';
import AccForCarFireExit from '../Image/AccForCar/FireExit.jpg';
import AccForCarSafetyBar from '../Image/AccForCar/SafetyBar.jpg';
import AccForCarSemaphore from '../Image/AccForCar/Semaphore.jpg';





function AccForCar() {
    const navigate = useNavigate();
    const productData = [
        {id: 1, name: '에어컨 필터', category: '차량 악세서리', image: AccForCarFilter, features: ['차량 내부로 유입되는 오염물질을 필터링', '차량 내부 공기 깔끔하게 유지, 악취 방지'], price: '8,000', buttonText: '구매'},
        {id: 2, name: '차량용 와이퍼', category: '차량 악세서리', image: AccForCarWiper, features: ['전면 유리창의 빗물이나 눈을 닦아냅니다', '기능2'], price: '7,000', buttonText: '구매'},
        {id: 3, name: '워셔액', category: '차량 악세서리', image: AccForCarWasher, features: ['기능1', '기능2'], price: '2만', buttonText:
        '구매'},
        {id: 4, name: '요소수', category: '차량 악세서리', image: AccForCarUrea, features: ['기능1', '기능2'], price: '2만', buttonText:
        '구매'},
        {id: 5, name: '차량용 소화기', category: '차량 악세서리', image: AccForCarFireExit, features: ['기능1', '기능2'], price: '2만', buttonText:
        '구매'},
        {id: 6, name: '안전 삼각대', category: '차량 악세서리', image: AccForCarSafetyBar, features: ['기능1', '기능2'], price: '2만', buttonText: '구매'},
        {id: 7, name: '불꽃 안전 신호기', category: '차량 악세서리', image: AccForCarSemaphore, features: ['기능1', '기능2'], price: '2만', buttonText: '구매'}

        




        

    ];
    return (
<>
        <div>{Header()}</div>
        <div>
            <ProductCatalog pageType="차량 악세서리" showFilter={false} products={productData} />
        </div>
        </>
    );

}

export default AccForCar;