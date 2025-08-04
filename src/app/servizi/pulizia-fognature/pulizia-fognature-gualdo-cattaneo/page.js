import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Pulizia fognature Gualdo Cattaneo",
  canonical: links.servizi["pulizia-fognature"]["gualdo-cattaneo"]
});
export default withBaseProps({ 
    title: "Pulizia fognature Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});
