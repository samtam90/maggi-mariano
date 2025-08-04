import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Paciano",
    canonical: links.autospurgo["paciano"],
});
export default withBaseProps({ 
    title: "Autospurgo Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});
