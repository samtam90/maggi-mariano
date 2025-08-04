import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Verbano-Cusio-Ossola" });
export default withBaseProps({ 
    title: "Pulizia fognature Verbano-Cusio-Ossola", 
    locationNames: {label: "Verbano-Cusio-Ossola", href: "verbano-cusio-ossola"}  
});
