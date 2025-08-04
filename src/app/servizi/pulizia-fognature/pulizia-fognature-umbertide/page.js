import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Umbertide" });
export default withBaseProps({ 
    title: "Pulizia fognature Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});
