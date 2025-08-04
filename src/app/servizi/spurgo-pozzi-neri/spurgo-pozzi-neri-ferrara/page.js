import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Ferrara",
  canonical: links.servizi["spurgo-pozzi-neri"]["ferrara"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Ferrara", 
    locationNames: {label: "Ferrara", href: "ferrara"}  
});