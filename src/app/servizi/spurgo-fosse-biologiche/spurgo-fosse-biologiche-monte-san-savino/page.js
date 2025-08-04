import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monte San Savino",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});
