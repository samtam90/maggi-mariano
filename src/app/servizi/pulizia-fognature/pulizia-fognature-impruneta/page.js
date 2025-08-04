import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Impruneta" });
export default withBaseProps({ 
    title: "Pulizia fognature Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});
