import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Magione",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Magione", 
    locationNames: {label: "Magione", href: "magione"}  
});