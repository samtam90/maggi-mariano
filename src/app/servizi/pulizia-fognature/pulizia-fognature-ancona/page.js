import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Ancona" });
export default withBaseProps({ 
    title: "Pulizia fognature Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});
