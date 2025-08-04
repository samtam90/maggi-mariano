import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Isernia" });
export default withBaseProps({ 
    title: "Autospurgo Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});
