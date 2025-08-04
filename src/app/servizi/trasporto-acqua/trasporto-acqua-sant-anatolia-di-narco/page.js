import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Sant'Anatolia di Narco",
  canonical: links.servizi["trasporto-acqua"]["sant-anatolia-di-narco"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Sant'Anatolia di Narco", 
    locationNames: {label: "Sant'Anatolia di Narco", href: "sant-anatolia-di-narco"}  
});