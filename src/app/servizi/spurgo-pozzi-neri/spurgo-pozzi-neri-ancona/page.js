import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ancona",
  canonical: links.servizi["spurgo-pozzi-neri"]["ancona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ancona", 
    locationNames: {label: "Ancona", href: "ancona"}  
});