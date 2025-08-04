import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Todi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Todi", 
    locationNames: {label: "Todi", href: "todi"}  
});