import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Scheggia e Pascelupo",
    canonical: links.autospurgo["scheggia-e-pascelupo"],
});
export default withBaseProps({ 
    title: "Autospurgo Scheggia e Pascelupo", 
    locationNames: {label: "Scheggia e Pascelupo", href: "scheggia-e-pascelupo"}  
});
