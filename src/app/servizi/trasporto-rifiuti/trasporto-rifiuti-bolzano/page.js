import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bolzano",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bolzano", 
    locationNames: {label: "Bolzano", href: "bolzano"}  
});