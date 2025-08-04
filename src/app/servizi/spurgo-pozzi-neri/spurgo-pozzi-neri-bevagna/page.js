import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Bevagna",
  canonical: links.servizi["spurgo-pozzi-neri"]["bevagna"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Bevagna", 
    locationNames: {label: "Bevagna", href: "bevagna"}  
});