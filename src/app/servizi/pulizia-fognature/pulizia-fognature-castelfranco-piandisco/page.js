import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Castelfranco Piandiscò",
  canonical: links.servizi["pulizia-fognature"]["castelfranco-piandisco"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Castelfranco Piandiscò", 
    locationNames: {label: "Castelfranco Piandiscò", href: "castelfranco-piandisco"}  
});
