import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Parma" });
export default withBaseProps({ 
    title: "Pulizia fognature Parma", 
    locationNames: {label: "Parma", href: "parma"}  
});
