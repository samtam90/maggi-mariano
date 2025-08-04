import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Calenzano" });
export default withBaseProps({ 
    title: "Autospurgo Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
