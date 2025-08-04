import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Piacenza" });
export default withBaseProps({ 
    title: "Autospurgo Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});
