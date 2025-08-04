import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Lecco",
    canonical: links.autospurgo["lecco"],
});
export default withBaseProps({ 
    title: "Autospurgo Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});
