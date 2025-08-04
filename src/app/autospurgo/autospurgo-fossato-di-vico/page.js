import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Fossato di Vico",
    canonical: links.autospurgo["fossato-di-vico"],
});
export default withBaseProps({ 
    title: "Autospurgo Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});
