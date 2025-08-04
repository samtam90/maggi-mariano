import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fossato di Vico",
  canonical: links.servizi["spurgo-pozzi-neri"]["fossato-di-vico"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fossato di Vico", 
    locationNames: {label: "Fossato di Vico", href: "fossato-di-vico"}  
});