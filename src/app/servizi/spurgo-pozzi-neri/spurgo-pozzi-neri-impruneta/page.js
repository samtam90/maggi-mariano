import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Impruneta",
  canonical: links.servizi["spurgo-pozzi-neri"]["impruneta"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Impruneta", 
    locationNames: {label: "Impruneta", href: "impruneta"}  
});