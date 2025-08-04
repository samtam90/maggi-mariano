import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Pistoia",
  canonical: links.servizi["spurgo-pozzi-neri"]["pistoia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Pistoia", 
    locationNames: {label: "Pistoia", href: "pistoia"}  
});