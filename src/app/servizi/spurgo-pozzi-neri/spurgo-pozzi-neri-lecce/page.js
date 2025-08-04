import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lecce",
  canonical: links.servizi["spurgo-pozzi-neri"]["lecce"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lecce", 
    locationNames: {label: "Lecce", href: "lecce"}  
});