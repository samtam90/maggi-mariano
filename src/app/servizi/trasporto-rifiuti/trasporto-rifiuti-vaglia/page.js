import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Vaglia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Vaglia", 
    locationNames: {label: "Vaglia", href: "vaglia"}  
});