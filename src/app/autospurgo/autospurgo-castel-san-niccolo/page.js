import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Castel San Niccolò",
    canonical: links.autospurgo["castel-san-niccolo"],
});
export default withBaseProps({ 
    title: "Autospurgo Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});
