import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castel San Niccolò",
  canonical: links.servizi["spurgo-pozzi-neri"]["castel-san-niccolo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});