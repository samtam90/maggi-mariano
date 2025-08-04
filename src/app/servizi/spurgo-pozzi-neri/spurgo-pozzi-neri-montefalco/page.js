import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Montefalco",
  canonical: links.servizi["spurgo-pozzi-neri"]["montefalco"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});