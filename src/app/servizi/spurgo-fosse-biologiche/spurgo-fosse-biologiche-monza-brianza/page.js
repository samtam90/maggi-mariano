import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Monza Brianza",
  canonical: links.servizi["spurgo-fosse-biologiche"]["monza-brianza"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Monza Brianza", 
    locationNames: {label: "Monza Brianza", href: "monza-brianza"}  
});
