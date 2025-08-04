import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Olbia-Tempio",
  canonical: links.servizi["trasporto-rifiuti"]["olbia-tempio"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});