import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Grosseto",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});