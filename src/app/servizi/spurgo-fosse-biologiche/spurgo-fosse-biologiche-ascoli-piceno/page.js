import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Ascoli Piceno",
  canonical: links.servizi["spurgo-fosse-biologiche"]["ascoli-piceno"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Ascoli Piceno", 
    locationNames: {label: "Ascoli Piceno", href: "ascoli-piceno"}  
});
