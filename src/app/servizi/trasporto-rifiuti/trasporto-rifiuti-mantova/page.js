import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Mantova",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Mantova", 
    locationNames: {label: "Mantova", href: "mantova"}  
});