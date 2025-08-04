import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Imperia" });
export default withBaseProps({ 
    title: "Pulizia fognature Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});
