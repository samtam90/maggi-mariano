import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Belluno",
  canonical: links.servizi["spurgo-pozzi-neri"]["belluno"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Belluno", 
    locationNames: {label: "Belluno", href: "belluno"}  
});