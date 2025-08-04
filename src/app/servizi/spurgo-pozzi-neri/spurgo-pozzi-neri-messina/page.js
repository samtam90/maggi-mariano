import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Messina",
  canonical: links.servizi["spurgo-pozzi-neri"]["messina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Messina", 
    locationNames: {label: "Messina", href: "messina"}  
});