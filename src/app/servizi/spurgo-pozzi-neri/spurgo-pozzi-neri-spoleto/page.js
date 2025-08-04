import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Spoleto",
  canonical: links.servizi["spurgo-pozzi-neri"]["spoleto"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Spoleto", 
    locationNames: {label: "Spoleto", href: "spoleto"}  
});