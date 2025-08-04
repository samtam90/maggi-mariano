import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Bolzano",
    canonical: links.autospurgo["bolzano"],
});
export default withBaseProps({ 
    title: "Autospurgo Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});
