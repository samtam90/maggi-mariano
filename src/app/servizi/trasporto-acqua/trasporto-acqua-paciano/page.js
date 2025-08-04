import { getMetadata } from "../../frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../../app.config";

export const metadata = getMetadata({
  title: "Trasporto acqua Paciano",
  canonical: links.servizi["trasporto-acqua"]["paciano"]
});
export default withBaseProps({ 
    title: "Trasporto acqua Paciano", 
    locationNames: {label: "Paciano", href: "paciano"}  
});