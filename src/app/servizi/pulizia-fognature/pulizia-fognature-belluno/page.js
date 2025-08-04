import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Belluno" });
export default withBaseProps({ 
    title: "Pulizia fognature Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});
