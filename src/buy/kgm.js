import DropDown from "./functions/DropDown";
import Header from "./functions/Header";
import PricingCard from "./functions/PricingCard";
import ProductCatalog from "./functions/PricingCard";
function Kgm() {
    return (
        <div className="flex flex-col w-full">

            {Header()}

            {DropDown()}

            <div className="flex">
                <ProductCatalog pageType="자동차" showFilter={false} />
            </div>

           
        </div>
    );
}
export default Kgm;