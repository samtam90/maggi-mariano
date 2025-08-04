import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Passignano sul Trasimeno" });
export default withBaseProps({ 
    title: "Pulizia fognature Passignano sul Trasimeno", 
    locationNames: {label: "Passignano sul Trasimeno", href: "passignano-sul-trasimeno"}  
});
