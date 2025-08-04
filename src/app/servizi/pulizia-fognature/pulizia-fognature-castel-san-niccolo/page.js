import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel San Niccolò",
  canonical: links.servizi["pulizia-fognature"]["castel-san-niccolo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});
