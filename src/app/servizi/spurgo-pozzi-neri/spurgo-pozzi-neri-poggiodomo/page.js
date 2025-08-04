import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Poggiodomo",
  canonical: links.servizi["spurgo-pozzi-neri"]["poggiodomo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Poggiodomo", 
    locationNames: {label: "Poggiodomo", href: "poggiodomo"}  
});