import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Latina",
  canonical: links.servizi["spurgo-pozzi-neri"]["latina"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Latina", 
    locationNames: {label: "Latina", href: "latina"}  
});