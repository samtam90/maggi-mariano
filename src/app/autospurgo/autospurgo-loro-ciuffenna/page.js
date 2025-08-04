import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Loro ciuffenna",
    canonical: links.autospurgo["loro-ciuffenna"],
});
export default withBaseProps({ 
    title: "Autospurgo Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});
