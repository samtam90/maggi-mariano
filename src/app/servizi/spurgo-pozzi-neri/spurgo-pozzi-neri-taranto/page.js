import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Taranto",
  canonical: links.servizi["spurgo-pozzi-neri"]["taranto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Taranto", 
    locationNames: {label: "Taranto", href: "taranto"}  
});