import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Carbonia Iglesias",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Carbonia Iglesias", 
    locationNames: {label: "Carbonia Iglesias", href: "carbonia-iglesias"}  
});