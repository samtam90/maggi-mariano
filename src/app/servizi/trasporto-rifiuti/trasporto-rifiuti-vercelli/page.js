import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vercelli",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vercelli", 
    locationNames: {label: "Vercelli", href: "vercelli"}  
});