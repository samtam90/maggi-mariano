import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Valtopina",
  canonical: links.servizi["spurgo-pozzi-neri"]["valtopina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Valtopina", 
    locationNames: {label: "Valtopina", href: "valtopina"}  
});