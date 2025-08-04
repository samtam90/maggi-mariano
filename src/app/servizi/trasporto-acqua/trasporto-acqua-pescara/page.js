import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Pescara",
  canonical: links.servizi["trasporto-acqua"]["pescara"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Pescara", 
    locationNames: {label: "Pescara", href: "pescara"}  
});