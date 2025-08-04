import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Scandicci",
    canonical: links.autospurgo["scandicci"],
});
export default withBaseProps({ 
    title: "Autospurgo Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});
