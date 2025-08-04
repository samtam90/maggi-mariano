import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cesa in valdichiana",
  canonical: links.servizi["spurgo-pozzi-neri"]["cesa-in-valdichiana"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cesa in valdichiana", 
    locationNames: {label: "Cesa in valdichiana", href: "cesa-in-valdichiana"}  
});