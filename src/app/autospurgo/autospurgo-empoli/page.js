import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Empoli",
    canonical: links.autospurgo["empoli"],
});
export default withBaseProps({ 
    title: "Autospurgo Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});
