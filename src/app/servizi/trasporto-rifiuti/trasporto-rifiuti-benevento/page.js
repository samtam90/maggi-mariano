import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Benevento",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Benevento", 
    locationNames: {label: "Benevento", href: "benevento"}  
});