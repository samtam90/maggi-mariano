import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Anghiari",
  canonical: links.servizi["trasporto-acqua"]["anghiari"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Anghiari", 
    locationNames: {label: "Anghiari", href: "anghiari"}  
});