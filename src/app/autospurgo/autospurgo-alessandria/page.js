import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Alessandria",
    canonical: links.autospurgo["alessandria"],
});
export default withBaseProps({ 
    title: "Autospurgo Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});
