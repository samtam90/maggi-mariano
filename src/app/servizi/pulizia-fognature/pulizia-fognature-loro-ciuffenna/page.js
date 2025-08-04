import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Loro ciuffenna" });
export default withBaseProps({ 
    title: "Pulizia fognature Loro ciuffenna", 
    locationNames: {label: "Loro ciuffenna", href: "loro-ciuffenna"}  
});
