import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bettona",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bettona", 
    locationNames: {label: "Bettona", href: "bettona"}  
});