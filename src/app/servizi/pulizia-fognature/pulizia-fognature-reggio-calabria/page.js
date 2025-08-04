import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Reggio Calabria" });
export default withBaseProps({ 
    title: "Pulizia fognature Reggio Calabria", 
    locationNames: {label: "Reggio Calabria", href: "reggio-calabria"}  
});
