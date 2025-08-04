import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Treviso",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Treviso", 
    locationNames: {label: "Treviso", href: "treviso"}  
});