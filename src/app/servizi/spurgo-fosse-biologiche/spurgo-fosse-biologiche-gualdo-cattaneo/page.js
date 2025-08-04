import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo fosse biologiche Gualdo Cattaneo",
  canonical: links.servizi["spurgo-fosse-biologiche"]["gualdo-cattaneo"]
});
export default withBaseProps({ 
    title: "Spurgo fosse biologiche Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});
