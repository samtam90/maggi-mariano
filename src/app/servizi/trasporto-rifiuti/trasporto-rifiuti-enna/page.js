import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Enna",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Enna", 
    locationNames: {label: "Enna", href: "enna"}  
});