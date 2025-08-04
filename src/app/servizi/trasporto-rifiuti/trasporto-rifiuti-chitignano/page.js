import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Chitignano",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});