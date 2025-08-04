import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Pesaro-Urbino",
    canonical: links.autospurgo["pesaro-urbino"],
});
export default withBaseProps({ 
    title: "Autospurgo Pesaro-Urbino", 
    locationNames: {label: "Pesaro-Urbino", href: "pesaro-urbino"}  
});
