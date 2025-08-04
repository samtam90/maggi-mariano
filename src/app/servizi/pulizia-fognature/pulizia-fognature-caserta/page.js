import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Caserta",
  canonical: links.servizi["pulizia-fognature"]["caserta"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});
