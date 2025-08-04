import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Certaldo",
    canonical: links.autospurgo["certaldo"],
});
export default withBaseProps({ 
    title: "Autospurgo Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});
