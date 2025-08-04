import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Fiesole",
  canonical: links.servizi["spurgo-pozzi-neri"]["fiesole"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Fiesole", 
    locationNames: {label: "Fiesole", href: "fiesole"}  
});