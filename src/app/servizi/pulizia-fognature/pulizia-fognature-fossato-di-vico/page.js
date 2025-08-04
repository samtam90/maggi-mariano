import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Fossato di Vico" });
export default withBaseProps({ 
    title: "Pulizia fognature Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});
