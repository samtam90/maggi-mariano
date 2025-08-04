import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Roma",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Roma", 
    locationNames: {label: "Roma", href: "roma"}  
});