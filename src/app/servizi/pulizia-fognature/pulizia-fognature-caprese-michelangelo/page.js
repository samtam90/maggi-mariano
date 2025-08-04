import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Caprese Michelangelo",
  canonical: links.servizi["pulizia-fognature"]["caprese-michelangelo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Caprese Michelangelo", 
    locationNames: {label: "Caprese Michelangelo", href: "caprese-michelangelo"}  
});
