import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Biella",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Biella", 
    locationNames: {label: "Biella", href: "biella"}  
});