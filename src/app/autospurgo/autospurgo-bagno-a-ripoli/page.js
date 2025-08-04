import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bagno a Ripoli",
    canonical: links.autospurgo["bagno-a-ripoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});
