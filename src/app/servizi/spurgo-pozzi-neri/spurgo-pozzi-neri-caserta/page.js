import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Caserta",
  canonical: links.servizi["spurgo-pozzi-neri"]["caserta"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});