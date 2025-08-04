import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trento",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trento", 
    locationNames: {label: "Trento", href: "trento"}  
});