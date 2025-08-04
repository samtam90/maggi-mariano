import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Monte San Savino",
  canonical: links.servizi["pulizia-fognature"]["monte-san-savino"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Monte San Savino", 
    locationNames: {label: "Monte San Savino", href: "monte-san-savino"}  
});
