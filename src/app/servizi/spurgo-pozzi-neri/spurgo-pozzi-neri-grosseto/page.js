import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Grosseto",
  canonical: links.servizi["spurgo-pozzi-neri"]["grosseto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Grosseto", 
    locationNames: {label: "Grosseto", href: "grosseto"}  
});