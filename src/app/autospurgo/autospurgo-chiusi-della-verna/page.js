import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Chiusi della Verna",
    canonical: links.autospurgo["chiusi-della-verna"],
});
export default withBaseProps({ 
    title: "Autospurgo Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"}  
});
