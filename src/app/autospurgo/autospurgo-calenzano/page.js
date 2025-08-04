import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Calenzano",
    canonical: links.autospurgo["calenzano"],
});
export default withBaseProps({ 
    title: "Autospurgo Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
