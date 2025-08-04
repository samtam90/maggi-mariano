import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Anghiari",
  canonical: links.servizi["spurgo-fosse-biologiche"]["anghiari"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});
