import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Campi Bisenzio" });
export default withBaseProps({ 
    title: "Autospurgo Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});
