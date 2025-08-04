import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Cuneo",
  canonical: links.servizi["spurgo-pozzi-neri"]["cuneo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Cuneo", 
    locationNames: {label: "Cuneo", href: "cuneo"}  
});