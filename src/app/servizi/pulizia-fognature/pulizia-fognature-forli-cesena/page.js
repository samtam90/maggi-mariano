import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Forlì-Cesena" });
export default withBaseProps({ 
    title: "Pulizia fognature Forlì-Cesena", 
    locationNames: {label: "Forlì-Cesena", href: "forli-cesena"}  
});
