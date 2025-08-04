import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Genova",
  canonical: links.servizi["spurgo-pozzi-neri"]["genova"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Genova", 
    locationNames: {label: "Genova", href: "genova"}  
});