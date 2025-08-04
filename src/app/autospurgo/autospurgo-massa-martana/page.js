import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Massa Martana" });
export default withBaseProps({ 
    title: "Autospurgo Massa Martana", 
    locationNames: {label: "Massa Martana", href: "massa-martana"}  
});
