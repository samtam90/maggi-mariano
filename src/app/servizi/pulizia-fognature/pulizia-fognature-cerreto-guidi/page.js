import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Cerreto Guidi" });
export default withBaseProps({ 
    title: "Pulizia fognature Cerreto Guidi", 
    locationNames: {label: "Cerreto Guidi", href: "cerreto-guidi"}  
});
