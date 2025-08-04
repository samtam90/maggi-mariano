import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Piegaro" });
export default withBaseProps({ 
    title: "Autospurgo Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});
