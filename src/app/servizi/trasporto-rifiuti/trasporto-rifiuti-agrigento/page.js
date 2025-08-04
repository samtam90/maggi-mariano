import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Agrigento",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Agrigento", 
    locationNames: {label: "Agrigento", href: "agrigento"}  
});