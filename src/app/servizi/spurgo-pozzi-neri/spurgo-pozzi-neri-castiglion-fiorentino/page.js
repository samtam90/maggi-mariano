import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Castiglion Fiorentino",
  canonical: links.servizi["spurgo-pozzi-neri"]["castiglion-fiorentino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Castiglion Fiorentino", 
    locationNames: {label: "Castiglion Fiorentino", href: "castiglion-fiorentino"}  
});