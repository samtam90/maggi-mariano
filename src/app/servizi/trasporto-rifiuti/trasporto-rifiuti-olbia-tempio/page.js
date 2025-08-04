import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Olbia-Tempio",
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});