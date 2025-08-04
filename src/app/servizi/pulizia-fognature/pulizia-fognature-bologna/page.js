import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Bologna",
  canonical: links.servizi["pulizia-fognature"]["bologna"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Bologna", 
    locationNames: {label: "Bologna", href: "bologna"}  
});
