import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Ascoli Piceno" });
export default withBaseProps({ 
    title: "Pulizia fognature Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});
