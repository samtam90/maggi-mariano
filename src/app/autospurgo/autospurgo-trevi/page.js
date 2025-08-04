import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Trevi" });
export default withBaseProps({ 
    title: "Autospurgo Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});
