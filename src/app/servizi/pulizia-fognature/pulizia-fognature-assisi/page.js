import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Assisi" });
export default withBaseProps({ 
    title: "Pulizia fognature Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});
