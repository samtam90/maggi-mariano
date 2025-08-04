import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Asti",
  canonical: links.servizi["trasporto-acqua"]["asti"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Asti", 
    locationNames: {label: "Asti", href: "asti"}  
});