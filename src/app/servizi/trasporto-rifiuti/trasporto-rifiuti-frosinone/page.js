import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Frosinone",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Frosinone", 
    locationNames: {label: "Frosinone", href: "frosinone"}  
});