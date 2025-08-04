import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri [name]",
  canonical: links.servizi["spurgo-pozzi-neri"]["[path]"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri [name]", 
    locationNames: {label: "[name]", href: "[path]"}  
});