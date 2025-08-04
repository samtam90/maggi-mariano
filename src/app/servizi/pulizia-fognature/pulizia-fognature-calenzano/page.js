import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Calenzano" });
export default withBaseProps({ 
    title: "Pulizia fognature Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});
