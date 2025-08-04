import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Montespertoli",
    canonical: links.autospurgo["montespertoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});
