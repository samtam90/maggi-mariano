import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Potenza" });
export default withBaseProps({ 
    title: "Autospurgo Potenza", 
    locationNames: {label: "Potenza", href: "potenza"}  
});
