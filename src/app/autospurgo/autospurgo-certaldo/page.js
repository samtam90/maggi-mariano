import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Certaldo" });
export default withBaseProps({ 
    title: "Autospurgo Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
