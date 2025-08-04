import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Empoli" });
export default withBaseProps({ 
    title: "Autospurgo Empoli", 
    locationNames: {label: "Empoli", href: "empoli"}  
});
