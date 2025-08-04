import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ravenna",
  canonical: links.servizi["spurgo-pozzi-neri"]["ravenna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ravenna", 
    locationNames: {label: "Ravenna", href: "ravenna"}  
});