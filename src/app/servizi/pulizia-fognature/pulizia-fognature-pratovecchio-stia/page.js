import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Pratovecchio Stia" });
export default withBaseProps({ 
    title: "Pulizia fognature Pratovecchio Stia", 
    locationNames: {label: "Pratovecchio Stia", href: "pratovecchio-stia"}  
});
