import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Badia Prataglia" });
export default withBaseProps({ 
    title: "Autospurgo Badia Prataglia", 
    locationNames: {label: "Badia Prataglia", href: "badia-prataglia"}  
});
