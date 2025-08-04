import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Spurgo pozzi neri Gualdo Cattaneo",
  canonical: links.servizi["spurgo-pozzi-neri"]["gualdo-cattaneo"]
});
export default withBaseProps({ 
    title: "Spurgo pozzi neri Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});