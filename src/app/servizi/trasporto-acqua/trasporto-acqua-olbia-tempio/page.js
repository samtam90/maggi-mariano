import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Olbia-Tempio",
  canonical: links.servizi["trasporto-acqua"]["olbia-tempio"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});