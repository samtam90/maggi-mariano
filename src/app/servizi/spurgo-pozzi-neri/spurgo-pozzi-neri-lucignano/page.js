import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lucignano",
  canonical: links.servizi["spurgo-pozzi-neri"]["lucignano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lucignano", 
    locationNames: {label: "Lucignano", href: "lucignano"}  
});