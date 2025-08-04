import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Anghiari",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});