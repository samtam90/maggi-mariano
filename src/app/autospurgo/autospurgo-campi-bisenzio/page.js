import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Campi Bisenzio",
    canonical: links.autospurgo["campi-bisenzio"],
});
export default withBaseProps({ 
    title: "Autospurgo Campi Bisenzio", 
    locationNames: {label: "Campi Bisenzio", href: "campi-bisenzio"}  
});
