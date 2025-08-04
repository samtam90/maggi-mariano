import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bologna",
  canonical: links.servizi["spurgo-pozzi-neri"]["bologna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});