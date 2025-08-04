import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo [name]",
    canonical: links.autospurgo["[path]"],
});
export default withBaseProps({ 
    title: "Autospurgo [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});
