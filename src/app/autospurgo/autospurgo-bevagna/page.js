import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bevagna",
    canonical: links.autospurgo["bevagna"],
});
export default withBaseProps({ 
    title: "Autospurgo Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});
