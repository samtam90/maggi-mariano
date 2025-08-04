import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Lecco",
  canonical: links.servizi["spurgo-pozzi-neri"]["lecco"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});