import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monte Castello di Vibio",
  canonical: links.servizi["spurgo-pozzi-neri"]["monte-castello-di-vibio"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monte Castello di Vibio", 
    locationNames: {label: "Monte Castello di Vibio", href: "monte-castello-di-vibio"}  
});