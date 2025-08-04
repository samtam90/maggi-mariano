import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Cerreto Guidi" });
export default withBaseProps({ 
    title: "Autospurgo Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});
