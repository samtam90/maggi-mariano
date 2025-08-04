import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Capraia e Limite" });
export default withBaseProps({ 
    title: "Pulizia fognature Capraia e Limite", 
    locationNames: {label: "Capraia e Limite", href: "capraia-e-limite"}  
});
