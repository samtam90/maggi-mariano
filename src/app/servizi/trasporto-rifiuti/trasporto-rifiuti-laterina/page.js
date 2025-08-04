import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Laterina",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Laterina", 
    locationNames: {label: "Laterina", href: "laterina"}  
});