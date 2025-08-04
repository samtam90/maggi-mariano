import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Badia Tedalda",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Badia Tedalda", 
    locationNames: {label: "Badia Tedalda", href: "badia-tedalda"}  
});