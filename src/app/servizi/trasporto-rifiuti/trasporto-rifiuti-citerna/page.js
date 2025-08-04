import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Citerna",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Citerna", 
    locationNames: {label: "Citerna", href: "citerna"}  
});