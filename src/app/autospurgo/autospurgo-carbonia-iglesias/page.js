import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Carbonia Iglesias",
    canonical: links.autospurgo["carbonia-iglesias"],
});
export default withBaseProps({ 
    title: "Autospurgo Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});
