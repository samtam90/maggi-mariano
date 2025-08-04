import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Figline Valdarno",
    canonical: links.autospurgo["figline-valdarno"],
});
export default withBaseProps({ 
    title: "Autospurgo Figline Valdarno", 
    locationNames: {label: "Figline Valdarno", href: "figline-valdarno"}  
});
