import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Subbiano",
  canonical: links.servizi["spurgo-pozzi-neri"]["subbiano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Subbiano", 
    locationNames: {label: "Subbiano", href: "subbiano"}  
});