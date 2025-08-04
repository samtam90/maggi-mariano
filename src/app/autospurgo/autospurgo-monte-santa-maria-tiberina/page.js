import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Monte Santa Maria Tiberina" });
export default withBaseProps({ 
    title: "Autospurgo Monte Santa Maria Tiberina", 
    locationNames: {label: "Monte Santa Maria Tiberina", href: "monte-santa-maria-tiberina"}  
});
