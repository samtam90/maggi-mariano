import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Sant'Anatolia di Narco" });
export default withBaseProps({ 
    title: "Pulizia fognature Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});
