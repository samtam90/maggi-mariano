import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montevarchi",
  canonical: links.servizi["spurgo-pozzi-neri"]["montevarchi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montevarchi", 
    locationNames: {label: "Montevarchi", href: "montevarchi"}  
});