import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Reggio Emilia" });
export default withBaseProps({ 
    title: "Pulizia fognature Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});
