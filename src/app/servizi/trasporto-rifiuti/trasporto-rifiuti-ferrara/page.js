import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Ferrara",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});