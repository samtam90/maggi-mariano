import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Pisa",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Pisa", 
    locationNames: {label: "Pisa", href: "pisa"}  
});