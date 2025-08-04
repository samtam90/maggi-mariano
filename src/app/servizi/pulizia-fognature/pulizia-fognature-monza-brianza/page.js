import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Monza Brianza" });
export default withBaseProps({ 
    title: "Pulizia fognature Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
