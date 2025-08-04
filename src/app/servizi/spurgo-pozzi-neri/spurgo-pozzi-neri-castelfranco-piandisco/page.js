import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castelfranco Piandiscò",
  canonical: links.servizi["spurgo-pozzi-neri"]["castelfranco-piandisco"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});