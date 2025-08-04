import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ascoli Piceno",
  canonical: links.servizi["spurgo-pozzi-neri"]["ascoli-piceno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});