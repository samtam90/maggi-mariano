import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ragusa",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ragusa", 
    locationNames: {label: "Ragusa", href: "ragusa"}  
});