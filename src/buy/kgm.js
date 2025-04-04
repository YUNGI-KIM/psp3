import DropDown from "./functions/DropDown";
import Header from "./functions/Header";
import PricingCard from "./functions/PricingCard";
function Kgm() {
    return (
        <div className="flex flex-col w-full">

            {Header()}

            {DropDown()}

            <div className="flex">
            {PricingCard()}           
            {PricingCard()}           
            </div>
            <div className="flex">
            {PricingCard()}           
            {PricingCard()}           
            </div>
            <div className="flex">
            {PricingCard()}           
            {PricingCard()}           
            </div>
           
        </div>
    );
}
export default Kgm;