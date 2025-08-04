import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Verona" });
export default withBaseProps({ 
    title: "Pulizia fognature Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});
