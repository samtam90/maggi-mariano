import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Catania",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Catania", 
    locationNames: {label: "Catania", href: "catania"}  
});