import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bucine",
  canonical: links.servizi["spurgo-pozzi-neri"]["bucine"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bucine", 
    locationNames: {label: "Bucine", href: "bucine"}  
});