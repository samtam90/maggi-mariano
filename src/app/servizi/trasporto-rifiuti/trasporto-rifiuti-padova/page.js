import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Padova",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Padova", 
    locationNames: {label: "Padova", href: "padova"}  
});