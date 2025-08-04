import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Caserta",
  canonical: links.servizi["spurgo-fosse-biologiche"]["caserta"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});
