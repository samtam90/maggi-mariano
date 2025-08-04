import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Castel San Niccolò",
  canonical: links.servizi["trasporto-acqua"]["castel-san-niccolo"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Castel San Niccolò", 
    locationNames: {label: "Castel San Niccolò", href: "castel-san-niccolo"}  
});