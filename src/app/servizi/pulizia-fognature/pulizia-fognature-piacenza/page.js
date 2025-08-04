import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Piacenza" });
export default withBaseProps({ 
    title: "Pulizia fognature Piacenza", 
    locationNames: {label: "Piacenza", href: "piacenza"}  
});
