import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Sassari",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Sassari", 
    locationNames: {label: "Sassari", href: "sassari"}  
});