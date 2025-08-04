import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Sellano",
  canonical: links.servizi["spurgo-pozzi-neri"]["sellano"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Sellano", 
    locationNames: {label: "Sellano", href: "sellano"}  
});