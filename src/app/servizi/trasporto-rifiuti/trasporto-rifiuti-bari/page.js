import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Bari",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Bari", 
    locationNames: {label: "Bari", href: "bari"}  
});