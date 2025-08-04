import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Rimini",
  canonical: links.servizi["spurgo-pozzi-neri"]["rimini"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Rimini", 
    locationNames: {label: "Rimini", href: "rimini"}  
});