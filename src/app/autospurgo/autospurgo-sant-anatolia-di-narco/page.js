import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Sant'Anatolia di Narco" });
export default withBaseProps({ 
    title: "Autospurgo Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});
