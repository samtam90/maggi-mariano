import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Verbano-Cusio-Ossola",
    canonical: links.autospurgo["verbano-cusio-ossola"],
});
export default withBaseProps({ 
    title: "Autospurgo Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});
