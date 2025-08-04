import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Montespertoli" });
export default withBaseProps({ 
    title: "Pulizia fognature Montespertoli", 
    locationNames: {label: "Montespertoli", href: "montespertoli"}  
});
