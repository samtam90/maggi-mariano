import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Reggio Emilia",
  canonical: links.servizi["spurgo-pozzi-neri"]["reggio-emilia"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Reggio Emilia", 
    locationNames: {label: "Reggio Emilia", href: "reggio-emilia"}  
});