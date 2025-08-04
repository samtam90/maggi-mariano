import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Spoleto" });
export default withBaseProps({ 
    title: "Autospurgo Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});
