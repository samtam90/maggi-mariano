import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gubbio",
  canonical: links.servizi["spurgo-pozzi-neri"]["gubbio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gubbio", 
    locationNames: {label: "Gubbio", href: "gubbio"}  
});