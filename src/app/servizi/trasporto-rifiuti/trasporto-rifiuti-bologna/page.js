import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bologna",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});