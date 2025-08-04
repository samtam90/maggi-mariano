import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Ascoli Piceno",
  canonical: links.servizi["pulizia-fognature"]["ascoli-piceno"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});
