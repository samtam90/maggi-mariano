import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Umbertide",
  canonical: links.servizi["spurgo-pozzi-neri"]["umbertide"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Umbertide", 
    locationNames: {label: "Umbertide", href: "umbertide"}  
});