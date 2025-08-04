import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Milano",
    canonical: links.autospurgo["milano"],
});
export default withBaseProps({ 
    title: "Autospurgo Milano", 
    locationNames: {label: "Milano", href: "milano"}  
});
