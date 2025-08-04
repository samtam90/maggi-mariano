import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Monte San Savino",
  canonical: links.servizi["spurgo-pozzi-neri"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});