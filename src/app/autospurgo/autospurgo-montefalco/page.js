import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montefalco",
    canonical: links.autospurgo["montefalco"],
});
export default withBaseProps({ 
    title: "Autospurgo Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
