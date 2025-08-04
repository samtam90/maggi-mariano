import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({ title: "Pulizia fognature Vibo Valentia" });
export default withBaseProps({ 
    title: "Pulizia fognature Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"}  
});
