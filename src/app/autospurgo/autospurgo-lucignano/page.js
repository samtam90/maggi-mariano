import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Lucignano" });
export default withBaseProps({ 
    title: "Autospurgo Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});
