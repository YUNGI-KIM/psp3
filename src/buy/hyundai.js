import DropDown from "../functions/DropDown";
import Header from "../functions/Header";
import ProductCatalog from "../functions/PricingCard";
function Hyundai() {
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
export default Hyundai;