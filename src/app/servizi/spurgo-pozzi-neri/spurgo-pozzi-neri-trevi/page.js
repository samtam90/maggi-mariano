import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Trevi",
  canonical: links.servizi["spurgo-pozzi-neri"]["trevi"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Trevi", 
    locationNames: {label: "Trevi", href: "trevi"}  
});