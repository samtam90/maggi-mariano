import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Imperia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Imperia", 
    locationNames: {label: "Imperia", href: "imperia"}  
});