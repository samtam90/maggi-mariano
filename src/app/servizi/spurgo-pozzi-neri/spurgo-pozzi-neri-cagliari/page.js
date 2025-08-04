import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cagliari",
  canonical: links.servizi["spurgo-pozzi-neri"]["cagliari"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});