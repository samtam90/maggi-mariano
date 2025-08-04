import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature L'Aquila" });
export default withBaseProps({ 
    title: "Pulizia fognature L'Aquila", 
    locationNames: {label: "L'Aquila", href: "l-aquila"}  
});
