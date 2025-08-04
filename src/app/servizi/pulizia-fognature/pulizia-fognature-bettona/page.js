import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Bettona" });
export default withBaseProps({ 
    title: "Pulizia fognature Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});
