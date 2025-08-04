import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Gualdo Tadino",
    canonical: links.autospurgo["gualdo-tadino"],
});
export default withBaseProps({ 
    title: "Autospurgo Gualdo Tadino", 
    locationNames: {label: "Gualdo Tadino", href: "gualdo-tadino"}  
});
