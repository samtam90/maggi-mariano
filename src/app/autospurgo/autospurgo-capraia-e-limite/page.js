import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Autospurgo Capraia e Limite" });
export default withBaseProps({ 
    title: "Autospurgo Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});
