import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Piegaro",
  canonical: links.servizi["spurgo-pozzi-neri"]["piegaro"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Piegaro", 
    locationNames: {label: "Piegaro", href: "piegaro"}  
});