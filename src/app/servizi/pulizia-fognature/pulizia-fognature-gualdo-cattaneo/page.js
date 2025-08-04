import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Gualdo Cattaneo" });
export default withBaseProps({ 
    title: "Pulizia fognature Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});
