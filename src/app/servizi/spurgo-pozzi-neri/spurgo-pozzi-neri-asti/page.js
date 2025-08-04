import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Asti",
  canonical: links.servizi["spurgo-pozzi-neri"]["asti"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});