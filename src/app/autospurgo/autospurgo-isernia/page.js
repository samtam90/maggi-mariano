import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Isernia",
    canonical: links.autospurgo["isernia"],
});
export default withBaseProps({ 
    title: "Autospurgo Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});
