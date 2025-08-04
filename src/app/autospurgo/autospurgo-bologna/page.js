import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bologna",
    canonical: links.autospurgo["bologna"],
});
export default withBaseProps({ 
    title: "Autospurgo Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});
