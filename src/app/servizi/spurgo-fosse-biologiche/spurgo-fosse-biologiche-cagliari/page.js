import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Cagliari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["cagliari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Cagliari", 
    locationNames: {label: "Cagliari", href: "cagliari"}  
});
