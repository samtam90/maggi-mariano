import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Certaldo",
  canonical: links.servizi["spurgo-pozzi-neri"]["certaldo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Certaldo", 
    locationNames: {label: "Certaldo", href: "certaldo"}  
});