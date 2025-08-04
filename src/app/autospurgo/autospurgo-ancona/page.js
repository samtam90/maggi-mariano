import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Ancona",
    canonical: links.autospurgo["ancona"],
});
export default withBaseProps({ 
    title: "Autospurgo Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});
