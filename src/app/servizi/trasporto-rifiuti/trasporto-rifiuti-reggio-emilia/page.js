import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Reggio Emilia",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});