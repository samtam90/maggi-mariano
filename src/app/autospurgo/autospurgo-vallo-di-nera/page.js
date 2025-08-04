import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vallo di Nera",
    canonical: links.autospurgo["vallo-di-nera"],
});
export default withBaseProps({ 
    title: "Autospurgo Vallo di Nera", 
    locationNames: {label: "Vallo di Nera", href: "vallo-di-nera"}  
});
