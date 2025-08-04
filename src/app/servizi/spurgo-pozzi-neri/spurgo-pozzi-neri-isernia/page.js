import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Isernia",
  canonical: links.servizi["spurgo-pozzi-neri"]["isernia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Isernia", 
    locationNames: {label: "Isernia", href: "isernia"}  
});