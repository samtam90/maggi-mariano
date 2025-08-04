import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Como",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Como", 
    locationNames: {label: "Como", href: "como"}  
});