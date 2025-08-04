import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Asti",
  canonical: links.servizi["pulizia-fognature"]["asti"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});
