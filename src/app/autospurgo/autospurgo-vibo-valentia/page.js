import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Vibo Valentia",
    canonical: links.autospurgo["vibo-valentia"],
});
export default withBaseProps({ 
    title: "Autospurgo Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"}  
});
