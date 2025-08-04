import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Trevi",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});