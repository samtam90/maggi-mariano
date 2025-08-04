import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Lecce",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});