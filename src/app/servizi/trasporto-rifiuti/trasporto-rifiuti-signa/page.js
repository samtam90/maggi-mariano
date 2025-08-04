import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Signa",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Signa", 
    locationNames: {label: "Signa", href: "signa"}  
});