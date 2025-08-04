import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Pergine Valdarno" });
export default withBaseProps({ 
    title: "Autospurgo Pergine Valdarno", 
    locationNames: {label: "Pergine Valdarno", href: "pergine-valdarno"}  
});
