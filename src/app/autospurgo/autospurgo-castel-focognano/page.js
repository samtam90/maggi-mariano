import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel Focognano",
    canonical: links.autospurgo["castel-focognano"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel Focognano", 
    locationNames: {label: "Castel Focognano", href: "castel-focognano"}  
});
