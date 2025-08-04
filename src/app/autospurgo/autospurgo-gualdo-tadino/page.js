import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Gualdo Tadino" });
export default withBaseProps({ 
    title: "Autospurgo Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});
