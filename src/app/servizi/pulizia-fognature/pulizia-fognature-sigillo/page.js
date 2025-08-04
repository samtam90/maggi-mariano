import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Sigillo" });
export default withBaseProps({ 
    title: "Pulizia fognature Sigillo", 
    locationNames: {label: "Sigillo", href: "sigillo"}  
});
