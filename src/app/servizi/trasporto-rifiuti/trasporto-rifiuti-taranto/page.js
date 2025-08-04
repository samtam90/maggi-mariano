import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Taranto",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});