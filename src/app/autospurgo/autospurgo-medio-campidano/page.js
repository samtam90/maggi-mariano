import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Medio Campidano",
    canonical: links.autospurgo["medio-campidano"],
});
export default withBaseProps({ 
    title: "Autospurgo Medio Campidano", 
    locationNames: {label: "Medio Campidano", href: "medio-campidano"}  
});
