import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Rignano sull'Arno" });
export default withBaseProps({ 
    title: "Autospurgo Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});
