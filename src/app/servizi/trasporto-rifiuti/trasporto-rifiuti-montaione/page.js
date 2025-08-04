import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Montaione",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Montaione", 
    locationNames: {label: "Montaione", href: "montaione"}  
});