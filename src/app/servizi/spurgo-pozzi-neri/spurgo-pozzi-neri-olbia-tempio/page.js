import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Olbia-Tempio",
  canonical: links.servizi["spurgo-pozzi-neri"]["olbia-tempio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});