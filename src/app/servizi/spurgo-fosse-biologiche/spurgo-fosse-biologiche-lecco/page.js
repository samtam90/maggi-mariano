import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Lecco",
  canonical: links.servizi["spurgo-fosse-biologiche"]["lecco"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Lecco", 
    locationNames: {label: "Lecco", href: "lecco"}  
});
