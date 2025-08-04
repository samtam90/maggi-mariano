import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Chitignano",
  canonical: links.servizi["spurgo-pozzi-neri"]["chitignano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Chitignano", 
    locationNames: {label: "Chitignano", href: "chitignano"}  
});