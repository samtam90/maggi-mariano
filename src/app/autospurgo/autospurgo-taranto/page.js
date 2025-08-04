import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Taranto",
    canonical: links.autospurgo["taranto"],
});
export default withBaseProps({ 
    title: "Autospurgo Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});
