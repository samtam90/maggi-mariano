import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Rignano sull'Arno" });
export default withBaseProps({ 
    title: "Pulizia fognature Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"}  
});
