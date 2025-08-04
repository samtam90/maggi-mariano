import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Vibo Valentia",
  canonical: links.servizi["trasporto-acqua"]["vibo-valentia"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Vibo Valentia", 
    locationNames: {label: "Vibo Valentia", href: "vibo-valentia"}  
});