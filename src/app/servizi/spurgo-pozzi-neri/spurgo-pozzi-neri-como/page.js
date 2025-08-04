import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Como",
  canonical: links.servizi["spurgo-pozzi-neri"]["como"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Como", 
    locationNames: {label: "Como", href: "como"}  
});