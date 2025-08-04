import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Fiesole" });
export default withBaseProps({ 
    title: "Pulizia fognature Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});
