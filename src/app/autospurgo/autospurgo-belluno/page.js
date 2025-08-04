import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Belluno",
    canonical: links.autospurgo["belluno"],
});
export default withBaseProps({ 
    title: "Autospurgo Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});
