import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Napoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["napoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Napoli", 
    locationNames: {label: "Napoli", href: "napoli"}  
});