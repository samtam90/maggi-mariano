import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Calenzano",
  canonical: links.servizi["spurgo-pozzi-neri"]["calenzano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Calenzano", 
    locationNames: {label: "Calenzano", href: "calenzano"}  
});