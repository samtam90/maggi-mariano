import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Caltanissetta" });
export default withBaseProps({ 
    title: "Autospurgo Caltanissetta", 
    locationNames: {label: "Caltanissetta", href: "caltanissetta"}  
});
