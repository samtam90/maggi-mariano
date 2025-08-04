import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Poppi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Poppi", 
    locationNames: {label: "Poppi", href: "poppi"}  
});