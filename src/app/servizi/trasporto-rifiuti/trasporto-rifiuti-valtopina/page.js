import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Valtopina",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});