import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Gualdo Cattaneo",
  canonical: links.servizi["trasporto-acqua"]["gualdo-cattaneo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Gualdo Cattaneo", 
    locationNames: {label: "Gualdo Cattaneo", href: "gualdo-cattaneo"}  
});