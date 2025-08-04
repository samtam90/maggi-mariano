import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";

export const metadata = getMetadata({ 
    title: "Autospurgo Monte Santa Maria Tiberina",
    canonical: links.autospurgo["monte-santa-maria-tiberina"],
});
export default withBaseProps({ 
    title: "Autospurgo Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});
