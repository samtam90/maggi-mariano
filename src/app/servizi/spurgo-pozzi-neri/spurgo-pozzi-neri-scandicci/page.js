import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Scandicci",
  canonical: links.servizi["spurgo-pozzi-neri"]["scandicci"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Scandicci", 
    locationNames: {label: "Scandicci", href: "scandicci"}  
});