import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Anghiari" });
export default withBaseProps({ 
    title: "Pulizia fognature Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});
