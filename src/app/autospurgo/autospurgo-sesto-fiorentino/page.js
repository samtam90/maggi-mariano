import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Sesto Fiorentino" });
export default withBaseProps({ 
    title: "Autospurgo Sesto Fiorentino", 
    locationNames: {label: "Sesto Fiorentino", href: "sesto-fiorentino"}  
});
