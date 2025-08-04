import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Medio Campidano" });
export default withBaseProps({ 
    title: "Autospurgo Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
