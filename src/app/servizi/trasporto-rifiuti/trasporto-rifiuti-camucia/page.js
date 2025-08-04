import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Camucia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Camucia", 
    locationNames: {label: "Camucia", href: "camucia"}  
});