import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Castiglion Fiorentino" });
export default withBaseProps({ 
    title: "Pulizia fognature Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});
