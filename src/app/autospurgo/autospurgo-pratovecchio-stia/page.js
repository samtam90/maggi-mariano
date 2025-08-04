import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pratovecchio Stia" });
export default withBaseProps({ 
    title: "Autospurgo Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});
