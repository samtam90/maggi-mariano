import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Alessandria",
  canonical: links.servizi["spurgo-pozzi-neri"]["alessandria"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Alessandria", 
    locationNames: {label: "Alessandria", href: "alessandria"}  
});