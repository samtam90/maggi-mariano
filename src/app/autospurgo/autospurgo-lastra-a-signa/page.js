import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Lastra a Signa",
    canonical: links.autospurgo["lastra-a-signa"],
});
export default withBaseProps({ 
    title: "Autospurgo Lastra a Signa", 
    locationNames: {label: "Lastra a Signa", href: "lastra-a-signa"}  
});
