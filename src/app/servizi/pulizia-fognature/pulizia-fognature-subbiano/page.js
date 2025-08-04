import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Subbiano" });
export default withBaseProps({ 
    title: "Pulizia fognature Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});
