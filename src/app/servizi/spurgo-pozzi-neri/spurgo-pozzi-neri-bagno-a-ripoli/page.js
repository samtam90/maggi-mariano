import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bagno a Ripoli",
  canonical: links.servizi["spurgo-pozzi-neri"]["bagno-a-ripoli"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bagno a Ripoli", 
    locationNames: {label: "Bagno a Ripoli", href: "bagno-a-ripoli"}  
});