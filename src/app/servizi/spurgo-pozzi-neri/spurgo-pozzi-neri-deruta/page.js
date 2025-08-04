import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Deruta",
  canonical: links.servizi["spurgo-pozzi-neri"]["deruta"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Deruta", 
    locationNames: {label: "Deruta", href: "deruta"}  
});