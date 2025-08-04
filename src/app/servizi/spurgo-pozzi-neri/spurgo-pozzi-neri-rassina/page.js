import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rassina",
  canonical: links.servizi["spurgo-pozzi-neri"]["rassina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rassina", 
    locationNames: {label: "Rassina", href: "rassina"}  
});