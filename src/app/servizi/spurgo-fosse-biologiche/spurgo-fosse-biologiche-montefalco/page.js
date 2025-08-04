import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Montefalco",
  canonical: links.servizi["spurgo-fosse-biologiche"]["montefalco"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Montefalco", 
    locationNames: {label: "Montefalco", href: "montefalco"}  
});
