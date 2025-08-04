import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Caserta",
  canonical: links.servizi["trasporto-acqua"]["caserta"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Caserta", 
    locationNames: {label: "Caserta", href: "caserta"}  
});