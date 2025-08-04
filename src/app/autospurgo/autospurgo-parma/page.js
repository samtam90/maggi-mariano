import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Parma",
    canonical: links.autospurgo["parma"],
});
export default withBaseProps({ 
    title: "Autospurgo Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});
