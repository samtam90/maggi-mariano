import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto rifiuti Gualdo Cattaneo",
  canonical: links.servizi["trasporto-rifiuti"]["gualdo-cattaneo"]
});
export default withBaseProps({ 
    title: "Trasporto rifiuti Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});