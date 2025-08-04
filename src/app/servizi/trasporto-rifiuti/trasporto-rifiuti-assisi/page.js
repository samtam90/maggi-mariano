import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Assisi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Assisi", 
    locationNames: {label: "Assisi", href: "assisi"}  
});