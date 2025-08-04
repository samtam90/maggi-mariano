import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Verona",
  canonical: links.servizi["spurgo-pozzi-neri"]["verona"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Verona", 
    locationNames: {label: "Verona", href: "verona"}  
});