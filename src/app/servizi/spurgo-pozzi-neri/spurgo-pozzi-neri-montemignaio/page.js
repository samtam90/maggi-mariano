import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montemignaio",
  canonical: links.servizi["spurgo-pozzi-neri"]["montemignaio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"}  
});