import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Olbia-Tempio",
  canonical: links.servizi["spurgo-fosse-biologiche"]["olbia-tempio"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Olbia-Tempio", 
    locationNames: {label: "Olbia-Tempio", href: "olbia-tempio"}  
});
